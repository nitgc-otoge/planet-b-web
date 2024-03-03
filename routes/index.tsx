import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { SectionTitle } from "../components/SectionTitle.tsx";
import { Description } from "../components/Descrtiption.tsx";
import { WorkList } from "../components/WorkList/Index.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div>
      <div class="my-4">
        <h1 class="text-3xl font-semibold">PLANET-B</h1>
        <div>(temporary ver.)</div>
      </div>
      <section class="mt-4">
        <SectionTitle title="About 'PLANET-B'" />
        <Description class="mt-2">
          PLANET-B is a team consisting of National Institute of Technology students and music video game lovers.
        </Description>
      </section>
      <section class="mt-4">
        <SectionTitle title="Works" sub-title="Click to download contents." />
        <Description></Description>
        <WorkList></WorkList>
      </section>
    </div>
  );
}
