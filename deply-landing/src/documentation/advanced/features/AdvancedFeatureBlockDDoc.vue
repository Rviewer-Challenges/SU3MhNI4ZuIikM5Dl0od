<script setup lang="ts">
import {
  featureBlockD,
  featureBlockDProps,
} from '/@src/data/docs/advanced/feature/blockD'
</script>

<template>
  <Section id="block-d-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block D"
        subtitle="Advanced block D variation 1"
        link="block-d-props"
      />

      <SideSection
        subtitle="Managed Services"
        title="Market based DSP managed service"
        content="Whether you're looking to maximize reach, grow incremental profits, or optimize towards custom metrics, our team of experts is here to ensure success is targeted to your KPIs."
        image="/assets/illustrations/features/feature-1.png"
        dark-image="/assets/illustrations/features/feature-1-dark.png"
        blob
        to="index"
      >
        <template #content>
          <!--Hero Benefits-->
          <QuickFeatures
            class="mt-4"
            :features="['Budget efficiency', 'Focus on your work']"
          />
        </template>
      </SideSection>
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block D"
        subtitle="Advanced block D variation 2"
        link="block-d-props"
      />

      <SideSection
        reverse
        subtitle="Goal-based Campaign Creation"
        title="Build campaigns aligned to your goals in minutes"
        content="Start with your business goals at a product level and let us automatically create ad groups and campaigns targeted to the right audiences. Do all of this at scale in just a few minutes with four simple steps."
        image="/assets/illustrations/features/feature-2.png"
        dark-image="/assets/illustrations/features/feature-2-dark.png"
        blob
        to="index"
      >
        <template #content>
          <QuickFeatures
            class="mt-4"
            :benefits="['By product campaigns', 'Buyer targeting']"
          />
        </template>
      </SideSection>
    </Container>
  </Section>

  <Section color="darker" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block D"
        subtitle="Advanced block D variation 3"
        link="block-d-props"
        inverted
      />

      <SideSection
        subtitle="Managed Services"
        title="Market based DSP managed service"
        content="Whether you're looking to maximize reach, grow incremental profits, or optimize towards custom metrics, our team of experts is here to ensure success is targeted to your KPIs."
        image="/assets/illustrations/features/feature-1.png"
        dark-image="/assets/illustrations/features/feature-1-dark.png"
        blob
        to="index"
        inverted
      >
        <template #content>
          <!--Hero Benefits-->
          <QuickFeatures
            class="mt-4"
            :features="['Budget efficiency', 'Focus on your work']"
            inverted
          />
        </template>
      </SideSection>
    </Container>
  </Section>

  <Section id="block-d-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block D Props" subtitle="Available props for block D" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="featureBlockD" />
        </template>
        <template #props>
          <DemoProps :props="featureBlockDProps.props" />
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
