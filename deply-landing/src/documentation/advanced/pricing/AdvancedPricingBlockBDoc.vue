<script setup lang="ts">
import { eventPlans } from '/@src/data/pages/conference'

import {
  pricingBlockB,
  pricingBlockBProps,
  pricingBlockBSample,
} from '/@src/data/docs/advanced/pricing/blockB'
</script>

<template>
  <Section id="block-b-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block B"
        subtitle="Advanced block B variation 1"
        link="block-a-props"
      />

      <div class="py-4"></div>

      <PricingCardsA
        :plans="eventPlans"
        :columns="3"
        label="Buy Ticket"
        rounded
        pulled
        polka-dots
      />
    </Container>
  </Section>

  <Section id="block-b-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block B Props" subtitle="Available props for block B" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="pricingBlockB" />
        </template>
        <template #props>
          <DemoProps :props="pricingBlockBProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="pricingBlockBSample" />
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
