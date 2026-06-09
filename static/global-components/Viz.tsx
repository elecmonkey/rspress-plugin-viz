import { useEffect, useState } from 'react';

interface VizProps {
  graph: string;
  className?: string;
  scale?: number | string;
}

type VizInstance = {
  renderSVGElement: (
    graph: string,
    options?: {
      graphAttributes?: Record<string, string>;
    },
  ) => SVGSVGElement;
};

let vizPromise: Promise<VizInstance> | undefined;

function isBlack(value: string | null): boolean {
  return value === 'black' || value === '#000000' || value === '#000';
}

function isWhite(value: string | null): boolean {
  return value === 'white' || value === '#ffffff' || value === '#fff';
}

function adaptColor(element: Element) {
  const stroke = element.getAttribute('stroke');
  if (isBlack(stroke)) {
    element.setAttribute('stroke', 'currentColor');
  }

  const fill = element.getAttribute('fill');
  if (isBlack(fill)) {
    element.setAttribute('fill', 'currentColor');
  } else if (isWhite(fill)) {
    element.setAttribute('fill', 'var(--rp-c-bg)');
  }

  if (element.tagName.toLowerCase() === 'text' && !fill) {
    element.setAttribute('fill', 'currentColor');
  }

  for (const child of Array.from(element.children)) {
    adaptColor(child);
  }
}

function applyScaledSize(svgElement: SVGSVGElement, scale: number) {
  if (scale === 1) {
    return;
  }

  for (const attrName of ['width', 'height']) {
    const raw = svgElement.getAttribute(attrName);
    if (!raw) {
      continue;
    }

    const match = raw.trim().match(/^([0-9]*\.?[0-9]+)\s*([a-z%]*)$/i);
    if (!match) {
      continue;
    }

    const value = Number(match[1]) * scale;
    const unit = match[2] || '';
    svgElement.setAttribute(attrName, `${value}${unit}`);
  }
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

async function getVizInstance(): Promise<VizInstance> {
  if (!vizPromise) {
    vizPromise = import('@viz-js/viz').then(({ instance }) => instance());
  }
  return vizPromise;
}

export default function Viz({ graph, className = 'viz', scale = 1 }: VizProps) {
  const [html, setHtml] = useState('Loading graph...');

  useEffect(() => {
    let cancelled = false;

    async function render() {
      try {
        const viz = await getVizInstance();
        const code = decodeURIComponent(graph);
        const svgElement = viz.renderSVGElement(code, {
          graphAttributes: {
            bgcolor: 'transparent',
          },
        });

        adaptColor(svgElement);
        applyScaledSize(svgElement, Number(scale) || 1);

        if (!cancelled) {
          setHtml(svgElement.outerHTML);
        }
      } catch (error) {
        const message =
          error instanceof Error ? error.message : String(error ?? 'Unknown error');
        if (!cancelled) {
          setHtml(`<pre class="viz-error">${escapeHtml(message)}</pre>`);
        }
      }
    }

    render();

    return () => {
      cancelled = true;
    };
  }, [graph, scale]);

  return (
    <div
      className={`viz-container ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
