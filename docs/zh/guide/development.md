# 开发指南

本项目使用 `pnpm` 管理依赖。请确保 Node.js 版本满足 package `engines` 字段，并启用 corepack。

启用 corepack 以使用正确的包管理器版本：

```bash
corepack enable
```

安装依赖：

```bash
pnpm i
```

使用 Rslib 构建插件：

```bash
pnpm build
```

启动 Rspress 文档开发服务：

```bash
pnpm docs:dev
```

构建文档站点：

```bash
pnpm docs:build
```

## 贡献

欢迎贡献！请随时提交 Pull Request。
