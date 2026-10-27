# Samva OpenAPI

The canonical OpenAPI 3.1 description for the [Samva](https://samva.dev) email API.

This repository is a read-only mirror. Samva's release process writes every file in it whenever
the API contracts change the document, and it does not accept pull requests. Report a problem with
the description as an issue.

## Artifacts

- `openapi.json` is the API description: every public operation and a `webhooks` section with the
  body of every webhook event Samva sends.
- `manifest.json` records the version, the Samva source commit, the compatibility class against
  the previous release, the checksum, and the document's shape. `manifest.schema.json` describes
  it.
- `SHA256SUMS` lets consumers verify the downloaded artifact before generation.

## Consume

Pin a release and verify its checksum before generating a client. Name the tag in your build
rather than resolving the newest one:

```sh
version=v0.40.0
curl -fsSLO "https://github.com/SamvaHQ/samva-openapi/releases/download/$version/openapi.json"
curl -fsSLO "https://github.com/SamvaHQ/samva-openapi/releases/download/$version/SHA256SUMS"
shasum -a 256 -c SHA256SUMS
```

Do not use the live API URL as a build input; it changes as the API does.

See [COMPATIBILITY.md](./COMPATIBILITY.md) for versioning and release behavior.

## License

MIT
