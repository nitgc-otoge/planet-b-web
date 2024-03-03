import { JSX } from "preact";

export function Description(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <p {...props}>
      {props.children}
    </p>
  );
}