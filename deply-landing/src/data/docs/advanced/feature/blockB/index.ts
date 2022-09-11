export const featureBlockBProps = {
  props: [
    {
      name: 'steps',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['see sample tab for an example data structure'],
    },
  ],
  slots: [],
}

export const featureBlockB = `
<script setup lang="ts">
import { process } from '/@src/data/pages/marketing'
</script>

<template>
  <ProcessSection :steps="process.steps" />
</template>
`

export const featureBlockBSample = `
export const marketingProcess = {
  steps: [
    {
      id: 0,
      icon: '/assets/icons/abstract/1.svg',
      title: 'Goal-based Campaign Creation',
      content:
        'Build a foundation for long-term success. Our automation utilizes your individual product-level goals to create optimal advertising campaigns in four simple steps.',
      image: '/assets/illustrations/workflow/workflow-1.png',
      imageDark: '/assets/illustrations/workflow/workflow-1-dark.png',
    },
    {
      id: 1,
      icon: '/assets/icons/abstract/2.svg',
      title: 'Algorithmic Keyword Bidding',
      content:
        'Never set a keyword bid again. Our AI-powered optimization leverages your goals to find your ideal bid value, so you’re always capturing sales at the price that’s right for you.',
      image: '/assets/illustrations/workflow/workflow-2.png',
      imageDark: '/assets/illustrations/workflow/workflow-2-dark.png',
    },
    {
      id: 2,
      icon: '/assets/icons/abstract/3.svg',
      title: 'Automated Keyword Targeting',
      content:
        'Optimize your keywords for sales growth and profitability. Automatically capture new converting keywords while negating ones that are hurting performance.',
      image: '/assets/illustrations/workflow/workflow-3.png',
      imageDark: '/assets/illustrations/workflow/workflow-3-dark.png',
    },
    {
      id: 3,
      icon: '/assets/icons/abstract/4.svg',
      title: 'Custom Analytics',
      content:
        'Track progress to your goals. Understand your total business performance with individual and combined product, campaign, and profitability metrics.',
      image: '/assets/illustrations/workflow/workflow-4.png',
      imageDark: '/assets/illustrations/workflow/workflow-4-dark.png',
    },
  ],
}
`
