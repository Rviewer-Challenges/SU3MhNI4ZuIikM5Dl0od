export const testimonialsBlockAProps = {
  props: [
    {
      name: 'testimonials',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['see sample tab for an example data structure'],
    },
    {
      name: 'columns',
      type: 'number',
      required: 'false',
      default: '4',
      values: ['3', '4'],
    },
    {
      name: 'limit',
      type: 'number',
      required: 'false',
      default: '3',
      values: ['number'],
    },
    {
      name: 'boxed',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
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

export const testimonialsBlockA = `
<script setup lang="ts">
import { baseTestimonials } from '/@src/data/blocks/testimonials'
</script>

<template>
  <TestimonialBlockA :testimonials="baseTestimonials" boxed :columns="3" :limit="8" />
</template>
`

export const testimonialsBlockASample = `
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
