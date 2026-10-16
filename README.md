# Samva OpenAPI

The canonical OpenAPI 3.1 description for the [Samva](https://samva.dev) email API.

## Artifacts

- `openapi.json` is the API description the `samva` TypeScript SDK of the same version was
  generated from.
- `manifest.json` records the SDK version, the Samva source commit, the compatibility class
  against the previous release, the checksum, and the document's shape.
- `SHA256SUMS` lets consumers verify the downloaded artifact before generation.

The OpenAPI document is generated from Samva's API contracts and published with each SDK release.
Do not edit it by hand.

## Verify

```sh
bun install --frozen-lockfile
bun run validate
```

Validation checks the OpenAPI document, canonical JSON bytes, checksum, manifest counts, and public
email surface without requiring another repository.

## Consume

Pin the release whose tag matches the `samva` SDK version you use, and verify its checksum before
generating a client. Name the tag in your build rather than resolving the newest one:

```sh
version=v0.18.1 # the samva version your lockfile resolves
curl -fsSLO "https://github.com/SamvaHQ/samva-openapi/releases/download/$version/openapi.json"
curl -fsSLO "https://github.com/SamvaHQ/samva-openapi/releases/download/$version/SHA256SUMS"
shasum -a 256 -c SHA256SUMS
```

Do not use the live API URL as a build input; it changes as the API does.

See [COMPATIBILITY.md](./COMPATIBILITY.md) for versioning and release behavior.

## License

MIT
