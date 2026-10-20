# Samva OpenAPI

The canonical OpenAPI 3.1 description for the [Samva](https://samva.dev) email API.

## Artifacts

- `openapi.json` is the API description: every public operation and, in releases after v0.20.0,
  a `webhooks` section with the body of every webhook event Samva sends.
- `manifest.json` records the version, the Samva source commit, the compatibility class against
  the previous release, the checksum, and the document's shape.
- `SHA256SUMS` lets consumers verify the downloaded artifact before generation.

The OpenAPI document is generated from Samva's API contracts and released whenever they change.
Samva's SDKs record the release they were generated from. Do not edit it by hand.

## Verify

```sh
bun install --frozen-lockfile
bun run validate
```

Validation checks the OpenAPI document, canonical JSON bytes, checksum, manifest counts, and public
email surface without requiring another repository.

## Consume

Pin a release and verify its checksum before generating a client. Name the tag in your build
rather than resolving the newest one:

```sh
version=v0.28.0
curl -fsSLO "https://github.com/SamvaHQ/samva-openapi/releases/download/$version/openapi.json"
curl -fsSLO "https://github.com/SamvaHQ/samva-openapi/releases/download/$version/SHA256SUMS"
shasum -a 256 -c SHA256SUMS
```

Do not use the live API URL as a build input; it changes as the API does.

See [COMPATIBILITY.md](./COMPATIBILITY.md) for versioning and release behavior.

## License

MIT
