export const featureBlockEProps = {
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

export const featureBlockE = `
<script setup lang="ts">
import { features3 } from '/@src/data/blocks/features'
</script>

<template>
  <FeatureBlockE
    title="VR For Business."
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi enim
      inter se dissentiunt. Expectoque quid ad id, quod quaerebam,
      respondeas. Nescio quo modo praetervolavit oratio. Duo Reges:
      constructio interrete. Disserendi artem nullam habuit. Videsne quam
      sit magna dissensio? Ecce aliud simile dissimile."
    :features="features3"
    image="/@src/assets/illustrations/features/vr.svg"
    dark-image="/@src/assets/illustrations/features/vr-dark.svg"
    links
  />
</template>
`

export const featureBlockESample = `
export const features3: SimpleFeature[] = [
  {
    title: 'Monthly reports',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Pro Dashboard',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
]
`
