# rspress-plugin-viz

Add [Graphviz](https://graphviz.org/) support for [Rspress](https://rspress.rs/) using [@viz-js/viz](https://github.com/mdaines/viz-js/).

## Install

```bash
pnpm add -D rspress-plugin-viz @viz-js/viz
```

## Setup

```ts
// rspress.config.ts
import { defineConfig } from 'rspress/config';
import { pluginViz } from 'rspress-plugin-viz';

export default defineConfig({
  plugins: [pluginViz()],
});
```

## Usage

````md
```viz
digraph G {
  a -> b [label="a to b"];
  b -> c [label="another label"];
}
```
````

Scale can be configured in code fence meta:

````md
```viz {0.75}
digraph G {
  a -> b;
}
```
````

## Options

```ts
pluginViz({
  className: 'my-custom-viz-class',
  scale: 1,
});
```

`class` is also supported as a compatibility alias for `className`.

## License

MIT
