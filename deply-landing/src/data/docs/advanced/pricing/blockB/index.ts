export const pricingBlockBProps = {
  props: [
    {
      name: 'plans',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['see sample tab for an example data structure'],
    },
    {
      name: 'columns',
      type: 'number',
      required: 'false',
      default: '3',
      values: ['2', '3', '4'],
    },
    {
      name: 'label',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
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

export const pricingBlockB = `
<script setup lang="ts">
import { eventPlans } from '/@src/data/pages/conference'
</script>

<template>
  <PricingCardsA
    :plans="eventPlans"
    :columns="3"
    label="Buy Ticket"
    rounded
    pulled
    polka-dots
  />
</template>
`

export const pricingBlockBSample = `
import type { PricingPlan } from '/@src/components/advanced/pricing/pricing-card/PricingCardsA.vue'

export const eventPlans: PricingPlan[] = [
  {
    name: 'Super Early',
    price: 199,
    comment: '/per attendee',
    features: ['Tech breakfast', 'Lunch included', 'Hot/Cool drinks'],
    featured: true,
  },
  {
    name: 'Early',
    price: 249,
    comment: '/per attendee',
    features: ['Tech breakfast', 'Lunch included', 'Hot/Cool drinks'],
    featured: false,
  },
  {
    name: 'On Time',
    price: 299,
    comment: '/per attendee',
    features: ['Tech breakfast', 'Lunch included', 'Hot/Cool drinks'],
    featured: false,
  },
  {
    name: 'Late',
    price: 349,
    comment: '/per attendee',
    features: ['Tech breakfast', 'Lunch included', 'Hot/Cool drinks'],
    featured: false,
  },
]
`
