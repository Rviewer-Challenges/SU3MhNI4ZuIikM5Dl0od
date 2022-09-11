<script setup lang="ts">
import {
  contentBlockB,
  contentBlockBProps,
} from '/@src/data/docs/advanced/content/blockB'
</script>

<template>
  <Section id="block-b-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block B"
        subtitle="Advanced block B variation 1"
        link="block-b-props"
      />

      <div class="py-4"></div>

      <BoxedSection
        minititle="Join Early Access!"
        title="Your entire ecommerce business, connected and powered by AI"
        subtitle="INTRODUCING VULK"
        content="The first-ever Marketplace Optimization Platform, designed to
                optimize your ecommerce business for smart, strategic growth."
        image="/assets/illustrations/chart/circular-people-chart.png"
        dark-image="/assets/illustrations/chart/circular-people-chart-dark.png"
        cta="Learn more about our product"
        to="index"
      />
    </Container>
  </Section>

  <Section id="block-b-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block B Props" subtitle="Available props for block B" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="contentBlockB" />
        </template>
        <template #props>
          <DemoProps :props="contentBlockBProps.props" />
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
