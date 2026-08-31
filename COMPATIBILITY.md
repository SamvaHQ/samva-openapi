# Compatibility and releases

Artifact versions use `YYYY-MM-DD.N`, where `N` starts at 1 and increments for multiple releases on
the same date. Git tags and release assets use the corresponding `vYYYY-MM-DD.N` form.

Each manifest classifies its change against the preceding artifact:

- `initial` — the first published artifact.
- `compatible` — additive or documentation-only changes that preserve existing clients.
- `breaking` — a removed or narrowed operation, field, schema, status, or behavior that can require
  a consumer change.

Breaking artifacts require explicit maintainer approval and release notes that name migration work.
CalVer is used because artifact publication cadence is independent from the API's compatibility
version. Reusing the API version alone was rejected because multiple compatible schema releases can
share that version and would not be addressable immutably.

Published versions are immutable. A defective artifact is not replaced or deleted: its release is
marked withdrawn, a corrected version is published, and consumers are directed to the replacement.
Deprecations remain in the schema before removal and are called out in the changelog.

Automated consumer updates must pin the release asset and checksum from `manifest.json`, run their
generated-code diff and tests, and present compatibility evidence for review. Mutable live endpoints
are not reproducible build inputs.
