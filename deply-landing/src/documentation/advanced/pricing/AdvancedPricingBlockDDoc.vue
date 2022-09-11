<script setup lang="ts">
import {
  pricingBlockD,
  pricingBlockDProps,
} from '/@src/data/docs/advanced/pricing/blockD'
</script>

<template>
  <Section id="block-d-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block D"
        subtitle="Advanced block D variation 1"
        link="block-d-props"
      />

      <div class="py-4"></div>

      <PricingAction
        :monthly-price="75"
        :quarterly-price="225"
        :yearly-price="600"
        :discount="30"
      />
    </Container>
  </Section>

  <Section id="block-d-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block D Props" subtitle="Available props for block D" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="pricingBlockD" />
        </template>
        <template #props>
          <DemoProps :props="pricingBlockDProps.props" />
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
            Vulk ships with stunning advanced Pricing blocks that you can use in
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
