import { SectionTitle } from "../components/SectionTitle.tsx";
import { Description } from "../components/Descrtiption.tsx";
import { WorkList } from "../components/WorkList/Index.tsx";

export default function Home() {
  return (
    <div>
      <div class="my-4">
        <img src="/logo.svg" class="w-24"></img>
      </div>
      <section class="mt-8">
        <SectionTitle title="About 'PLANET-B'" />
        <Description class="mt-2">
          PLANET-B とは、とある音楽ゲーム好きの高専生らによって構成された創作活動サークルです。
        </Description>
      </section>
      <section class="mt-8">
        <SectionTitle title="Members"></SectionTitle>
        <Description class="mt-4">snowsphere, haco, akom, TNT, ヤマキ, MARIMO, DENEB, yaharito, maki, じゅん, はなえ, rokuYa, waya</Description>
      </section>
      <section class="mt-8">
        <SectionTitle title="Works" sub-title="Click to download contents." />
        <Description></Description>
        <WorkList></WorkList>
      </section>
      <div class="mt-8 text-center">
        ©2024 PLANET-B
      </div>
    </div>
  );
}
