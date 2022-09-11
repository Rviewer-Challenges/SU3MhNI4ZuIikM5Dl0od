export const pricingBlockGProps = {
  props: [
    {
      name: 'plans',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['see sample tab for an example data structure'],
    },
  ],
  slots: [],
}

export const pricingBlockG = `
<script setup lang="ts">
import { longPlans } from '/@src/data/blocks/advanced/pricing'
</script>

<template>
  <PricingLong
    :plans="longPlans"
    :columns="4"
    :limit="3"
    rounded
    shadow
    polka-dots
  />
</template>
`

export const pricingBlockGSample = `
import type { PricingPlan } from '/@src/components/advanced/pricing/pricing-long/PricingLong.vue'

export const longPlans: PricingPlan[] = [
  {
    name: 'Starter',
    logo: '/assets/brands/tribe.svg',
    price: 15,
    color: 'primary',
    featured: true,
    popular: false,
    features: [
      {
        value: 'Free or $12',
        label: 'Trades',
      },
      {
        value: 'Free',
        label: 'Basic Account',
      },
      {
        value: 'Free',
        label: 'Monthly fees',
      },
      {
        value: '$3/mo',
        label: 'Stocks & Shares',
      },
      {
        value: '$5/mo',
        label: 'Live data',
      },
      {
        value: 'Spot rate + 0.65%',
        label: 'Tax rate',
      },
      {
        value: '$0.75',
        label: 'Bank transfer',
      },
      {
        value: '$5',
        label: 'Bank transfer (fast)',
      },
    ],
  },
  {
    name: 'Business',
    logo: '/assets/brands/tribe.svg',
    price: 25,
    color: 'secondary',
    featured: false,
    popular: true,
    features: [
      {
        value: 'Free',
        label: 'Trades',
      },
      {
        value: 'Free',
        label: 'Basic Account',
      },
      {
        value: 'Free',
        label: 'Monthly fees',
      },
      {
        value: '$10/mo',
        label: 'Stocks & Shares',
      },
      {
        value: '$2/mo',
        label: 'Live data',
      },
      {
        value: 'Spot rate + 0.55%',
        label: 'Tax rate',
      },
      {
        value: '$0.5',
        label: 'Bank transfer',
      },
      {
        value: '$3',
        label: 'Bank transfer (fast)',
      },
    ],
  },
  {
    name: 'Enterprise',
    logo: '/assets/brands/tribe.svg',
    price: 45,
    color: 'yellow',
    featured: false,
    popular: false,
    features: [
      {
        value: 'Free',
        label: 'Trades',
      },
      {
        value: 'Free',
        label: 'Basic Account',
      },
      {
        value: 'Free',
        label: 'Monthly fees',
      },
      {
        value: '$15/mo',
        label: 'Stocks & Shares',
      },
      {
        value: 'Free',
        label: 'Live data',
      },
      {
        value: 'Spot rate + 0.25%',
        label: 'Tax rate',
      },
      {
        value: 'Free',
        label: 'Bank transfer',
      },
      {
        value: '$2',
        label: 'Bank transfer (fast)',
      },
    ],
  },
  {
    name: 'Custom',
    logo: '/assets/brands/tribe.svg',
    price: 24,
    color: 'info',
    featured: false,
    popular: false,
    features: [
      {
        value: '$8',
        label: 'Trades',
      },
      {
        value: '$25/month',
        label: 'Basic Account',
      },
      {
        value: '$4.95',
        label: 'Monthly fees',
      },
      {
        value: 'Free or $12',
        label: 'Trades',
      },
      {
        value: 'Free',
        label: 'Basic Account',
      },
      {
        value: 'Free',
        label: 'Monthly fees',
      },
      {
        value: 'Free',
        label: 'Basic Account',
      },
      {
        value: 'Free',
        label: 'Monthly fees',
      },
    ],
  },
]
`
