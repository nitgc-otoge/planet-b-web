type WorkItem = {
  title: string,
  description: string,
  category: 'BMS' | 'Music'
  date: string,
  images?: string[],
  credits: {
    name: string,
    role: string
  }[],
  url: {
    venue?: string,
    dl: string,
  },
  embed?: {
    soundcloud?: {
      setId: string,
      albumId: string,
      albumName: string,
    },
    bandcamp?: {
      id: string
    }
  },
  files: {
    trackNo?: number,
    genre?: string,
    title: string,
    credits: {
      name: string,
      role: string
    }[],
  }[]
}

export type { WorkItem }
