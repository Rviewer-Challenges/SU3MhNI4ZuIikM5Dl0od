<script setup lang="ts">
import { longPlans } from '/@src/data/blocks/advanced/pricing'
import {
  pricingBlockG,
  pricingBlockGProps,
  pricingBlockGSample,
} from '/@src/data/docs/advanced/pricing/blockG'
</script>

<template>
  <Section id="block-g-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block G"
        subtitle="Advanced block G variation 1"
        link="block-e-props"
      />

      <div class="py-6">
        <PricingLong
          :plans="longPlans"
          :columns="4"
          :limit="3"
          rounded
          shadow
          polka-dots
        />
      </div>

      <!--Content-->
    </Container>
  </Section>

  <Section id="block-g-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block G Props" subtitle="Available props for block G" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="pricingBlockG" />
        </template>
        <template #props>
          <DemoProps :props="pricingBlockGProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="pricingBlockGSample" />
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
