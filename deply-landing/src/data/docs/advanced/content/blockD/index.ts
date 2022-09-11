export const contentBlockDProps = {
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
      name: 'content',
      type: 'string',
      required: 'true',
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
      name: 'darkImage',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'benefits',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['array of strings'],
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

export const contentBlockD = `
<template>
  <SideBenefits
    subtitle="DATA DRIVEN"
    title="Your entire business, connected and powered by AI"
    content="To grow your business on today’s dynamic marketplaces, you need
          an advantage.
          With our AI working continually behind the scenes, you can
          unlock growth opportunities and compete at the highest level
          24/7."
    image="/@src/assets/illustrations/features/banking-cards-feature.png"
    dark-image="/@src/assets/illustrations/features/banking-cards-feature-dark.png"
    :benefits="[
      'Upgrade your customer experience instantly',
      'Retain more, happier customers',
      'Start with done-for-you account setup',
      'Track results in real-time',
    ]"
    reverse
  />
</template>
`
