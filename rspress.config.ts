import * as path from 'node:path';
import { defineConfig } from '@rspress/core';
import viz from './src';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  themeDir: path.join(__dirname, 'docs', 'theme'),
  title: 'Rspress Plugin Viz',
  description: 'Graphviz support for Rspress',
  lang: 'en',
  icon: '/logo.svg',
  logo: '/logo.svg',
  logoText: 'Rspress Plugin Viz',
  locales: [
    {
      lang: 'en',
      label: 'English',
      title: 'Rspress Plugin Viz',
      description: 'Graphviz support for Rspress',
    },
    {
      lang: 'zh',
      label: '简体中文',
      title: 'Rspress Plugin Viz',
      description: '为 Rspress 添加 Graphviz 支持',
    },
  ],
  plugins: [viz()],
  themeConfig: {
    footer: {
      message: 'Released under the MIT License. Copyright © 2026-present Elecmonkey.',
    },
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/elecmonkey/rspress-plugin-viz',
      },
    ],
  },
  route: {
    cleanUrls: true,
  },
});
