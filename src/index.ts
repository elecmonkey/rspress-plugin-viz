import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { RspressPlugin } from '@rspress/core';
import { remarkViz } from './remarkViz';
import type { PluginVizOptions } from './types';

export type { PluginVizOptions } from './types';
export { remarkViz } from './remarkViz';

const packageRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const staticDir = join(packageRoot, 'static');

function pluginViz(options: PluginVizOptions = {}): RspressPlugin {
  return {
    name: 'rspress-plugin-viz',
    markdown: {
      remarkPlugins: [[remarkViz, options]],
      globalComponents: [join(staticDir, 'global-components', 'Viz.tsx')],
    },
    globalStyles: join(staticDir, 'global-styles', 'viz.css'),
    builderConfig: {
      source: {
        include: [packageRoot],
      },
    },
  };
}

export default pluginViz;
