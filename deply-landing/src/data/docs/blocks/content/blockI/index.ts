export const contentBlockIProps = {
  props: [
    {
      name: 'counters',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['see sample tab for an example data structure'],
    },
    {
      name: 'icons',
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

export const contentBlockI = `
<script setup lang="ts">
import { content14 } from '/@src/data/blocks/content'
</script>

<template>
  <ContentBlockI :counters="content14" />
</template>  
`

export const contentBlockISample = `
export const content14 = [
  {
    icon: 'ion:card-outline',
    number: 74,
    text: 'Available payment gateways',
  },
  {
    icon: 'ion:diamond-outline',
    number: 9718,
    text: 'Customers across the world',
  },
  {
    icon: 'ion:timer-outline',
    number: 534,
    text: 'Real time balance metrics',
  },
  {
    icon: 'ion:business-outline',
    number: 92,
    text: 'Regional and local offices',
  },
]
`
