export const testimonialsBlockCProps = {
  props: [
    {
      name: 'testimonials',
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
      values: ['number'],
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

export const testimonialsBlockC = `
<script setup lang="ts">
import { boxedTestimonials } from '/@src/data/blocks/testimonials'
</script>

<template>
  <TestimonialBlockC :testimonials="boxedTestimonials" squared />
</template>
`

export const testimonialsBlockCSample = `
export const boxedTestimonials = [
  {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia.',
    avatar: 'data:image/gif;base64,replace_with_your_image',
    name: 'Henry Statterman',
    position: 'Sales Manager',
    logo: '/assets/brands/infinite.svg',
  },
  {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia.',
    avatar: 'data:image/gif;base64,replace_with_your_image',
    name: 'Joey Bagara',
    position: 'Project Manager',
    logo: '/assets/brands/proactive.svg',
  },
  {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia.',
    avatar: 'data:image/gif;base64,replace_with_your_image',
    name: 'Linda Stinson',
    position: 'Art Director',
    logo: '/assets/brands/tribe.svg',
  },
  {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia.',
    avatar: 'data:image/gif;base64,replace_with_your_image',
    name: 'Anika Geller',
    position: 'Business Analyst',
    logo: '/assets/brands/kromo.svg',
  },
]
`
