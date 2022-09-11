export const galleryBlockBProps = {
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

export const galleryBlockB = `
<script setup lang="ts">
import { advancedGallery } from '/@src/data/blocks/gallery'
</script>

<template>
  <GalleryBlockB :items="advancedGallery" squared />
</template>
`

export const galleryBlockBSample = `
import type { GalleryBlockBRow } from '/@src/components/blocks/gallery-blocks/GalleryBlockB.vue'

export const advancedGallery: GalleryBlockBRow[] = [
  {
    items: [
      {
        image: 'data:image/gif;base64,replace_with_your_image',
        size: 1,
        date: 'Nov 11, 2021',
        liked: false,
        owner: {
          avatar: 'data:image/gif;base64,replace_with_your_image',
          name: 'Jane Mitchells',
        },
      },
      {
        image: 'data:image/gif;base64,replace_with_your_image',
        size: 1,
        date: 'Nov 11, 2021',
        liked: true,
        owner: {
          avatar: 'data:image/gif;base64,replace_with_your_image',
          name: 'Chiara Simoni',
        },
      },
      {
        image: 'data:image/gif;base64,replace_with_your_image',
        size: 2,
        date: 'Nov 13, 2021',
        liked: true,
        owner: {
          avatar: 'data:image/gif;base64,replace_with_your_image',
          name: 'Ben Wilson',
        },
      },
    ],
  },
  {
    items: [
      {
        image: 'data:image/gif;base64,replace_with_your_image',
        size: 1,
        date: 'Nov 14, 2021',
        liked: false,
        owner: {
          avatar: 'data:image/gif;base64,replace_with_your_image',
          name: 'Terry Spitz',
        },
      },
      {
        image: 'data:image/gif;base64,replace_with_your_image',
        size: 2,
        date: 'Nov 14, 2021',
        liked: false,
        owner: {
          avatar: 'data:image/gif;base64,replace_with_your_image',
          name: 'Anya Sykorsky',
        },
      },
      {
        image: 'data:image/gif;base64,replace_with_your_image',
        size: 2,
        date: 'Nov 15, 2021',
        liked: true,
        owner: {
          avatar: 'data:image/gif;base64,replace_with_your_image',
          name: 'Yoni Fuller',
        },
      },
    ],
  },
  {
    items: [
      {
        image: 'data:image/gif;base64,replace_with_your_image',
        size: 2,
        date: 'Nov 17, 2021',
        liked: false,
        owner: {
          avatar: 'data:image/gif;base64,replace_with_your_image',
          name: 'Jaime Escudero',
        },
      },
      {
        image: 'data:image/gif;base64,replace_with_your_image',
        size: 3,
        date: 'Nov 18, 2021',
        liked: true,
        owner: {
          avatar: 'data:image/gif;base64,replace_with_your_image',
          name: 'Lakisha Jackson',
        },
      },
      {
        image: 'data:image/gif;base64,replace_with_your_image',
        size: 2,
        date: 'Nov 18, 2021',
        liked: true,
        owner: {
          avatar: 'data:image/gif;base64,replace_with_your_image',
          name: 'Vishnu Prasad',
        },
      },
    ],
  },
  {
    items: [
      {
        image: 'data:image/gif;base64,replace_with_your_image',
        size: 1,
        date: 'Nov 18, 2021',
        liked: false,
        owner: {
          avatar: 'data:image/gif;base64,replace_with_your_image',
          name: 'Erik Smith',
        },
      },
      {
        image: 'data:image/gif;base64,replace_with_your_image',
        size: 1,
        date: 'Nov 20, 2021',
        liked: true,
        owner: {
          avatar: 'data:image/gif;base64,replace_with_your_image',
          name: 'Daniel Walder',
        },
      },
      {
        image: 'data:image/gif;base64,replace_with_your_image',
        size: 1,
        date: 'Nov 21, 2021',
        liked: false,
        owner: {
          avatar: 'data:image/gif;base64,replace_with_your_image',
          name: 'Trisha Haze',
        },
      },
    ],
  },
  {
    items: [
      {
        image: 'data:image/gif;base64,replace_with_your_image',
        size: 2,
        date: 'Nov 23, 2021',
        liked: false,
        owner: {
          avatar: 'data:image/gif;base64,replace_with_your_image',
          name: 'Robert Caradine',
        },
      },
      {
        image: 'data:image/gif;base64,replace_with_your_image',
        size: 1,
        date: 'Nov 24, 2021',
        liked: true,
        owner: {
          avatar: 'data:image/gif;base64,replace_with_your_image',
          name: 'Malik Shahid',
        },
      },
    ],
  },
  {
    items: [
      {
        image: 'data:image/gif;base64,replace_with_your_image',
        size: 2,
        date: 'Nov 26, 2021',
        liked: false,
        owner: {
          avatar: 'data:image/gif;base64,replace_with_your_image',
          name: 'Yasmine Gunei',
        },
      },
      {
        image: 'data:image/gif;base64,replace_with_your_image',
        size: 3,
        date: 'Nov 30, 2021',
        liked: false,
        owner: {
          avatar: 'data:image/gif;base64,replace_with_your_image',
          name: 'Anthony Tether',
        },
      },
      {
        image: 'data:image/gif;base64,replace_with_your_image',
        size: 2,
        date: 'Dec 2, 2021',
        liked: true,
        owner: {
          avatar: 'data:image/gif;base64,replace_with_your_image',
          name: 'Mia Schultz',
        },
      },
    ],
  },
  {
    items: [
      {
        image: 'data:image/gif;base64,replace_with_your_image',
        size: 2,
        date: 'Dec 2, 2021',
        liked: true,
        owner: {
          avatar: 'data:image/gif;base64,replace_with_your_image',
          name: 'Catarina Kolovskaya',
        },
      },
      {
        image: 'data:image/gif;base64,replace_with_your_image',
        size: 1,
        date: 'Dec 5, 2021',
        liked: true,
        owner: {
          avatar: 'data:image/gif;base64,replace_with_your_image',
          name: 'Robert Plant',
        },
      },
      {
        image: 'data:image/gif;base64,replace_with_your_image',
        size: 1,
        date: 'Dec 6, 2021',
        liked: false,
        owner: {
          avatar: 'data:image/gif;base64,replace_with_your_image',
          name: 'Christina Yang',
        },
      },
    ],
  },
]
`
