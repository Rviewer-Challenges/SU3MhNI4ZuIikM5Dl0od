export const ctaBlockHProps = {
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
      name: 'background',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
    },
  ],
  slots: [],
}

export const ctaBlockH = `
<template>
  <!--image variation-->
  <CtaBlockH
    small-text="UI Framework"
    title="Start Building"
    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?"
    image="/@src/assets/illustrations/apps/apps-slant.png"
    dark-image="/@src/assets/illustrations/apps/apps-slant.png"
  >
    <Buttons>
      <Button :to="'index'" color="primary" :long="2" bold raised>Get Started</Button>
      <Button :to="'index'" :long="2" bold raised>Learn More</Button>
    </Buttons>
  </CtaBlockH>

  <!--background variation-->
  <CtaBlockH
    small-text="UI Framework"
    title="Start Building"
    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?"
    background="https://dummyimage.com/940x650.jpg"
  >
    <Buttons>
      <Button :to="'index'" color="primary" :long="2" bold raised>Get Started</Button>
      <Button :to="'index'" :long="2" bold raised>Learn More</Button>
    </Buttons>
  </CtaBlockH>
</template>   
`
