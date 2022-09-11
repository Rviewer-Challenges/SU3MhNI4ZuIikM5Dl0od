export const ctaBlockCProps = {
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
      name: 'minimal',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
    {
      name: 'shapes',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['Works only when the boxed prop is true .'],
    },
    {
      name: 'animated',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['Works only when the boxed prop is true .'],
    },
  ],
  slots: [],
}

export const ctaBlockC = `
<template>
  <CtaBlockC
    title="Ready To Go?"
    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam
      dissimile homini. Quae cum dixisset paulumque?"
    shapes
    animated
    inverted
  >
    <Buttons>
      <Button color="primary" :long="2" raised bold>Subscribe</Button>
      <Button :long="2" raised bold>Learn More</Button>
    </Buttons>
  </CtaBlockC>
</template>
`
