// Document https://fresh.deno.dev/docs/concepts/layouts

import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component, state }: PageProps) {
  return (
    <div class="layout">
      <div class="container mx-auto lg:px-24 px-6 my-12">
        <Component />
      </div>
    </div>
  );
}