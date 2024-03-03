import { JSX } from "preact";

export function Item(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} class="py-2">
      <div class="text-lg font-semibold">BOFU2018</div>
      <div>archive name</div>
      <div>BMS</div>
      <div>2018-01-01</div>
    </div>
  );
}