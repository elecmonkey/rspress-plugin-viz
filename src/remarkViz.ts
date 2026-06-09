import type { Code, Root } from 'mdast';
import type { MdxJsxAttribute, MdxJsxFlowElement } from 'mdast-util-mdx-jsx';
import type { Plugin } from 'unified';
import { visit } from 'unist-util-visit';
import type { PluginVizOptions } from './types';

const VIZ_LANGUAGE_RE = /^viz/;
const SCALE_META_RE = /\{\s*([0-9]*\.?[0-9]+)\s*\}/;

function createAttribute(name: string, value: string): MdxJsxAttribute {
  return {
    type: 'mdxJsxAttribute',
    name,
    value,
  };
}

function getScale(node: Code, options?: PluginVizOptions): number {
  const scaleMatch = node.meta?.match(SCALE_META_RE);
  if (scaleMatch) {
    return Number(scaleMatch[1]);
  }
  return options?.scale ?? 1;
}

function createVizNode(
  node: Code,
  options?: PluginVizOptions,
): MdxJsxFlowElement {
  const className = options?.className ?? options?.class ?? 'viz';
  const scale = getScale(node, options);

  return {
    type: 'mdxJsxFlowElement',
    name: 'Viz',
    attributes: [
      createAttribute('graph', encodeURIComponent(node.value)),
      createAttribute('scale', String(scale)),
      createAttribute('className', className),
    ],
    children: [],
  };
}

export const remarkViz: Plugin<[PluginVizOptions?], Root> = options => {
  return tree => {
    visit(tree, 'code', node => {
      if (!node.lang || !VIZ_LANGUAGE_RE.test(node.lang)) {
        return;
      }

      Object.assign(node, createVizNode(node, options));
    });
  };
};
