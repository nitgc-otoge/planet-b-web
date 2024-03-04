type WorkItem = {
  title: string,
  description: string,
  date: string,
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
    category: string,
    title: string,
    credits: {
      name: string,
      role: string
    }[],
  }[]
}

export type { WorkItem }
