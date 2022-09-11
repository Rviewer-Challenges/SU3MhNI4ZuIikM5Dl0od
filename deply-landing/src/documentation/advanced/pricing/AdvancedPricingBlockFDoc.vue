<script setup lang="ts">
import {
  pricingBlockF,
  pricingBlockFProps,
  pricingBlockFSample,
} from '/@src/data/docs/advanced/pricing/blockF'
</script>

<template>
  <Section id="block-f-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block F"
        subtitle="Advanced block F variation 1"
        link="block-e-props"
      />

      <div class="pt-6">
        <PricingSoloCentered
          :features="[
            'Unlimited projects',
            'Desktop and mobile app',
            'Unlimited tasks',
            'Email integration',
            'Unlimited time records',
          ]"
          :price="0"
          link-label="Get Started Now"
          link="/"
        />
      </div>

      <!--Content-->
    </Container>
  </Section>

  <Section id="block-f-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block F Props" subtitle="Available props for block F" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="pricingBlockF" />
        </template>
        <template #props>
          <DemoProps :props="pricingBlockFProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="pricingBlockFSample" />
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
