export const ctaBlockDProps = {
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
      name: 'inverted',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['Works only when the boxed prop is true .'],
    },
  ],
  slots: [],
}

export const ctaBlockD = `
<template>
  <CtaBlockD
    title="Ready To Go?"
    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit quis est tam
      dissimile homini. Quae cum."
    inverted
  >
    <Buttons>
      <Button color="primary" :long="2" bold raised>Get Started</Button>
      <Button :long="2" bold raised>Learn More</Button>
    </Buttons>
  </CtaBlockD>
</template>         
`
