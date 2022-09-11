export const galleryBlockDProps = {
  props: [
    {
      name: 'items',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['see sample tab for an example data structure'],
    },
  ],
  slots: [],
}

export const galleryBlockD = `
<script setup lang="ts">
import { simpleGallery } from '/@src/data/blocks/gallery'
</script>

<template>
  <GalleryBlockD :items="simpleGallery" gap="xs" :columns="4" :limit="6" />
</template>
`

export const galleryBlockDSample = `
import type { GalleryBlockDItem } from '/@src/components/blocks/gallery-blocks/GalleryBlockD.vue'

export const simpleGallery: GalleryBlockDItem[] = [
  {
    image: 'data:image/gif;base64,replace_with_your_image',
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
  },
]
`
