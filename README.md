# Samva OpenAPI

The canonical OpenAPI 3.1 description for the [Samva](https://samva.dev) email API.

## Artifacts

- `openapi.json` is the generated API description.
- `manifest.json` records the artifact version, compatibility classification, checksum, and shape.
- `SHA256SUMS` lets consumers verify the downloaded artifact before generation.

The OpenAPI document is generated from Samva's API contracts. Do not edit it by hand. Contract
changes produce a new immutable artifact version after compatibility review.

## Verify

```sh
bun install --frozen-lockfile
bun run validate
```

Validation checks the OpenAPI document, canonical JSON bytes, checksum, manifest counts, and public
email surface without requiring another repository.

## Consume

Reproducible SDK builds should pin an immutable release tag and verify the corresponding checksum.
Do not use the mutable live API URL as a build input.

See [COMPATIBILITY.md](./COMPATIBILITY.md) for versioning and release behavior.

## License

MIT
