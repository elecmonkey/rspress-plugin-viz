# AGENTS.md

## Project Overview

**rspress-plugin-viz** is an Rspress plugin that adds Graphviz diagram support to Rspress documentation sites using `@viz-js/viz` (WebAssembly-based Graphviz renderer).

Architecture:

- **Plugin core** (`src/`): A remark plugin (`remarkViz`) transforms ` ```viz ` code blocks into `<Viz>` MDX JSX elements. The main entry (`src/index.ts`) exports a default `RspressPlugin` factory that registers the remark plugin, a global React component, and global styles.
- **Runtime assets** (`static/`): Contains `Viz.tsx` (React component that renders Graphviz SVG client-side) and `viz.css`. These are **not compiled** by rslib -- they ship as source and are compiled by the consumer's Rspress build.
- **Documentation site** (`docs/`, `rspress.config.ts`): Bilingual (en/zh) Rspress site with a custom theme in `docs/theme/`.

The plugin is published as an ESM package. The compiled `dist/index.js` resolves `static/` assets at runtime via path calculation relative to `import.meta.url`.

## Release Process

1. Bump `version` in `package.json`.
2. Update changelog in both `docs/en/guide/changelog.md` and `docs/zh/guide/changelog.md` with the new version section.
3. Commit with message: `chore: release v<version>`.
4. Create tag: `git tag v<version>`.
5. Push commit and tag: `git push origin main && git push origin v<version>`.
6. CI (`.github/workflows/release.yml`) auto-publishes to npm via OIDC trusted publishing.
7. Dist-tag is inferred from the tag name: `-alpha.` -> alpha, `-beta.` -> beta, `-rc.` -> next, otherwise latest.
