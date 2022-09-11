export const pricingBlockCProps = {
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
      name: 'plans',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['see sample tab for an example data structure'],
    },
    {
      name: 'pulled',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
    {
      name: 'rounded',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
    {
      name: 'polkaDots',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
  ],
  slots: [],
}

export const pricingBlockC = `
<script setup lang="ts">
import { workoutPricingPlans } from '/@src/data/pages/workout'
</script>

<template>
  <PricingDuo
    title="Our plans"
    subtitle="Duplexque isdem diebus acciderat malum, quod et Theophilum insontem
        atrox interceperat casus."
    :plans="workoutPricingPlans"
    rounded
    polka-dots
  />
</template>
`

export const pricingBlockCSample = `
export const workoutPricingPlans = [
  {
    name: 'Standard',
    icon: 'ph:parachute-duotone',
    price: {
      monthly: 19,
      yearly: 210,
    },
    features: [
      'Premium programs',
      'Social integration',
      'Social network',
      '2h of coaching /month',
      'Live Events',
    ],
    featured: false,
  },
  {
    name: 'Premium',
    icon: 'ph:rocket-duotone',
    price: {
      monthly: 39,
      yearly: 420,
    },
    features: [
      'Custom programs',
      'Live streaming',
      'Personal page',
      '10h of coaching /month',
      'VIP invites',
    ],
    featured: false,
  },
]
`
