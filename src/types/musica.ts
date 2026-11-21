export type MusicType = 'song' | 'album' | 'playlist' | 'video'

export interface MusicItem {
  id: string
  title: string
  subtitle: string
  cover: string
  type: MusicType
}

export interface UserPlaylist {
  id: string
  name: string
  owner: string
}