# Compatibility and releases

The document has its own semantic version. A release is published when a change to Samva's API
contracts changes the document, and never otherwise. Its version follows from the change against
the previous release:

| Change       | Before 1.0 | From 1.0 |
| ------------ | ---------- | -------- |
| `breaking`   | minor      | major    |
| `compatible` | patch      | minor    |

Releases v0.18.0 to v0.20.0 took their version from the `samva` TypeScript SDK release of the same
number; later releases are versioned by the document alone.

Each manifest records:

- `version`: the release's semantic version.
- `source.commit`: the Samva commit the document was generated from.
- `openapi.sha256` and `SHA256SUMS`: the checksum of the exact `openapi.json` bytes.
- `compatibility`: the change against the previous release.
  - `compatible`: operations, webhook events, fields, and enum members are only added, and no
    existing value becomes required.
  - `breaking`: an operation, path, schema, webhook event, or field was removed or narrowed, or a
    value became required.

The classification is conservative: a response or webhook body that gains a required field reads
as breaking. Each release's changelog entry lists the removed and added operations and webhook
events, the operations that narrowed, and the changed schemas and webhook events.

While the document is on 0.x, only the current release is maintained. Older releases stay
published and are never replaced.

Published releases are immutable. A defective release is not replaced or deleted: its GitHub
release is marked as withdrawn, a corrected release is published, and its notes point to the
replacement.

Automated consumer updates must pin the release asset and checksum from `manifest.json`, run their
generated-code diff and tests, and present the compatibility class for review. The live
`https://api.samva.dev/v1/openapi.json` endpoint moves with the API and is not a reproducible build
input.
