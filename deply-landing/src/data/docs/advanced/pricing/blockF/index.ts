export const pricingBlockFProps = {
  props: [
    {
      name: 'features',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['see sample tab for an example data structure'],
    },
    {
      name: 'price',
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

export const pricingBlockF = `
<template>
  <PricingSoloCentered
    :features="[
      'Unlimited projects',
      'Desktop and mobile app',
      'Unlimited tasks',
      'Email integration',
      'Unlimited time records',
    ]"
    :price="0"
    link-label="Get Started Now"
    link="/"
  />
</template>
`

export const pricingBlockFSample = `
export const pricingFeatures = [
  'Unlimited projects',
  'Desktop and mobile app',
  'Unlimited tasks',
  'Email integration',
  'Unlimited time records',
]
`
