export const featureBlockKProps = {
  props: [
    {
      name: 'title',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'content',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'features',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['see sample tab for an example data structure'],
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

export const featureBlockK = `
<script setup lang="ts">
import { features4 } from '/@src/data/blocks/features'
</script>

<template>
  <FeatureBlockK
    title="Fresh Vegetables"
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi
      enim inter se dissentiunt. Expectoque quid ad id, quod
      quaerebam, respondeas. Nescio quo modo praetervolavit oratio.
      Duo Reges: constructio interrete. Disserendi artem nullam
      habuit. Videsne quam sit magna dissensio? Ecce aliud simile
      dissimile."
    :features="features4"
    links
  />
</template>
`

export const featureBlockKSample = `
export const features4: SimpleFeature[] = [
  {
    title: 'Fast delivery',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Tracking app',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Saved orders',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Private sales',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
]

`
