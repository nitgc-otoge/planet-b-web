import { type PageProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>PLANET-B</title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pb.prismistim.com/" />
        <meta property="og:title" content="PLANET-B" />
        <meta property="og:description" content="PLANET-B Web Site" />
        <meta property="og:image" content="/images/aoi_wakusei.jpg" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://pb.prismistim.com/" />
        <meta property="twitter:title" content="PLANET-B" />
        <meta property="twitter:description" content="PLANET-B Web Site" />
        <meta property="twitter:image" content={asset("/images/aoi_wakusei.jpg")} />
        <link rel="stylesheet" href="/styles.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=BIZ+UDGothic&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <script defer data-domain="pb.prismistim.com" src="https://tracker.snowsphere.net/js/plausible.js"></script>
      </head>
      <body>
        <div class="text-neutral-600">
          <Component />
        </div>
      </body>
    </html>
  );
}
