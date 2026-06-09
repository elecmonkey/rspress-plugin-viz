# Development

This project uses `pnpm` for package management. Please ensure you have Node.js that satisfies the package `engines` field and corepack enabled.

Enable corepack to use the correct package manager version:

```bash
corepack enable
```

Install dependencies:

```bash
pnpm i
```

Build the plugin with Rslib:

```bash
pnpm build
```

Start the Rspress documentation development server:

```bash
pnpm docs:dev
```

Build the documentation site:

```bash
pnpm docs:build
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
