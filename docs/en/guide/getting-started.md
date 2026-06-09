# Getting Started

This section helps you add Graphviz support for Rspress.

## Install

```bash
# npm
npm i rspress-plugin-viz @viz-js/viz -D

# pnpm
pnpm add -D rspress-plugin-viz @viz-js/viz

# yarn
yarn add -D rspress-plugin-viz @viz-js/viz
```

## Setup

Register `pluginViz` in your Rspress config.

```ts
// rspress.config.ts
import { defineConfig } from '@rspress/core';
import { pluginViz } from 'rspress-plugin-viz';

export default defineConfig({
  plugins: [pluginViz()],
});
```

This docs site uses the plugin from this repository directly:

```ts
import { pluginViz } from './src';
```

## Usage

Use the `viz` language block in your Markdown files.

````md
```viz
digraph G {
  rankdir=LR
  a -> b [label="a to b"];
  b -> c [label="another label"];
}
```
````

This will be rendered as:

```viz
digraph G {
  rankdir=LR
  a -> b [label="a to b"];
  b -> c [label="another label"];
}
```

Usage notes:

- Optional scaling: add a scale factor after the language name, e.g. `{0.75}`.

````md
```viz {0.75}
digraph G {
  a -> b;
}
```
````

Rendered result:

```viz {0.75}
digraph G {
  a -> b;
}
```

## Advanced Configuration

`pluginViz` accepts the following options:

```ts
interface PluginVizOptions {
  /**
   * Custom CSS class for the wrapper div.
   */
  className?: string;

  /**
   * Compatibility alias for className.
   */
  class?: string;

  /**
   * Default SVG size scale.
   * @default 1
   */
  scale?: number;
}
```

## Acknowledgments

- [vitepress-plugin-viz](https://github.com/elecmonkey/vitepress-plugin-viz) - Original VitePress plugin that this Rspress plugin ports.
- [@viz-js/viz](https://github.com/mdaines/viz-js) - Graphviz rendering in WebAssembly.
