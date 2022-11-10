import { Anime, AnimeType, Promo } from '../types'

const API_ENDPOINT = 'https://api.jikan.moe'
const API_VERSION = 4
const NSFW_ENABLED = false

type RawImageData = {
  image_url: string
  small_image_url: string
  medium_image_url?: string
  large_image_url: string
  maximum_image_url?: string
}

export type RawAnimeData = {
  mal_id: number
  aired: {
    from: string
  }
  trailer: {
    youtube_id: string
    url: string
    embed_url: string
  }
  images: {
    jpg: RawImageData
    webp: RawImageData
  }
  title: string
  episodes: number
  status: string
  type: AnimeType
  year: number
  score: number
  synopsis: string
  scored_by: number
  genres: Array<{
    name: string
  }>
  streaming: Array<{
    name: string
    url: string
  }>
}

export type RawPromoData = {
  entry: {
    mal_id: number
    images: {
      jpg: RawImageData
      webp: RawImageData
    }
    title: string
  }
  trailer: {
    youtube_id: string
    url: string
    embed_url: string
    images: RawImageData
  }
}

export type JikanAPIResponse<T> = {
  pagination: {
    last_visible_page: number
    has_next_page: boolean
    current_page: number
  }
  data: T
}

export const getTopAnime = (page: number = 1) =>
  `${API_ENDPOINT}/v${API_VERSION}/top/anime?page=${page}`

export const getAnimeFullById = (id: number) =>
  `${API_ENDPOINT}/v${API_VERSION}/anime/${id}/full`

export const getAnimeById = (id: number) =>
  `${API_ENDPOINT}/v${API_VERSION}/anime/${id}`

export const getWatchRecentPromos = () =>
  `${API_ENDPOINT}/v${API_VERSION}/watch/promos`

export const getAnimeByName = (page: number = 1, name: string) =>
  `${API_ENDPOINT}/v${API_VERSION}/anime?page=${page}&q=${name}&${
    NSFW_ENABLED ? 'nsfw' : 'sfw'
  }`

export function parseRawAnimeData(rawData: RawAnimeData): Anime {
  return {
    ...rawData,
    id: rawData.mal_id,
    coverURL: rawData.images.webp.image_url,
    largeImageURL: rawData.images.webp.large_image_url,
    videoURL: rawData.trailer.embed_url
      ? rawData.trailer.embed_url.replace('autoplay=1', 'autoplay=0')
      : '',
    episodeCount: rawData.episodes,
    genres: rawData.genres.map(({ name }: { name: string }) => name),
    year: new Date(rawData.aired.from).getFullYear(),
    votes: rawData.scored_by,
  }
}

export function parseRawPromoData(rawData: RawPromoData): Promo {
  return {
    id: rawData.entry.mal_id,
    title: rawData.entry.title,
    coverURL: rawData.trailer.images.large_image_url,
    videoURL: rawData.trailer.embed_url,
  }
}
