export const testimonialsBlockBProps = {
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

export const testimonialsBlockB = `
<script setup lang="ts">
import { boxedTestimonials2 } from '/@src/data/blocks/testimonials'
</script>

<template>
  <TestimonialBlockB :testimonials="boxedTestimonials2" squared />
</template>
`

export const testimonialsBlockBSample = `
export const baseTestimonials = [
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: 'data:image/gif;base64,replace_with_your_image',
    name: 'Henry Statterman',
    position: 'Sales Manager',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: 'data:image/gif;base64,replace_with_your_image',
    name: 'Joey Bagara',
    position: 'Project Manager',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: 'data:image/gif;base64,replace_with_your_image',
    name: 'Linda Stinson',
    position: 'Art Director',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: 'data:image/gif;base64,replace_with_your_image',
    name: 'Anika Geller',
    position: 'Business Analyst',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: 'data:image/gif;base64,replace_with_your_image',
    name: 'Ross Martin',
    position: 'Product Manager',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: 'data:image/gif;base64,replace_with_your_image',
    name: 'Miranda Wallace',
    position: 'UX Designer',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: 'data:image/gif;base64,replace_with_your_image',
    name: 'Anna Klecenszki',
    position: 'Project Manager',
  },
  {
    content:
      "It's a really cool network. Like, we had a fight with Richard at one point, and I think they deleted some of my data, but then they brought it back. Just bro's being bro's.",
    avatar: 'data:image/gif;base64,replace_with_your_image',
    name: 'Taha El Maliki',
    position: 'Business Developer',
  },
]
`
