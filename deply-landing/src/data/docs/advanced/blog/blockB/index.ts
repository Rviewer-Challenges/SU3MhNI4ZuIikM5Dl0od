export const blogPostsBlockBProps = {
  props: [
    {
      name: 'posts',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['see sample tab for an example data structure'],
    },
    {
      name: 'limit',
      type: 'number',
      required: 'false',
      default: '20',
      values: ['number'],
    },
    {
      name: 'upsideDown',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
  ],
  slots: [],
}

export const blogPostsBlockB = `
<script setup lang="ts">
import { resources } from '/@src/data/pages/blog'
</script>

<template>
  <ResourceGrid :posts="posts" :limit="3" upside-down />
</template>
`

export const blogPostsBlockBSample = `
export const resources = [
  {
    id: 0,
    image: '/assets/illustrations/blog/landscape-abstract-1.svg',
    title: 'How to run competitive team meetings',
    likes: '234',
    categories: [
      {
        name: 'Business',
      },
      {
        name: 'Tech',
      },
      {
        name: 'Productivity',
      },
    ],
    date: 'March 17th, 2022',
    duration: 2,
  },
  {
    id: 1,
    image: '/assets/illustrations/blog/landscape-abstract-2.svg',
    title: 'All you need to know about the One-on-One meeting',
    likes: '93',
    categories: [
      {
        name: 'Technique',
      },
      {
        name: 'Speech',
      },
      {
        name: 'work',
      },
    ],
    date: 'March 17th, 2022',
    duration: 2,
  },
  {
    id: 2,
    image: '/assets/illustrations/blog/landscape-abstract-3.svg',
    title: 'Top tips from Jeff Jordan on team management efficiency',
    likes: '54',
    categories: [
      {
        name: 'Management',
      },
      {
        name: 'Team',
      },
      {
        name: 'HR',
      },
    ],
    date: 'March 17th, 2022',
    duration: 2,
  },
]
`
