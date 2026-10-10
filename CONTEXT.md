# Memuli Components Context

## Purpose and boundaries

Components owns Memuli-specific shared visual tokens, app-shell primitives,
and the wordmark for web/native consumers. Product apps keep their own layout
adapters. General cross-product shell structures belong in shared platform
packages rather than being copied into this product package.

## Source map

- [README](README.md): package intent.
- [Package manifest](package.json): exports, peer dependencies, and checks.
- [Exports](src/index.ts): public package surface.
- [Theme](src/theme.ts): common token vocabulary.
- [App shell](src/appShell.ts): shared shell primitives.
- [Wordmark](src/MemuliWordmark.tsx): product branding component.

## Consumer contract

Maintain shared behavior and names across consumers. Check React, React Native,
and SVG peer compatibility before altering the public surface. A wordmark
experiment in logotype-lab is not automatically a production component change.
Do not put retention logic, backend authorization, or application navigation
state into this visual package.

Consumers may fetch a tagged archive rather than the current main branch.
Inspect each task-authorized consumer's manifest and lockfile before claiming a
package edit is used. Coordinate affected consumer changes and release versions
through the company's release policy; do not edit other repositories implicitly.

## Checks

After installing dependencies, run `npm run typecheck` and `npm run verify` for
code changes. Verify appearance in affected web/native consumers when rendering
changes. Documentation-only work needs link and diff checks, not a package bump.
