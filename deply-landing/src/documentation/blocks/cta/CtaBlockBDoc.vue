<script setup lang="ts">
import { ctaBlockB, ctaBlockBProps } from '/@src/data/docs/blocks/cta/blockB'
</script>

<template>
  <Section id="block-b-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block B"
        subtitle="Block B variation 1"
        link="block-b-props"
      />

      <CtaBlockB
        title-primary="Start Building"
        content-primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?"
        cta-primary="Free Trial"
        cta-primary-link="index"
        title-secondary="Schedule a Demo"
        content-secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?"
        cta-secondary="Contact Team"
        cta-secondary-link="index"
      />
    </Container>
  </Section>

  <Section color="darker" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block B"
        subtitle="Block B variation 2"
        link="block-b-props"
        inverted
      />

      <CtaBlockB
        title-primary="Start Building"
        content-primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?"
        cta-primary="Free Trial"
        cta-primary-link="index"
        title-secondary="Schedule a Demo"
        content-secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?"
        cta-secondary="Contact Team"
        cta-secondary-link="index"
        inverted
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block B"
        subtitle="Block B variation 3"
        link="block-b-props"
      />

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
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block B"
        subtitle="Block B variation 4"
        link="block-b-props"
      />

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
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block B"
        subtitle="Block B variation 5"
        link="block-b-props"
      />

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
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block B"
        subtitle="Block B variation 6"
        link="block-b-props"
      />

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
        color="primary"
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block B"
        subtitle="Block B variation 7"
        link="block-b-props"
      />

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
    </Container>
  </Section>

  <Section id="block-b-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block B Props" subtitle="Available props for block B" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="ctaBlockB" />
        </template>
        <template #props>
          <DemoProps :props="ctaBlockBProps.props" />
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
