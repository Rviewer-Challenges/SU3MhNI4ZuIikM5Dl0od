export const galleryBlockAProps = {
  props: [
    {
      name: 'items',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['see sample tab for an example data structure'],
    },
    {
      name: 'squared',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
  ],
  slots: [],
}

export const galleryBlockA = `
<script setup lang="ts">
import { masonryGallery } from '/@src/data/blocks/gallery'
</script>

<template>
  <GalleryBlockA :items="masonryGallery" squared />
</template>
`

export const galleryBlockASample = `
import type { GalleryBlockAItem } from '/@src/components/blocks/gallery-blocks/GalleryBlockA.vue'

export const masonryGallery: GalleryBlockAItem[] = [
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    size: '800x600',
    frame: '1x1',
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    size: '800x600',
    frame: '2x2',
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    size: '800x600',
    frame: '1x2',
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    size: '800x600',
    frame: '1x1',
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    size: '800x600',
    frame: '2x1',
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    size: '800x600',
    frame: '3x1',
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    size: '800x600',
    frame: '2x1',
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    size: '800x600',
    frame: '1x1',
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    size: '800x600',
    frame: '2x2',
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    size: '800x600',
    frame: '1x1',
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    size: '800x600',
    frame: '1x1',
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    size: '800x600',
    frame: '1x1',
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    size: '800x600',
    frame: '2x1',
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    size: '800x600',
    frame: '1x1',
  },
]
`
