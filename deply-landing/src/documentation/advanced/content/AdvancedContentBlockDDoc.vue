<script setup lang="ts">
import {
  contentBlockD,
  contentBlockDProps,
} from '/@src/data/docs/advanced/content/blockD'
</script>

<template>
  <Section id="block-d-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block D"
        subtitle="Advanced block D variation 1"
        link="block-d-props"
      />

      <SideBenefits
        subtitle="DATA DRIVEN"
        title="Your entire business, connected and powered by AI"
        content="To grow your business on today’s dynamic marketplaces, you need
                an advantage.
                With our AI working continually behind the scenes, you can
                unlock growth opportunities and compete at the highest level
                24/7."
        image="/assets/illustrations/features/banking-cards-feature.png"
        dark-image="/assets/illustrations/features/banking-cards-feature-dark.png"
        :benefits="[
          'Upgrade your customer experience instantly',
          'Retain more, happier customers',
          'Start with done-for-you account setup',
          'Track results in real-time',
        ]"
        reverse
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="Block D"
        subtitle="Advanced block D variation 2"
        link="block-d-props"
        inverted
      />

      <SideBenefits
        subtitle="DATA DRIVEN"
        title="Your entire business, connected and powered by AI"
        content="To grow your business on today’s dynamic marketplaces, you need
                an advantage.
                With our AI working continually behind the scenes, you can
                unlock growth opportunities and compete at the highest level
                24/7."
        image="/assets/illustrations/features/banking-cards-feature.png"
        dark-image="/assets/illustrations/features/banking-cards-feature-dark.png"
        :benefits="[
          'Upgrade your customer experience instantly',
          'Retain more, happier customers',
          'Start with done-for-you account setup',
          'Track results in real-time',
        ]"
        reverse
        inverted
      />
    </Container>
  </Section>

  <Section id="block-d-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block D Props" subtitle="Available props for block D" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="contentBlockD" />
        </template>
        <template #props>
          <DemoProps :props="contentBlockDProps.props" />
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
