<script setup lang="ts">
import {
  pricingBlockE,
  pricingBlockEProps,
  pricingBlockESample,
} from '/@src/data/docs/advanced/pricing/blockE'
</script>

<template>
  <Section id="block-e-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block E"
        subtitle="Advanced block E variation 1"
        link="block-e-props"
      />

      <div class="py-6">
        <PricingSolo
          title="Solution pricing"
          subtitle="All features you'll ever need to run a project"
          :features="[
            'Unlimited projects',
            'Desktop and mobile app',
            'Unlimited tasks',
            'Email integration',
            'Unlimited time records',
            'Client management',
            'Task dependencies',
            'Budget tracking',
            'Recurring tasks',
            'Advanced reports',
          ]"
          :monthly-price="7"
          :yearly-price="79"
          link-label="Start Free Trial"
          link="/"
        />
      </div>

      <!--Content-->
    </Container>
  </Section>

  <Section id="block-e-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block E Props" subtitle="Available props for block E" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="pricingBlockE" />
        </template>
        <template #props>
          <DemoProps :props="pricingBlockEProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="pricingBlockESample" />
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
