import type { WorkItem } from "../types/workItem.ts"

export const items: WorkItem[] = [
  {
    title: "Empty Planet",
    date: "2020-07-07",
    description: "PLANET-Bのメンバーによるオリジナル曲を集めたEP。",
    category: 'Music',
    url: {
      dl: "https://aoi-wakusei.bandcamp.com/album/empty-planet"
    },
    images: ['jacket_empty.jpg'],
    embed: {
      bandcamp: {
        id: "4240606146"
      }
    },
    credits: [
      { name: "snowsphere", role: "produce" },
      { name: "haco", role: "compose" },
      { name: "waya", role: 'compose' },
      { name: "みゆりん", role: 'illustration' },
    ],
    files: [
      {
        trackNo: 1,
        title: "Implicit World",
        credits: [
          {
            name: "snowsphere",
            role: ""
          }
        ],
      },
      {
        trackNo: 2,
        title: "目目",
        credits: [
          {
            name: "haco",
            role: ""
          }
        ],
      },
      {
        trackNo: 3,
        title: "Sprint Strings",
        credits: [
          {
            name: "waya",
            role: ""
          }
        ],
      },
      {
        trackNo: 4,
        title: "ill",
        credits: [
          {
            name: "haco",
            role: ""
          }
        ],
      }
    ]
  },
  {
    title: "archive_001",
    date: "2019-08-09",
    description: "これまでのBMS作品から2曲をノンストップMIXとして制作したネタ作品。",
    category: 'BMS',
    url: {
      dl: "https://mega.nz/file/PS5BHSwY#xeTRc5u8H4v0Eg_F6bV5dDQwHGab40TFBpL2g05ut_c"
    },
    credits: [
      { name: "snowsphere", role: "produce" }
    ],
    files: [
      {
        title: "archive_001",
        genre: "MIXED",
        credits: [
          {
            name: "PLANET-B (mixed by snowsphere)",
            role: ""
          }
        ],
      }
    ] 
  },
  {
    title: "poq",
    date: "2019-10-17",
    description: "PLANET-Bによるオリジナル音楽ゲーム。ゲーム本体はUnityとC#で制作し、照光式の押しボタンを組み合わせた専用のコントローラも同時に制作した。(未リリース)",
    category: 'Game',
    images: [
      'poq_screenshot.png', 'poq_controller.png'
    ],
    credits: [
      { name: "snowsphere", role: "produce" },
      { name: "じゅん", role: "development" },
      { name: "yaharito", role: "development" },
      { name: "nshi", role: "development" },
      { name: "maki", role: "development" },
      { name: "DENEB", role: "composer" },
    ],
    url: {},
    files: []
  },
  {
    title: "第二回 BMS衆議院選",
    date: "2019-06-24",
    description: "PLANET-Bメンバーと外部のBMS作家によって「鉄党」を結成し出馬したイベント。党として提出した作品数が足りず、無所属での参加となった。",
    category: 'BMS',
    url: {
      venue: "https://venue.bmssearch.net/bmsshuin2",
      dl: "https://example.com"
    },
    images: ['bmsshuin_poster.png'],
    credits: [
      { name: "snowsphere", role: "compose" },
      { name: "DENEB", role: "compose" },
      { name: "TNT1964", role: "lyric" },
      { name: "rokuYa", role: "voice" },
      { name: "akom", role: "chart" },
      { name: "じゅん", role: "web" },
      { name: "はなえ", role: "web" }
    ],
    files: [
      {
        genre: "TECHNO",
        title: "Fluctuation",
        credits: [
          {
            name: "Electro Controller",
            role: ""
          },
          {
            name: "snowsphere",
            role: "compose"
          },
          {
            name: "TNT1964",
            role: "lyric"
          },
          {
            name: "rokuYa",
            role: "voice"
          }
        ],
      },
      {
        title: "開き直ってパーティしようぜ！",
        genre: "PARTY",
        credits: [
          {
            name: "DENEB",
            role: "compose"
          },
          {
            name: "akom",
            role: "chart"
          }
        ],
      },
    ]
  },
  {
    title: "PLANET-B 2018",
    date: "2018-10-26",
    description: "G2R2018での参加楽曲に他メンバーの楽曲を加えたミニアルバム。同時期に行われた某文化祭ではCDでの配布も行った。",
    category: 'Music',
    url: {
      dl: "https://mega.nz/file/3bxElSgB#liEDCSSf04hlxqDYr5kNixM9P7zlD8AqClGeDbClf8Q"
    },
    images: ['jacket_2018.png'],
    credits: [
      { name: "snowsphere", role: "compose, design" },
      { name: "DENEB", role: "compose" },
      { name: "akom", role: "compose" },
      { name: "maki", role: "compose" },
      { name: "MARIMO", role: "compose" },
      { name: "じゅん", role: "web" },
      { name: "はなえ", role: "web" }
    ],
    files: [
      {
        trackNo: 1,
        title: "Dr. Darker",
        credits: [
          {
            name: "DENEB",
            role: ""
          }
        ],
      },
      {
        trackNo: 2,
        title: "namasute",
        credits: [
          {
            name: "maki",
            role: ""
          }
        ]
      },
      {
        trackNo: 3,
        title: "night bird",
        credits: [
          {
            name: "MARIMO",
            role: ""
          }
        ],
      },
      {
        trackNo: 4,
        title: "hello_world",
        credits: [
          {
            name: "snowsphere",
            role: ""
          }
        ],
      },
      {
        trackNo: 5,
        title: "Holy Code",
        credits: [
          {
            name: "akom",
            role: ""
          }
        ],
      }
    ] 
  },
  {
    title: "G2R2018",
    date: "2018-10-26",
    description: "PLANET-Bとして参加した最初のBMSイベント。",
    category: "BMS",
    url: {
      venue: "https://manbow.nothing.sh/event/event.cgi?action=More_def&num=48&event=123",
      dl: "https://mega.nz/file/7G5iyKQB#KuKvGSyoKSCs4xymfIZ8VaJMs1ObKVXAIJjUlpK2N1g"
    },
    credits: [
      { name: "snowsphere", role: "compose, design" },
      { name: "DENEB", role: "compose" },
      { name: "akom", role: "compose, chart" },
      { name: "maki", role: "compose" },
      { name: "MARIMO", role: "compose" },
      { name: "じゅん", role: "web" },
      { name: "はなえ", role: "web" }
    ],
    files: [
      {
        title: "hello_world",
        genre: "TECHNO",
        credits: [
          {
            name: "snowsphere",
            role: ""
          },
        ],
      },
      {
        title: "namasute",
        genre: "INDO",
        credits: [
          {
            name: "maki",
            role: ""
          }
        ],
      },
      {
        title: "Holy Code",
        genre: "POP CHORD",
        credits: [
          {
            name: "akom",
            role: ""
          }
        ],
      }
    ]
  },
  {
    title: "PLANET-B STAGE2",
    date: "2018-09-08",
    description: "PLANET-BメンバーによるオリジナルBMS第2弾。BMSとOSTを配布。",
    category: "BMS",
    images: ['jacket_stage2.png'],
    credits: [
      { name: "snowsphere", role: "compose, design" },
      { name: "maki", role: "compose" },
      { name: "こけ(ただれ)", role: "compose" },
      { name: "MARIMO", role: "compose" },
      { name: "DENEB", role: "compose" },
    ],
    url: {
      dl: "https://mega.nz/file/jfw2CQoI#qeTt8YEvvZ54idpgk1p6ZWhIaldZVfHY8cL87T8EDaQ" 
    },
    files: [
      {
        title: "Prison Party",
        genre: "mini Techno",
        credits: [
          {
            name: "DENEB",
            role: ""
          },
          {
            name: "akom",
            role: "chart(ANOTHER)"
          }
        ],
      },
      {
        title: "Tripping",
        genre: "Hardstep",
        credits: [
          {
            name: "こけ(ただれ)",
            role: ""
          }
        ],
      },
      {
        title: "Star Rise",
        genre: "特急「スターライズ1号」",
        credits: [
          {
            name: "maki",
            role: ""
          }
        ],
      },
      {
        title: "daybreak",
        genre: "Nostagix",
        credits: [
          {
            name: "snowsphere",
            role: ""
          }
        ],
      },
      {
        title: "sinkai",
        genre: "Underground",
        credits: [
          {
            name: "MARIMO",
            role: ""
          }
        ],
      },
      {
        title: "Prison Master",
        genre: "",
        credits: [
          {
            name: "DENEB",
            role: ""
          }
        ],
      },
      {
        title: "kurage",
        genre: "Neu Music",
        credits: [
          {
            name: "snowsphere",
            role: ""
          }
        ],
      },
      {
        title: "Beta",
        genre: "TRANCE",
        credits: [
          {
            name: "snowsphere",
            role: ""
          }
        ],
      }
    ]
  },
  {
    title: "kurage",
    date: "2018-08-08",
    description: "VTuber 海月ねう(をとは)氏をイメージし制作。当時、配信等で利用できる楽曲を募集していたため応募するために制作したが...",
    category: "Music",
    url: {
      dl: "https://mega.nz/file/qfB0gaiZ#ZETbt9YIQXcqURzJS-KgGxdhxuN0lQ8G-LMBIJxhk-s"
    },
    images: ['jacket_kurage.png'],
    credits: [
      { name: "snowsphere", role: "compose, design" },
    ],
    files: [
      {
        trackNo: 1,
        title: "kurage",
        credits: [
          {
            name: "snowsphere",
            role: ""
          }
        ],
      },
      {
        trackNo: 2,
        title: "Fuwari",
        credits: [
          {
            name: "snowsphere",
            role: ""
          }
        ],
      }
    ]
  },
  {
    title: "SAKURA*2 REMIXES EP",
    date: "2018-05-15",
    description: "新規メンバーを迎えて初めて作成したEP。さくらさくらをリミックスの題材とし音楽やDTMの基礎知識を身に着ける目的で企画し制作した。",
    url: {
      dl: "https://mega.nz/file/zaRS0YxA#VGY6uRf-Sg6W12oo8ebsMQoYkRDa2YiWxHtpd5ECHi0"
    },
    images: ['jacket_sakura.jpg'],
    category: 'Music',
    credits: [
      { name: "snowsphere", role: "compose, design" },
      { name: "maki", role: "compose" },
      { name: "じゅん", role: "compose" },
      { name: "TNT", role: "compose" },
      { name: "MARIMO", role: "compose" },
      { name: "こけ(ただれ)", role: "compose" },
    ],
    files: [
      {
        trackNo: 1,
        title: "神秘的な何か",
        credits: [
          {
            name: "maki",
            role: ""
          },
        ],
      },
      {
        trackNo: 2,
        title: "電子ノサクラ(short ver.)",
        credits: [
          {
            name: "じゅん",
            role: ""
          }
        ],
      },
      {
        trackNo: 3,
        title: "桜閣",
        credits: [
          {
            name: "TNT",
            role: ""
          }
        ],
      },
      {
        trackNo: 4,
        title: "古流の花",
        credits: [
          {
            name: "MARIMO",
            role: ""
          }
        ],
      },
      {
        trackNo: 5,
        title: "EDM SAKURA EDM",
        credits: [
          {
            name: "こけ(ただれ)",
            role: ""
          }
        ],
      },
      {
        trackNo: 6,
        title: "Yozakura (UnDeRgRoUnD)",
        credits: [
          {
            name: "snowsphere",
            role: ""
          }
        ],
      }
    ]
  },
  {
    title: "PLANET-B STAGE1",
    date: "2018-02-01",
    category: 'BMS',
    description: "PLANET-Bとして初めて公開した作品群。当初はBMSとOST、LR2のスキンも含めて配布する予定だったが、時間の都合で最終的にはBMSとOSTの配布のみとなった。",
    url: {
      dl: "https://mega.nz/file/uKI0kI4L#CgaXlAOQFmKrDPMk7VypfsPbfpSe8TQtrbveC9uor-U"
    },
    images: [
      'jacket_stage1.png'
    ],
    credits: [
      { name: "snowsphere", role: "compose" },
      { name: "TNT", role: "compose" },
      { name: "akom", role: "compose, movie" },
      { name: "ヤマキ", role: "compose" },
    ],
    files: [
      {
        title: "Alpha",
        genre: "Lite Liquid Funk",
        credits: [
          {
            name: "snowsphere",
            role: ""
          },
        ],
      },
      {
        title: "Cosmos dream",
        genre: "Space",
        credits: [
          {
            name: "TNT",
            role: ""
          }
        ],
      },
      {
        title: "space party!",
        genre: "Beat",
        credits: [
          {
            name: "akom",
            role: ""
          }
        ],
      },
      {
        title: "bathyscaphe",
        genre: "Electronica",
        credits: [
          {
            name: "snowsphere",
            role: ""
          }
        ],
      },
      {
        title: "ice code (Prototype)",
        genre: "Happy Hardcore",
        credits: [
          {
            name: "akom",
            role: ""
          }
        ],
      },
      {
        title: "hard rush!",
        genre: "Hardcore",
        credits: [
          {
            name: "akom",
            role: ""
          }
        ],
      },
      {
        title: "One planet end",
        credits: [
          {
            name: "ヤマキ",
            role: ""
          }
        ],
      },
    ]
  },
  {
    title: "StartinG!",
    date: "2016-11-01",
    category: 'Music',
    description: "PLANET-Bとして活動する前の作品。CD版とDL版の両方を用意し、CD版は某文化祭で配布。",
    url: {
      dl: "https://mega.nz/file/zWBgACbD#XA6GJ1K-TjIzSITWPfNvkfSn6_98yst5Z_2BvaxBllk"
    },
    images: [
      'jacket_starting.jpg',
      'tracklist_starting.jpg'
    ],
    embed: {
      soundcloud: {
        type: 'track',
        setId: "282083732",
        albumId: "starting-xross-fade-demo",
        albumName: "StartinG!"
      }
    },
    credits: [
      { name: "snowsphere", role: "compose" },
      { name: "こけ (haco)", role: "compose" },
      { name: "NEDUHC (akom)", role: "compose" },
      { name: "n00b", role: "compose" }
    ],
    files: [
      {
        trackNo: 1,
        title: "daybreak at Shrine",
        credits: [
          {
            name: "snowsphere",
            role: ""
          }
        ],
      },
      {
        trackNo: 2,
        title: "Toy box",
        credits: [
          {
            name: "こけ",
            role: ""
          }
        ]
      },
      {
        trackNo: 3,
        title: "good night",
        credits: [
          {
            name: "NEDUHC",
            role: ""
          }
        ],
      },
      {
        trackNo: 4,
        title: "UMD CityWalk",
        credits: [
          { name: "n00b", role: "" }
        ]
      },
      {
        trackNo: 5,
        title: "Halka + Renka mega mix (DL only track)",
        credits: [
          {
            name: "Jewel Kiss remixed by snowsphere",
            role: ""
          }
        ]
      },
      {
        trackNo: 5,
        title: "PPAP (CD only track)",
        credits: [
          {
            name: "snowsphere",
            role: ""
          }
        ]
      }
    ]
  }
]