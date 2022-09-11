export const featureBlockFProps = {
  props: [
    {
      name: 'title',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'subtitle',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'cta',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'to',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'image',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'layerBase',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'layerExtension',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'legend',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
    },

    {
      name: 'bordered',
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
    {
      name: 'blob',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
    {
      name: 'reverse',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
  ],
  slots: [],
}

export const featureBlockF = `
<script setup lang="ts">
import { stackedFeatures } from '/@src/data/blocks/advanced/features'
</script>

<template>
  <StackedSection
    :features="stackedFeatures"
    image="/@src/assets/illustrations/features/calling.svg"
    dark-image="/@src/assets/illustrations/features/calling.svg"
    rounded
  />
</template>
`
export const featureBlockFSample = `
export const stackedFeatures: IconFeature[] = [
  {
    title: 'Campaigns',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo.',
    color: 'primary',
    icon: 'feather:mail',
    link: '/',
  },
  {
    title: 'Task Management',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo.',
    color: 'green',
    icon: 'feather:briefcase',
    link: '/',
  },
  {
    title: 'Personal Dashboard',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo.',
    color: 'info',
    icon: 'feather:grid',
    link: '/',
  },
]
`
