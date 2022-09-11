export const featureBlockCProps = {
  props: [
    {
      name: 'features',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['see sample tab for an example data structure'],
    },
  ],
  slots: [],
}

export const featureBlockC = `
<script setup lang="ts">
import { iconFeatures1 } from '/@src/data/blocks/advanced/features'
</script>

<template>
  <IconSection :features="iconFeatures1" />
</template>
`

export const featureBlockCSample = `
export const iconFeatures1 = [
  {
    id: 0,
    icon: '/assets/icons/colored/chat.svg',
    title: 'Reach more customers',
    content:
      'Be where your customers are. Target buyers by search behavior, discover new converting keywords, and automatically set bids based on your product goals.',
  },
  {
    id: 1,
    icon: '/assets/icons/colored/clock.svg',
    title: 'Save hours of time a week',
    content:
      'Optimize your advertising workflow with automated campaign creation, keyword refinement, and algorithmic bidding. You set the controls, and our AI-technology does the heavy lifting.',
  },
  {
    id: 2,
    icon: '/assets/icons/colored/certificate.svg',
    title: 'Get profitability insights',
    content:
      'Connect your PPC spend to individual product costs and see a granular view of your product-level profitability. Confidently make smart decisions with essential metrics and reporting.',
  },
]
`
