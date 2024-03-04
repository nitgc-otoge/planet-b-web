import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { SectionTitle } from "../components/SectionTitle.tsx";
import { Description } from "../components/Descrtiption.tsx";
import { WorkList } from "../components/WorkList/Index.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="text-neutral-700">
      <div class="my-4">
        <h1 class="text-3xl font-semibold">PLANET-B</h1>
      </div>
      <section class="mt-8">
        <SectionTitle title="About 'PLANET-B'" />
        <Description class="mt-2">
          PLANET-B とは、とある音楽ゲーム好きの高専生らによって構成された創作活動チームです。
        </Description>
        <Description class="mt-2">
          PLANET-B is a team consisting of National Institute of Technology students and music video game lovers.
        </Description>
      </section>
      <section class="mt-8">
        <SectionTitle title="Works" sub-title="Click to download contents." />
        <Description></Description>
        <WorkList></WorkList>
      </section>
      <section class="mt-8">
        <SectionTitle title="Members"></SectionTitle>
        <Description class="mt-4">snowsphere, haco, akom, TNT, ヤマキ, MARIMO, DENEB, maki, じゅん, はなえ, rokuYa, waya</Description>
      </section>
    </div>
  );
}
