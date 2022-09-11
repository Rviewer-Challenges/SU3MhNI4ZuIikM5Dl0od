export const contentBlockCProps = {
  props: [
    {
      name: 'title',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'subtitle',
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
      name: 'image',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'links',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'linksLabel',
      type: 'string',
      required: 'false',
      default: 'Learn More',
      values: ['string'],
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

export const contentBlockC = `
<script setup lang="ts">
import { content5 } from '/@src/data/blocks/content'
</script>

<template>
  <ContentBlockC
    :title="content5.title"
    :subtitle="content5.subtitle"
    :text="content5.text"
    :image="content5.image"
  />
</template>
`

export const contentBlockCSample = `
export const content5 = {
  title: 'The number one solution',
  subtitle: 'Some amazing features',
  image: 'data:image/gif;base64,replace_with_your_image',
  text: [
    {
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum.',
      link: 'index',
    },
    {
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum.',
      link: 'index',
    },
  ],
}
`
