import React from "react";
import { ComponentRegistry, BlockType } from "./component-registry";

type AnyBlock = { id: string; type: BlockType; props: any };

function isObject(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null;
}

function validateProps(type: BlockType, props: unknown): boolean {
  // Minimal manual validation example.
  // Replace with Zod if your stack allows it.
  if (!isObject(props)) return false;

  if (type === "Hero") return typeof props.title === "string";
  if (type === "StatsGrid") return Array.isArray((props as any).items);

  return false;
}

export function DynamicRenderer({ blocks }: { blocks: AnyBlock[] }) {
  return (
    <div className="ui-stack">
      {blocks.map((b) => {
        const Comp = ComponentRegistry[b.type];
        if (!Comp) return <div key={b.id} className="ui-alert ui-alert-warning">Unknown block: {b.type}</div>;

        if (!validateProps(b.type, b.props)) {
          return <div key={b.id} className="ui-alert ui-alert-danger">Invalid props for: {b.type}</div>;
        }

        return <Comp key={b.id} {...b.props} />;
      })}
    </div>
  );
}
