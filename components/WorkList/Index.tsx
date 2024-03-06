import { JSX } from "preact";
import { Item } from './Item.tsx'
import { items } from "../../data/works.ts";

export function WorkList(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} class="mt-4 space-y-6">
      {items.map((data) => (
        <>
          <Item data={data}></Item>
          <div class="border"></div>
        </>
      ))}
    </div>
  );
}