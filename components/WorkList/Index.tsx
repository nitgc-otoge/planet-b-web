import { JSX } from "preact";
import { Item } from './Item.tsx'
import type { WorkItem } from "../../types/workItem.ts"
import { items } from "../../data/works.ts";

export function WorkList(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} class="mt-6 space-y-6">
      {items.map((data) => (
        <Item data={data}></Item>
      ))}
    </div>
  );
}