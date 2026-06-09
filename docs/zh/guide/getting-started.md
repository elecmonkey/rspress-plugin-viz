# 快速开始

本节会帮助你为 Rspress 添加 Graphviz 支持。

## 安装

```bash
# npm
npm i rspress-plugin-viz @viz-js/viz -D

# pnpm
pnpm add -D rspress-plugin-viz @viz-js/viz

# yarn
yarn add -D rspress-plugin-viz @viz-js/viz
```

## 配置

在 Rspress 配置中注册 `pluginViz`。

```ts
// rspress.config.ts
import { defineConfig } from '@rspress/core';
import { pluginViz } from 'rspress-plugin-viz';

export default defineConfig({
  plugins: [pluginViz()],
});
```

当前文档站点会直接使用本仓库主源码中的插件：

```ts
import { pluginViz } from './src';
```

## 使用

在 Markdown 中使用 `viz` 语言代码块。

````md
```viz
digraph G {
  rankdir=LR
  a -> b [label="a to b"];
  b -> c [label="another label"];
}
```
````

渲染效果如下：

```viz
digraph G {
  rankdir=LR
  a -> b [label="a to b"];
  b -> c [label="another label"];
}
```

使用说明：

- 可选缩放：在语言名之后添加缩放系数，例如 `{0.75}`。

````md
```viz {0.75}
digraph G {
  a -> b;
}
```
````

渲染效果如下：

```viz {0.75}
digraph G {
  a -> b;
}
```

## 高级配置

`pluginViz` 支持以下选项：

```ts
interface PluginVizOptions {
  /**
   * 自定义外层 div 的 CSS class。
   */
  className?: string;

  /**
   * className 的兼容别名。
   */
  class?: string;

  /**
   * 默认 SVG 缩放比例。
   * @default 1
   */
  scale?: number;
}
```

## 致谢

- [vitepress-plugin-viz](https://github.com/elecmonkey/vitepress-plugin-viz) - 本插件移植自原 VitePress 插件。
- [@viz-js/viz](https://github.com/mdaines/viz-js) - 基于 WebAssembly 的 Graphviz 渲染能力。
