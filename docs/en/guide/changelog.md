# Changelog

## 0.2.2

- Move custom theme directory to `docs/theme/` and include it in TypeScript type checking.
- Add oxfmt formatter.

## 0.2.1

- Switch to npm OIDC trusted publishing (no token required).
- Use Node.js 24 in CI for native npm 11 support.

## 0.2.0

- **Breaking**: Change plugin export from named export to default export.
  ```ts
  // Before
  import { pluginViz } from 'rspress-plugin-viz';
  // After
  import viz from 'rspress-plugin-viz';
  ```

## 0.1.0-beta.0

- Port Graphviz fenced code block support from VitePress to Rspress.
- Add Rspress plugin integration with a remark plugin and global React component.
