import type { RouteLocationRaw } from 'vue-router'
import type { IconBoxColor } from '/@src/components/base/icon/IconBox.vue'

export interface BaseFeature {
  title: string
  text: string
}

export interface SimpleFeature {
  title: string
  text: string
  link: RouteLocationRaw
}

export interface SimpleIconFeature {
  title: string
  text: string
  icon: string
}

export interface IconFeature {
  title: string
  text: string
  icon: string
  color: IconBoxColor
  link: RouteLocationRaw
}

export interface ImageFeature {
  title: string
  text: string
  image: string
  darkImage: string
  link: RouteLocationRaw
}

export interface CompleteFeature {
  title: string
  subtitle: string
  text: string
  icon: string
}

export interface BlobFeature {
  title: string
  subtitle: string
  text: string
  image: string
  link: RouteLocationRaw
}

export interface SocialLink {
  name: string
  icon: string
  url: string
}

export interface Job {
  icon: string
  title: string
  slug: string
  location: string
  duration: string
  salary?: string
  contact?: string
  content: {
    description?: {
      title: string
      text: string
    }[]
    aptitude?: {
      title: string
      skills: string[]
    }[]
    technologies?: {
      title: string
      tools: {
        title: string
        icon: string
      }[]
    }[]
  }
}

export interface Nft {
  id: number
  name: string
  description: string
  preview: string
  slug: string
  likes: number
  initialBid: {
    dollar: number
    eth: number
  }
  currentBid: {
    dollar: number
    eth: number
  }
  collection: {
    id: number
    name: string
    items: number
    picture: string
    thumbnails: {
      picture: string
    }[]
    url: string
  }
  seller: {
    id: number
    name: string
    picture: string
    url: string
  }
  biders: {
    id: number
    bid: number
    time: string
    name: string
    picture: string
    url: string
  }[]
  comments?: {
    picture: string
    name: string
    url: string
    text: string
    time: string
  }[]
  auctionEnd: string
  favorite: boolean
}

export interface HelpCenterArticle {
  slug: string
  title: string
  subtitle: string
  abstract?: string
  updated: string
  author: {
    name: string
    picture: string
  }
  content: string
}

export interface HelpCenterCategory {
  slug: string
  icon: string
  iconColor: string
  name: string
  text: string
  contributors: {
    name: string
    picture: string
  }[]
  articles: HelpCenterArticle[]
}
