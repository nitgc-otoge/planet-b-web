import { JSX } from "preact";

export function BandcampEmbedPlayer(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <iframe style="border: 0; width: 400px; height: 274px;" src="https://bandcamp.com/EmbeddedPlayer/album=4240606146/size=large/bgcol=eeeeee/linkcol=056cc4/artwork=small/transparent=true/" seamless><a href="https://aoi-wakusei.bandcamp.com/album/empty-planet">Empty Planet by PLANET-B</a></iframe>
    </div>
  );
}