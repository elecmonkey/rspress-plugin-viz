export interface PluginVizOptions {
  /**
   * Extra class name for the rendered diagram container.
   * @default 'viz'
   */
  className?: string;

  /**
   * Compatibility alias for vitepress-plugin-viz's `class` option.
   * @default 'viz'
   */
  class?: string;

  /**
   * Default scale for rendered SVG diagrams.
   * Code fence meta like ```viz {0.75} has higher priority.
   * @default 1
   */
  scale?: number;
}
