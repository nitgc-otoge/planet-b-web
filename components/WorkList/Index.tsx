import { JSX } from "preact";
import { Item } from './Item.tsx'

export function WorkList(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <Item></Item>
    </div>
  );
}