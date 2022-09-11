<script setup lang="ts">
import {
  featureBlockE,
  featureBlockEProps,
} from '/@src/data/docs/advanced/feature/blockE'
</script>

<template>
  <Section id="block-e-demo" color="darker" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block E"
        subtitle="Advanced block E variation 1"
        link="block-e-props"
        inverted
      />

      <SpinnerSection
        inverted
        subtitle="Web Development Services"
        title="Results-driven, affordable ad management"
        content="Partner with our advertising experts to save time, boost performance, and meet your milestones on your growth journey."
        cta="Learn about our optional services"
        to="index"
        image="/assets/illustrations/chart/tech-chart.png"
        layer-base="/assets/illustrations/chart/tech-chart"
        layer-extension="svg"
      />
    </Container>
  </Section>

  <Section id="block-e-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block E Props" subtitle="Available props for block E" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="featureBlockE" />
        </template>
        <template #props>
          <DemoProps :props="featureBlockEProps.props" />
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
            Vulk ships with stunning advanced Feature blocks that you can use in
            any page. Each block comes with it's own styles and props. Use the
            props to build your own examples or use one of the prebuilt
            examples. Every block is natively supporting dark mode. See markup
            and props tab for more details about usage.
          </p>
        </template>
      </DemoTabs>
    </Container>
  </Section>
</template>
