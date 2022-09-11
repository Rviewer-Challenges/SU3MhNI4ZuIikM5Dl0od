export const contentBlockGProps = {
  props: [
    {
      name: 'title',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'text',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'images',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['see sample tab for an example data structure'],
    },
    {
      name: 'logos',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['see sample tab for an example data structure'],
    },
    {
      name: 'imageSquared',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
    {
      name: 'inverted',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
  ],
  slots: [],
}

export const contentBlockG = `
<script setup lang="ts">
import { content12 } from '/@src/data/blocks/content'
</script>

<template>
  <ContentBlockG
    :title="content12.title"
    :text="content12.text"
    :images="content12.images"
    :logos="content12.logos"
  />
</template>
`

export const contentBlockGSample = `
export const content12 = {
  title: 'They trust our brand',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum.',
  images: [
    {
      url: 'data:image/gif;base64,replace_with_your_image',
      label: 'featured image',
    },
    {
      url: 'data:image/gif;base64,replace_with_your_image',
      label: 'featured image',
    },
    {
      url: 'data:image/gif;base64,replace_with_your_image',
      label: 'featured image',
    },
    {
      url: 'data:image/gif;base64,replace_with_your_image',
      label: 'featured image',
    },
  ],
  logos: [
    {
      url: '/assets/brands/covenant.svg',
      label: 'featured image',
    },
    {
      url: '/assets/brands/proactive.svg',
      label: 'featured image',
    },
    {
      url: '/assets/brands/tribe.svg',
      label: 'featured image',
    },
    {
      url: '/assets/brands/infinite.svg',
      label: 'featured image',
    },
  ],
}
`
