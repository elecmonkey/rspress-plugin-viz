# 更新日志

## 0.2.2

- 将自定义主题目录移至 `docs/theme/`，并纳入 TypeScript 类型检查。
- 添加 oxfmt 格式化工具。

## 0.2.1

- 切换到 npm OIDC 可信发布（无需 token）。
- CI 中使用 Node.js 24 以原生支持 npm 11。

## 0.2.0

- **Breaking**: 插件导出方式从具名导出改为默认导出。
  ```ts
  // 之前
  import { pluginViz } from 'rspress-plugin-viz';
  // 之后
  import viz from 'rspress-plugin-viz';
  ```

## 0.1.0-beta.0

- 将 Graphviz 代码块支持从 VitePress 迁移到 Rspress。
- 添加基于 remark 插件和全局 React 组件的 Rspress 插件集成。
