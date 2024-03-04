import { JSX } from "preact";

export function SoundCloudEmbed(props: {
  setId: string,
  albumId: string,
  albumName: string
}) {
  return (
    <>
      <iframe width="500" height="300" scrolling="no" frameborder="no" allow="autoplay" src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/${props.setId}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=false`}></iframe>
      <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/planet_b_bms" title="PLANET-B" target="_blank" style="color: #cccccc; text-decoration: none;">PLANET-B</a> · <a href={`https://soundcloud.com/planet_b_bms/sets/${props.albumId}`} title={props.albumName} target="_blank" style="color: #cccccc; text-decoration: none;">{props.albumName}</a></div>
    </>
  );
}