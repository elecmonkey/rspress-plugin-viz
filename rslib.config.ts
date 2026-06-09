import { defineConfig } from '@rslib/core';

export default defineConfig({
  source: {
    tsconfigPath: 'tsconfig.build.json',
  },
  lib: [
    {
      format: 'esm',
      dts: {
        isolated: true
      }
    },
  ],
  output: {
    target: 'node',
    externals: [
      '@rspress/core',
      '@viz-js/viz',
      'react',
      'react/jsx-runtime',
      'unified',
      'unist-util-visit',
    ],
  },
});
