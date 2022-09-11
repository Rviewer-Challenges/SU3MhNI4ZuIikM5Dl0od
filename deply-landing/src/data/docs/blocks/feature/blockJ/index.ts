export const featureBlockJProps = {
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
      name: 'image',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'darkImage',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
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

export const featureBlockJ = `
<script setup lang="ts">
import { features8 } from '/@src/data/blocks/features'
</script>

<template>
  <FeatureBlockJ
    title="Fresh Vegetables"
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi
      enim inter se dissentiunt. Expectoque quid ad id, quod
      quaerebam, respondeas. Nescio quo modo praetervolavit oratio.
      Duo Reges: constructio interrete. Disserendi artem nullam
      habuit. Videsne quam sit magna dissensio? Ecce aliud simile
      dissimile."
    image="/@src/assets/illustrations/features/carrying-vegetables.svg"
    dark-image="/@src/assets/illustrations/features/carrying-vegetables.svg"
    :features="features8"
    links
  />
</template>
`

export const featureBlockJSample = `
export const features8: SimpleFeature[] = [
  {
    title: 'Delivered to your place',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Fresh and yummy',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'No GMOs',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Reseller program',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
]
`
