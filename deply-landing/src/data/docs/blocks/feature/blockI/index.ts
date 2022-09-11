export const featureBlockIProps = {
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

export const featureBlockI = `
<script setup lang="ts">
import { features7 } from '/@src/data/blocks/features'
</script>

<template>
  <FeatureBlockI
    title="Amazing Features"
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi enim
    inter se dissentiunt. Expectoque quid ad id, quod quaerebam,
    respondeas. Nescio quo modo praetervolavit oratio. Duo Reges:
    constructio interrete. Disserendi artem nullam habuit."
    :features="features7"
    links
    rounded
  />
</template>
`

export const featureBlockISample = `
export const features7: ImageFeature[] = [
  {
    title: 'Forest places',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/assets/illustrations/features/standard-landscape-1.svg',
    darkImage: '/assets/illustrations/features/standard-landscape-1.svg',
    link: '/',
  },
  {
    title: 'Authentic places',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/assets/illustrations/features/standard-landscape-2.svg',
    darkImage: '/assets/illustrations/features/standard-landscape-2.svg',
    link: '/',
  },
  {
    title: 'Countryside places',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/assets/illustrations/features/standard-landscape-3.svg',
    darkImage: '/assets/illustrations/features/standard-landscape-3.svg',
    link: '/',
  },
  {
    title: 'Waterfall places',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    image: '/assets/illustrations/features/standard-landscape-4.svg',
    darkImage: '/assets/illustrations/features/standard-landscape-4.svg',
    link: '/',
  },
]
`
