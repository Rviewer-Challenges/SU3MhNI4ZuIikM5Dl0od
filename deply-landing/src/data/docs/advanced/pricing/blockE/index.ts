export const pricingBlockEProps = {
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
      name: 'features',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['see sample tab for an example data structure'],
    },
    {
      name: 'monthlyPrice',
      type: 'number',
      required: 'true',
      default: 'undefined',
      values: ['number'],
    },
    {
      name: 'yearlyPrice',
      type: 'number',
      required: 'true',
      default: 'undefined',
      values: ['number'],
    },
    {
      name: 'link',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'linkLabel',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
  ],
  slots: [],
}

export const pricingBlockE = `
<template>
  <PricingSolo
    title="Solution pricing"
    subtitle="All features you'll ever need to run a project"
    :features="[
      'Unlimited projects',
      'Desktop and mobile app',
      'Unlimited tasks',
      'Email integration',
      'Unlimited time records',
      'Client management',
      'Task dependencies',
      'Budget tracking',
      'Recurring tasks',
      'Advanced reports',
    ]"
    :monthly-price="7"
    :yearly-price="79"
    link-label="Start Free Trial"
    link="/"
  />
</template>
`

export const pricingBlockESample = `
export const pricingFeatures = [
  'Unlimited projects',
  'Desktop and mobile app',
  'Unlimited tasks',
  'Email integration',
  'Unlimited time records',
  'Client management',
  'Task dependencies',
  'Budget tracking',
  'Recurring tasks',
  'Advanced reports',
]
`
