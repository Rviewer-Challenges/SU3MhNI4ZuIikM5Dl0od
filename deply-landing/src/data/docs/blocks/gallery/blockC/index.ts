export const galleryBlockCProps = {
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

export const galleryBlockC = `
<script setup lang="ts">
import { boxedGallery } from '/@src/data/blocks/gallery'
</script>

<template>
  <GalleryBlockC :items="boxedGallery" />
</template>
`

export const galleryBlockCSample = `
import type { GalleryBlockCItem } from '/@src/components/blocks/gallery-blocks/GalleryBlockC.vue'

export const boxedGallery: GalleryBlockCItem[] = [
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    size: 1,
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    size: 2,
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    size: 1,
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    size: 3,
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    size: 3,
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    size: 3,
  },
]
`
