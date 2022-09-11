<script setup lang="ts">
import { customerLogos2 } from '/@src/data/pages/logos'
import {
  ctaBlockA,
  ctaBlockAProps,
  ctaBlockASample,
} from '/@src/data/docs/blocks/cta/blockA'
</script>

<template>
  <Section id="block-a-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block A"
        subtitle="Block A variation 1"
        link="block-a-props"
      />

      <CtaBlockA
        title="Ready To Go?"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam
        dissimile?"
        cta-primary="Get Started"
        cta-primary-link="index"
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block A"
        subtitle="Block A variation 2"
        link="block-a-props"
      />

      <CtaBlockA
        title="Ready To Go?"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam
        dissimile?"
        cta-primary="Get Started"
        cta-primary-link="index"
        cta-secondary="Learn More"
        cta-secondary-link="index"
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block A"
        subtitle="Block A variation 3"
        link="block-a-props"
      />

      <CtaBlockA
        title="Ready To Go?"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam
        dissimile?"
        cta-primary="Get Started"
        cta-primary-link="index"
        cta-secondary="Learn More"
        cta-secondary-link="index"
        :logos="customerLogos2"
      />
    </Container>
  </Section>

  <Section color="darker" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block A"
        subtitle="Block A variation 4"
        link="block-a-props"
        inverted
      />

      <CtaBlockA
        title="Ready To Go?"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam
        dissimile?"
        cta-primary="Get Started"
        cta-primary-link="index"
        cta-secondary="Learn More"
        cta-secondary-link="index"
        :logos="customerLogos2"
        inverted
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block A"
        subtitle="Block A variation 5"
        link="block-a-props"
      />

      <CtaBlockA
        title="Ready To Go?"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam
        dissimile?"
        cta-primary="Get Started"
        cta-primary-link="index"
        cta-secondary="Learn More"
        cta-secondary-link="index"
        :logos="customerLogos2"
        boxed
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block A"
        subtitle="Block A variation 6"
        link="block-a-props"
      />

      <CtaBlockA
        title="Ready To Go?"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam
        dissimile?"
        cta-primary="Get Started"
        cta-primary-link="index"
        cta-secondary="Learn More"
        cta-secondary-link="index"
        :logos="customerLogos2"
        boxed
        shapes
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block A"
        subtitle="Block A variation 7"
        link="block-a-props"
      />

      <CtaBlockA
        title="Ready To Go?"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam
        dissimile?"
        cta-primary="Get Started"
        cta-primary-link="index"
        cta-secondary="Learn More"
        cta-secondary-link="index"
        :logos="customerLogos2"
        boxed
        shapes
        animated
        color="primary"
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block A"
        subtitle="Block A variation 8"
        link="block-a-props"
      />

      <CtaBlockA
        title="Ready To Go?"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam
        dissimile?"
        cta-primary="Get Started"
        cta-primary-link="index"
        cta-secondary="Learn More"
        cta-secondary-link="index"
        :logos="customerLogos2"
        boxed
        shapes
        animated
        color="darker"
      />
    </Container>
  </Section>

  <Section id="block-a-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block A Props" subtitle="Available props for block A" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="ctaBlockA" />
        </template>
        <template #props>
          <DemoProps :props="ctaBlockAProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="ctaBlockASample" />
        </template>
        <template #usage>
          <p class="paragraph rem-95">
            Vulk ships with highly customizable and versatile CTA blocks that
            you can use in any page. Each block comes with it's own styles and
            props. Use the props to build your own examples or use one of the
            prebuilt examples. Every block is natively supporting dark mode.
            However, there are some cases when even in light mode, the section
            background is dark or colored. In that case, you can use the
            <code>inverted</code>
            prop to invert the component when in light mode. See markup and
            props tab for more details about usage.
          </p>
        </template>
      </DemoTabs>
    </Container>
  </Section>
</template>
