import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div class="px-4 py-8 mx-auto">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <img
            class="my-6"
            src="/logo.svg"
            width="128"
            height="128"
            alt="PLANET-B logo"
          />
          <h1 class="text-4xl font-bold">404</h1>
          <p class="my-4 italic">
            soko ni nakereba nai desune.
          </p>
          <a href="/" class="underline">Back</a>
        </div>
      </div>
    </>
  );
}
