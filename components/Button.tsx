import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { router } from "$fresh/src/server/router.ts";

export function Button(props: {
  children: JSX.Element | string,
  onClick?: () => void,
  disabled?: boolean,
  href: string
}) {
  return (
    <a
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      target="_blank"
      class="px-2 py-1 border-neutral-400 border-2 bg-white hover:bg-neutral-200 text-neutral-500 transition-colors"
    />
  );
}
