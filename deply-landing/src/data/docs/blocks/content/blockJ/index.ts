export const contentBlockJProps = {
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
      name: 'image',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'counters',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['see sample tab for an example data structure'],
    },
    {
      name: 'link',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'linkLabel',
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

export const contentBlockJ = `
<script setup lang="ts">
import { content16 } from '/@src/data/blocks/content'
</script>

<template>
  <ContentBlockJ
    :title="content16.title"
    :text="content16.text"
    :image="content16.image"
    :counters="content16.counters"
  />
</template>
`

export const contentBlockJSample = `
export const content16 = {
  title: 'Great starter kits',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum.',
  image: 'data:image/gif;base64,replace_with_your_image',
  link: 'index',
  counters: [
    {
      icon: 'logos:bootstrap',
      number: 250,
      text: 'Bootstrap components',
    },
    {
      icon: 'logos:bulma',
      number: 180,
      text: 'Bulma components',
    },
    {
      icon: 'logos:android-icon',
      number: 94,
      text: 'Android components',
    },
  ],
}
`
