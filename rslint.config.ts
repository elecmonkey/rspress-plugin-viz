import {
  defineConfig,
  js,
  jsxA11yPlugin,
  promisePlugin,
  reactHooksPlugin,
  reactPlugin,
  ts,
} from '@rslint/core';

export default defineConfig([
  {
    ignores: ['dist/**', 'doc_build/**', 'node_modules/**'],
  },
  js.configs.recommended,
  ts.configs.recommended,
  reactPlugin.configs.recommended,
  reactHooksPlugin.configs.recommended,
  jsxA11yPlugin.configs.recommended,
  promisePlugin.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  },
]);
