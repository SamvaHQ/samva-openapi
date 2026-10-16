import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");
const fail = (message) => {
  throw new Error(message);
};
const assert = (condition, message) => {
  if (!condition) fail(message);
};
const sha256 = (value) => createHash("sha256").update(value).digest("hex");

const [artifactBytes, manifestBytes, checksums] = await Promise.all([
  read("openapi.json"),
  read("manifest.json"),
  read("SHA256SUMS"),
]);
const artifact = JSON.parse(artifactBytes);
const manifest = JSON.parse(manifestBytes);
const artifactHash = sha256(artifactBytes);
const operations = Object.values(artifact.paths).flatMap((path) =>
  Object.entries(path).filter(([method]) => method !== "parameters"),
).length;

// The repository's first artifact predates SDK-keyed releases and keeps its date-versioned
// manifest until the first SDK release replaces it.
const INITIAL_ARTIFACT = "2026-08-31.1";
const label =
  manifest.schemaVersion === 1 ? manifest.artifactVersion : `v${manifest.version}`;
if (manifest.schemaVersion === 1) {
  assert(manifest.artifactVersion === INITIAL_ARTIFACT, "schema version 1 is only the initial artifact");
} else {
  assert(manifest.schemaVersion === 2, "unsupported manifest schema version");
  assert(
    /^[0-9]+\.[0-9]+\.[0-9]+(-[0-9A-Za-z.-]+)?$/.test(manifest.version),
    "manifest version must be the SDK's semantic version",
  );
  assert(
    manifest.sdk?.package === "samva" && manifest.sdk?.version === manifest.version,
    "manifest SDK release must match its version",
  );
  assert(/^[a-f0-9]{40}$/.test(manifest.source?.commit ?? ""), "manifest source commit is missing");
  assert(
    ["initial", "compatible", "breaking"].includes(manifest.compatibility?.classification),
    "manifest compatibility class is missing",
  );
}

assert(
  artifactBytes === `${JSON.stringify(artifact, null, 2)}\n`,
  "openapi.json is not in canonical two-space JSON form",
);
assert(artifact.openapi === "3.1.0", "openapi.json must be OpenAPI 3.1.0");
assert(manifest.openapi.artifact === "openapi.json", "unexpected artifact path");
assert(manifest.openapi.sha256 === artifactHash, "manifest checksum does not match openapi.json");
assert(manifest.openapi.bytes === Buffer.byteLength(artifactBytes), "manifest byte count is stale");
assert(manifest.openapi.paths === Object.keys(artifact.paths).length, "manifest path count is stale");
assert(manifest.openapi.operations === operations, "manifest operation count is stale");
assert(
  manifest.openapi.schemas === Object.keys(artifact.components.schemas).length,
  "manifest schema count is stale",
);
assert(
  checksums === `${artifactHash}  openapi.json\n`,
  "SHA256SUMS does not exactly describe openapi.json",
);
assert(
  !/(sms|whatsapp|cpaas)/i.test(artifactBytes),
  "openapi.json contains a non-email channel operation, schema, or description",
);

process.stdout.write(`Validated ${label}: ${operations} operations, ${artifactHash}\n`);
