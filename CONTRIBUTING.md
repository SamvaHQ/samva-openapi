# Contributing

Thank you for helping improve Samva's API description.

`openapi.json`, `manifest.json`, and `SHA256SUMS` are generated release artifacts. Pull requests that
edit them by hand cannot be accepted. If the API description is incorrect, open an issue with the
affected path, operation, expected behavior, and observed behavior.

Contributions to validation, documentation, and tooling are welcome. Before opening a pull request:

```sh
bun install --frozen-lockfile
bun run validate
```

Keep validation deterministic and avoid network access after dependencies are installed.
