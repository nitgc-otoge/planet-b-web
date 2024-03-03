import { JSX } from "preact";

export function SectionTitle(props: {
  title: string,
  subTitle?: string
}) {
  return (
    <div {...props}>
      <div class="text-xl font-semibold">{props.title}</div>
      <div>{props.subTitle}</div>
    </div>
  );
}