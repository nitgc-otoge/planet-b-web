import { SectionTitle } from "../components/SectionTitle.tsx";
import { Description } from "../components/Descrtiption.tsx";
import { WorkList } from "../components/WorkList/Index.tsx";
import { LinkList } from "../components/LinkList.tsx";
import { GitHubRibbon } from "../components/GitHubRibbon.tsx";

export default function Home() {
  return (
    <div>
      <GitHubRibbon></GitHubRibbon>
      <div class="my-4">
        <img src="/logo.svg" class="w-24"></img>
      </div>
      <section class="mt-8">
        <SectionTitle title="PLANET-B" />
        <Description class="mt-2">
          PLANET-B とは、とある音楽ゲーム好きの高専生らによって構成された創作活動サークルです。
        </Description>
        <div class="mt-4">
          <LinkList></LinkList>
        </div>
      </section>
      <section class="mt-8">
        <SectionTitle title="Members"></SectionTitle>
        <Description class="mt-4">snowsphere, haco, akom, TNT, ヤマキ, MARIMO, DENEB, yaharito, maki, じゅん, nshi, はなえ, rokuYa, waya</Description>
      </section>
      <section class="mt-8">
        <SectionTitle title="Works" sub-title="Click to download contents." />
        <Description></Description>
        <WorkList></WorkList>
      </section>
      <div class="mt-8 text-center align-middle">
        ©{new Intl.DateTimeFormat('ja-JP', { timeZone: 'Asia/Tokyo', year: 'numeric' }).format(new Date()).slice(0, 4)} PLANET-B
      </div>
    </div>
  );
}
