export const featureBlockDProps = {
  props: [
    {
      name: 'features',
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
      values: ['3', '4', '6'],
    },
    {
      name: 'limit',
      type: 'number',
      required: 'false',
      default: '6',
      values: ['number'],
    },
    {
      name: 'size',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['small', 'medium'],
    },
    {
      name: 'rounded',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
    {
      name: 'links',
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

export const featureBlockD = `
<script setup lang="ts">
import { features2 } from '/@src/data/blocks/features'
</script>

<template>
  <FeatureBlockD
    :features="features2"
    :limit="6"
    size="medium"
    links
    animated
  />
</template>
`

export const featureBlockDSample = `
export const features2: ImageFeature[] = [
  {
    title: 'Campaigns',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/assets/icons/colored/laptop-mail.svg',
    darkImage: '/assets/icons/colored/laptop-mail.svg',
    link: '/',
  },
  {
    title: 'Task Management',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/assets/icons/colored/papers.svg',
    darkImage: '/assets/icons/colored/papers.svg',
    link: '/',
  },
  {
    title: 'Personal Dashboard',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/assets/icons/colored/compass.svg',
    darkImage: '/assets/icons/colored/compass.svg',
    link: '/',
  },
  {
    title: 'Payment Gateways',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/assets/icons/colored/credit-card.svg',
    darkImage: '/assets/icons/colored/credit-card.svg',
    link: '/',
  },
  {
    title: 'Time Management',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/assets/icons/colored/clock.svg',
    darkImage: '/assets/icons/colored/clock.svg',
    link: '/',
  },
  {
    title: 'Notifications',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/assets/icons/colored/bell.svg',
    darkImage: '/assets/icons/colored/bell.svg',
    link: '/',
  },
  {
    title: 'Social Integrations',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/assets/icons/colored/puzzle.svg',
    darkImage: '/assets/icons/colored/puzzle.svg',
    link: '/',
  },
  {
    title: 'Instant Messaging',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/assets/icons/colored/chat.svg',
    darkImage: '/assets/icons/colored/chat.svg',
    link: '/',
  },
]
`
