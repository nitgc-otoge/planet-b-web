import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { LinkBtn } from "./LinkBtn.tsx";

type LinkItem = {
  href: string,
  label: string
}

export function LinkList() {
  const links: LinkItem[] = [
    { href: "https://twitter.com/aoi_wakusei", label: "X" },
    { href: "https://soundcloud.com/planet_b_bms", label: "SoundCloud" },
    { href: "https://aoi-wakusei.bandcamp.com/", label: "bandcamp" }
  ]

  return (
    <div class="flex gap-x-2">
      {links.map((link) => (
        <LinkBtn href={link.href}>{link.label}</LinkBtn>
      ))}
    </div>
  );
}
