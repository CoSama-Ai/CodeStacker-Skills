import React from "react";
import { DynamicRenderer } from "./dynamic-renderer";

const exampleConfig = {
  pageId: "home",
  blocks: [
    { id: "b1", type: "Hero", props: { title: "Dashboard", subtitle: "Config-driven UI" } },
    { id: "b2", type: "StatsGrid", props: { items: [{ label: "Users", value: "128" }, { label: "MRR", value: "$4,200" }] } },
  ],
};

export function ExamplePage() {
  return (
    <main className="ui-content">
      <div className="ui-page">
        <DynamicRenderer blocks={exampleConfig.blocks} />
      </div>
    </main>
  );
}
