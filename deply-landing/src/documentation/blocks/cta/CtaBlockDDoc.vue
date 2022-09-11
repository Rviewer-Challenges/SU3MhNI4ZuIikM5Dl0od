<script setup lang="ts">
import { ctaBlockD, ctaBlockDProps } from '/@src/data/docs/blocks/cta/blockD'
</script>

<template>
  <Section id="block-d-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block D"
        subtitle="Block D variation 1"
        link="block-d-props"
      />

      <CtaBlockD
        title="Ready To Go?"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit quis est tam
          dissimile homini. Quae cum."
      >
        <Buttons>
          <Button color="primary" :long="2" bold raised>Get Started</Button>
          <Button :long="2" bold raised>Learn More</Button>
        </Buttons>
      </CtaBlockD>
    </Container>
  </Section>

  <Section color="darker" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block D"
        subtitle="Block D variation 2"
        link="block-d-props"
        inverted
      />

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
    </Container>
  </Section>

  <Section id="block-d-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block D Props" subtitle="Available props for block D" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="ctaBlockD" />
        </template>
        <template #props>
          <DemoProps :props="ctaBlockDProps.props" />
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
