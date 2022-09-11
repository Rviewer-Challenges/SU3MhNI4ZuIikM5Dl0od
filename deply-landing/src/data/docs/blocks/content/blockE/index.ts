export const contentBlockEProps = {
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
      name: 'icons',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['see sample tab for an example data structure'],
    },
    {
      name: 'iconSquared',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
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

export const contentBlockE = `
<script setup lang="ts">
import { content8 } from '/@src/data/blocks/content'
</script>

<template>
  <ContentBlockE
    :title="content8.title"
    :text="content8.text"
    :icons="content8.icons"
    :image="content8.image"
  />
</template> 
`

export const contentBlockESample = `
export const content8 = {
  title: 'Works with all frameworks',
  image: 'data:image/gif;base64,replace_with_your_image',
  icons: [
    {
      url: '/assets/stacks/js.svg',
      label: 'featured image',
    },
    {
      url: '/assets/stacks/vuejs.svg',
      label: 'featured image',
    },
    {
      url: '/assets/stacks/reactjs.svg',
      label: 'featured image',
    },
    {
      url: '/assets/stacks/angular.svg',
      label: 'featured image',
    },
    {
      url: '/assets/stacks/alpinejs.svg',
      label: 'featured image',
    },
  ],
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia, quae actiones. Ita prorsus, inquam.',
}
`
