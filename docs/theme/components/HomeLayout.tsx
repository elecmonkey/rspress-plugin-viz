import { useDark, useLang } from '@rspress/core/runtime';
import { Button } from '@rspress/core/theme-original';
import Viz from '../../../static/global-components/Viz';

const graphText = `digraph G {
  rankdir=LR
  node [style=filled, fillcolor="#f8f8f8"]

  Docs -> Graphviz [label=" uses"]
  Graphviz -> "SVG" [label=" renders"]

  "SVG" [fillcolor="#e5e7eb"]
}`;

const darkGraphText = `digraph G {
  rankdir=LR
  node [style=filled, fillcolor="transparent"]

  Docs -> Graphviz [label=" uses"]
  Graphviz -> "SVG" [label=" renders"]

  "SVG" [fillcolor="transparent"]
}`;

const zhGraphText = `digraph G {
  rankdir=LR
  node [style=filled, fillcolor="#f8f8f8"]

  "文档" -> Graphviz [label=" 使用"]
  Graphviz -> "SVG 图表" [label=" 渲染"]

  "SVG 图表" [fillcolor="#e5e7eb"]
}`;

const zhDarkGraphText = `digraph G {
  rankdir=LR
  node [style=filled, fillcolor="transparent"]

  "文档" -> Graphviz [label=" 使用"]
  Graphviz -> "SVG 图表" [label=" 渲染"]

  "SVG 图表" [fillcolor="transparent"]
}`;

const features = [
  {
    icon: '📊',
    title: 'Graphviz Support',
    detail: 'Create diagrams using DOT language, powered by @viz-js/viz.',
  },
  {
    icon: '⚡️',
    title: 'WebAssembly Powered',
    detail: 'Fast rendering using the latest viz.js implementation.',
  },
  {
    icon: '🛠',
    title: 'Zero Config',
    detail: 'Automatic component registration and easy setup.',
  },
];

export function HomeLayout() {
  const lang = useLang();
  const isDark = useDark();
  const isZh = lang.startsWith('zh');
  const previewGraph = isZh
    ? isDark
      ? zhDarkGraphText
      : zhGraphText
    : isDark
      ? darkGraphText
      : graphText;

  return (
    <main className="viz-home">
      <section className="viz-home__hero">
        <div className="viz-home__content">
          <img className="viz-home__logo" src="/logo.svg" alt="" aria-hidden="true" />
          <h1 className="viz-home__title">Rspress Plugin Viz</h1>
          <p className="viz-home__subtitle">
            {isZh ? '将 Graphviz 引入你的文档' : 'Bring Graphviz to your documentation'}
          </p>
          <div className="viz-home__actions">
            <Button type="a" theme="brand" className="viz-home__button" href={isZh ? '/zh/guide/getting-started' : '/guide/getting-started'}>
              {isZh ? '快速开始' : 'Get Started'}
            </Button>
            <Button type="a" theme="alt" className="viz-home__button" href="https://github.com/elecmonkey/rspress-plugin-viz">
              {isZh ? '在 GitHub 上查看' : 'View on GitHub'}
            </Button>
          </div>
        </div>

        <div className="viz-home__demo" aria-label={isZh ? 'Graphviz 预览' : 'Graphviz preview'}>
          <div className="viz-home__card viz-home__code-card">
            <div className="viz-home__card-header">
              <span className="viz-home__dot viz-home__dot--red" />
              <span className="viz-home__dot viz-home__dot--yellow" />
              <span className="viz-home__dot viz-home__dot--green" />
            </div>
            <pre><code>{previewGraph}</code></pre>
          </div>

          <div className="viz-home__card viz-home__preview-card">
            <div className="viz-home__card-header">
              <span className="viz-home__preview-title">{isZh ? '预览' : 'Preview'}</span>
            </div>
            <div className="viz-home__preview">
              <Viz graph={encodeURIComponent(previewGraph)} className="viz-home__viz" />
            </div>
          </div>
        </div>
      </section>

      <section className="viz-home__features" aria-label="Features">
        {features.map((feature) => (
          <article className="viz-home__feature" key={feature.title}>
            <div className="viz-home__feature-icon">{feature.icon}</div>
            <h2>{feature.title}</h2>
            <p>{feature.detail}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
