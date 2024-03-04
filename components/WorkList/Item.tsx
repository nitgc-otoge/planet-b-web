import type { WorkItem } from "../../types/workItem.ts"
import { SoundCloudEmbed } from '../SoundCloudEmbed.tsx'
import { BandcampEmbedPlayer } from "../BandcampEmbedPlayer.tsx";

export function Item(props: {
  data: WorkItem
}) {
  return (
    <div class="py-2">
      <div>{props.data.date}</div>
      <div class="mt-2 text-xl font-semibold">{props.data.title}</div>
      <p class="mt-2">{props.data.description}</p>
      {props.data.embed ? <div class="mt-4">
        {props.data.embed.soundcloud ? 
          <SoundCloudEmbed set-id={props.data.embed.soundcloud.setId} album-id={props.data.embed?.soundcloud?.albumId} album-name={props.data.embed?.soundcloud?.albumName}></SoundCloudEmbed>
          : props.data.embed.bandcamp ? 
          <BandcampEmbedPlayer id={props.data.embed.bandcamp.id}></BandcampEmbedPlayer> : ''
        }
      </div> : ''}
      <div class="mt-4 font-semibold">Track List</div>
      <table class="table-auto w-full text-left mt-2 text-sm">
        <thead>
          <tr>
            <th class=""></th>
            <th class="lg:w-96"></th>
          </tr>
        </thead>
        <tbody>
          {props.data.files.map((file) => (
              <tr>
                <td class="py-1">{file.title}</td>
                <td class="py-1">
                  {file.credits.map((credit, index) => (
                    <span>{credit.name}{file.credits.length - 1 !== index ? <span>,&nbsp;</span> : ''}</span>
                  ))}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}