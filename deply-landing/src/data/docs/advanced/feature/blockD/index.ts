export const featureBlockDProps = {
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
      name: 'legend',
      type: 'string',
      required: 'false',
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

export const featureBlockD = `
<template>
  <SideSection
    reverse
    subtitle="Goal-based Campaign Creation"
    title="Build campaigns aligned to your goals in minutes"
    content="Start with your business goals at a product level and let us automatically create ad groups and campaigns 
    targeted to the right audiences. Do all of this at scale in just a few minutes with four simple steps."
    image="/@src/assets/illustrations/features/feature-2.png"
    dark-image="/@src/assets/illustrations/features/feature-2-dark.png"
    blob
    to="index"
  >
    <template #content>
      <QuickFeatures class="mt-4" :benefits="['By product campaigns', 'Buyer targeting']" />
    </template>
  </SideSection>
</template>
`
