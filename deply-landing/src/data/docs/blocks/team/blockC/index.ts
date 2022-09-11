export const teamBlockCProps = {
  props: [
    {
      name: 'items',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['see sample tab for an example data structure'],
    },
    {
      name: 'columns',
      type: 'number',
      required: 'false',
      default: '3',
      values: ['3', '4'],
    },
    {
      name: 'limit',
      type: 'number',
      required: 'false',
      default: '32',
      values: ['number'],
    },
    {
      name: 'bubbles',
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

export const teamBlockC = `
<script setup lang="ts">
import { longTeam2 } from '/@src/data/blocks/team'
</script>

<template>
  <TeamBlockC :items="longTeam2" squared bubbles />
</template>
`

export const teamBlockCSample = `
export const longTeam2 = [
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Roland Fournier',
    position: 'AI Director',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Edwin Miller',
    position: 'Data Scientist',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Irina Smirkova',
    position: 'Sales Director',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'Facebook',
        icon: 'feather:facebook',
        url: 'https://facebook.com',
      },
    ],
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Hakeem Elba',
    position: 'Fullstack Developer',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
]
`
