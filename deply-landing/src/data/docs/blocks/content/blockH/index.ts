export const contentBlockHProps = {
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
      name: 'limit',
      type: 'number',
      required: 'false',
      default: '3',
      values: ['2', '3', '4'],
    },
    {
      name: 'imageSquared',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
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
      name: 'inverted',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
  ],
  slots: [],
}

export const contentBlockH = `
<script setup lang="ts">
import { content13 } from '/@src/data/blocks/content'
</script>

<template>
  <ContentBlockH 
    :title="content13.title" 
    :text="content13.text" 
    :images="content13.images" 
  />
</template>  
`

export const contentBlockHSample = `
export const content13 = {
  title: 'Ready To Go?',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia, quae actiones.',
  images: [
    {
      url: 'data:image/gif;base64,replace_with_your_image',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit',
      link: 'index',
    },
    {
      url: 'data:image/gif;base64,replace_with_your_image',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit',
      link: 'index',
    },
    {
      url: 'data:image/gif;base64,replace_with_your_image',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit',
      link: 'index',
    },
    {
      url: 'data:image/gif;base64,replace_with_your_image',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit',
      link: 'index',
    },
  ],
}
`
