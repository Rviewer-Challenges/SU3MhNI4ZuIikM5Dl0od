export const ctaBlockBProps = {
  props: [
    {
      name: 'titlePrimary',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'contentPrimary',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'titleSecondary',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'contentSecondary',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'ctaPrimary',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'ctaSecondary',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'ctaPrimaryLink',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'ctaSecondaryLink',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'boxed',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
    {
      name: 'color',
      type: 'string',
      required: 'false',
      default: 'false',
      values: ['Works only when the boxed prop is true .'],
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

export const ctaBlockB = `
<template>
  <CtaBlockB
    title-primary="Start Building"
    content-primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?"
    cta-primary="Free Trial"
    cta-primary-link="index"
    title-secondary="Schedule a Demo"
    content-secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?"
    cta-secondary="Contact Team"
    cta-secondary-link="index"
    boxed
    shapes
    animated
    color="darker"
  />
</template>
`
