export const contentBlockCProps = {
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
      name: 'background',
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
      name: 'cta',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'to',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
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

export const contentBlockC = `
<template>
  <CaseStudy background="https://dummyimage.com/1200x800.jpg">
    <SideSection
      subtitle="Success Stories"
      title="Learn how they built a successful business"
      content="See how some of our customers leverage Vulk technology to increase profits and take back control from resellers"
      image="/@src/assets/illustrations/features/feature-3.png"
      dark-image="/@src/assets/illustrations/features/feature-3-dark.png"
      cta="Read success stories"
      inverted
      to="index"
    />
  </CaseStudy>
</template>
`
