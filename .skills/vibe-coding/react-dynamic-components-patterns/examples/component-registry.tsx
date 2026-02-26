import React from "react";

// Example block components
export function Hero(props: { title: string; subtitle?: string }) {
  return (
    <section className="ui-card ui-card-body">
      <h1 className="ui-h1">{props.title}</h1>
      {props.subtitle ? <p className="ui-muted">{props.subtitle}</p> : null}
    </section>
  );
}

export function StatsGrid(props: { items: Array<{ label: string; value: string }> }) {
  return (
    <section className="ui-card ui-card-body">
      <div className="ui-grid">
        {props.items.map((it, i) => (
          <div key={i} className="ui-card ui-card-body">
            <div className="ui-caption">{it.label}</div>
            <div className="ui-h2">{it.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Registry (allow-list)
export const ComponentRegistry = {
  Hero,
  StatsGrid,
} as const;

export type BlockType = keyof typeof ComponentRegistry;
