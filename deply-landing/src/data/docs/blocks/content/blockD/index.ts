export const contentBlockDProps = {
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
      name: 'images',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['see sample tab for an example data structure'],
    },
    {
      name: 'limit',
      type: 'number',
      required: 'false',
      default: '2',
      values: ['number'],
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

export const contentBlockD = `
<script setup lang="ts">
import { content7 } from '/@src/data/blocks/content'
</script>

<template>
  <ContentBlockD
    :title="content7.title"
    :subtitle="content7.subtitle"
    :text="content7.text"
    :images="content7.images"
    link="index"
    inverted
  />
</template>     
`

export const contentBlockDSample = `
export const content7 = {
  title: 'The number one solution',
  subtitle: 'Some amazing features',
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
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia, quae actiones. Ita prorsus, inquam; Rhetorice igitur, inquam, nos mavis quam dialectice disputare? Ita ne hoc quidem modo paria peccata sunt.',
  link: 'index',
}
`
