export const pricingBlockDProps = {
  props: [
    {
      name: 'monthlyPrice',
      type: 'number',
      required: 'true',
      default: 'undefined',
      values: ['number'],
    },
    {
      name: 'quarterlyPrice',
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
      name: 'discount',
      type: 'number',
      required: 'true',
      default: 'undefined',
      values: ['number'],
    },
  ],
  slots: [],
}

export const pricingBlockD = `
<template>
  <PricingAction
    :monthly-price="75"
    :quarterly-price="225"
    :yearly-price="600"
    :discount="30"
  />
</template>
`
