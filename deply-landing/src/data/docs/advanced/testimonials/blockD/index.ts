export const testimonialsBlockDProps = {
  props: [
    {
      name: 'image',
      type: 'string',
      required: 'true',
      default: 'false',
      values: ['string'],
    },
    {
      name: 'title',
      type: 'string',
      required: 'true',
      default: 'false',
      values: ['string'],
    },
    {
      name: 'content',
      type: 'string',
      required: 'true',
      default: 'false',
      values: ['string'],
    },
    {
      name: 'link',
      type: 'string',
      required: 'false',
      default: 'false',
      values: ['string'],
    },
    {
      name: 'linkLabel',
      type: 'string',
      required: 'true',
      default: 'false',
      values: ['string'],
    },
  ],
  slots: [],
}

export const testimonialsBlockD = `
<template>
  <TestimonialBlock
    image="data:image/gif;base64,replace_with_your_image"
    title="I had trouble finding a fair deal. Then I simply decided to start
      using Vulk and it actually worked!"
    content="Isabella's insurance policy deals that were found on our platform
      completely changed her life and removed all the hassle."
    link-label="Read Isabella's Story"
    link="/about"
  />
</template>
`
