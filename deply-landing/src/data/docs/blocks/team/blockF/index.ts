export const teamBlockFProps = {
  props: [
    {
      name: 'items',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['see sample tab for an example data structure'],
    },
    {
      name: 'limit',
      type: 'number',
      required: 'false',
      default: '32',
      values: ['number'],
    },
    {
      name: 'shapes',
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
    {
      name: 'animated',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
  ],
  slots: [],
}

export const teamBlockF = `
<script setup lang="ts">
import { cardTeam } from '/@src/data/blocks/team'
</script>

<template>
  <TeamBlockF :items="cardTeam" squared animated />
</template>
`

export const teamBlockFSample = `
export const cardTeam = [
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Daniel Abikzer',
    position: 'CEO',
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
    name: 'Basile Olembe',
    position: 'General Manager',
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
    name: 'Aymeric Boulard',
    position: 'Technical Lead',
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
    name: 'Kim Li Seung',
    position: 'Software Architect',
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
