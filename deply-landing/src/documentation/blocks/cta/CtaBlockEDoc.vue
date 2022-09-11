<script setup lang="ts">
import { ctaBlockE, ctaBlockEProps } from '/@src/data/docs/blocks/cta/blockE'
</script>

<template>
  <Section id="block-e-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block E"
        subtitle="Block E variation 1"
        link="block-e-props"
      />

      <CtaBlockE
        title="Ready to Go?"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est
              tam dissimile homini quae cum dixisset."
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit quis est tam
          dissimile homini. Quae cum."
        cta="Get Started"
        cta-link="index"
      />
    </Container>
  </Section>

  <Section color="darker" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block E"
        subtitle="Block E variation 1"
        link="block-e-props"
        inverted
      />

      <CtaBlockE
        title="Ready to Go?"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est
              tam dissimile homini quae cum dixisset."
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit quis est tam
          dissimile homini. Quae cum."
        cta="Get Started"
        cta-link="index"
        inverted
      />
    </Container>
  </Section>

  <Section id="block-e-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block E Props" subtitle="Available props for block E" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="ctaBlockE" />
        </template>
        <template #props>
          <DemoProps :props="ctaBlockEProps.props" />
        </template>
        <template #sample>
          <div class="empty-text">
            <p class="paragraph rem-95">
              No data sample available for this component
            </p>
          </div>
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
