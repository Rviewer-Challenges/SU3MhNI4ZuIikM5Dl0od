export const companyBlockDProps = {
  props: [
    {
      name: 'values',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['see sample tab for an example data structure'],
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

export const companyBlockD = `
<script setup lang="ts">
import { values } from '/@src/data/blocks/advanced/values'
</script>

<template>
  <ValuesSection :values="values" />
</template>
`

export const companyBlockDSample = `
export const values = [
  {
    id: 0,
    image: '/assets/illustrations/about/mission.svg',
    darkImage: '/assets/illustrations/about/mission-dark.svg',
    title: 'Our Mission',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui-vere falsone quaerere',
  },
  {
    id: 1,
    image: '/assets/illustrations/about/world.svg',
    darkImage: '/assets/illustrations/about/world.svg',
    title: 'Our Vision',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui-vere falsone quaerere',
  },
  {
    id: 3,
    image: '/assets/illustrations/about/values.svg',
    darkImage: '/assets/illustrations/about/values.svg',
    title: 'Our Values',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui-vere falsone quaerere',
  },
]
`
