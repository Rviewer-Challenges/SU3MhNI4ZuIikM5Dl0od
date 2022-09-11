export const ctaBlockJProps = {
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
      name: 'smallText',
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

export const ctaBlockJ = `
<template>
  <CtaBlockJ
    small-text="14-Day Trial"
    title="Start Building"
    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?"
  >
    <Buttons alignment="centered">
      <Button :to="'index'" color="primary" :long="2" bold raised>Get Started</Button>
      <Button :to="'index'" :long="2" bold raised>Learn More</Button>
    </Buttons>
  </CtaBlockJ>
</template>
`
