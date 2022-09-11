<script setup lang="ts">
import { stackedFeatures } from '/@src/data/blocks/advanced/features'
import {
  featureBlockF,
  featureBlockFProps,
  featureBlockFSample,
} from '/@src/data/docs/advanced/feature/blockF'
</script>

<template>
  <Section id="block-f-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block F"
        subtitle="Advanced block F variation 1"
        link="block-f-props"
      />

      <StackedSection
        :features="stackedFeatures"
        image="/assets/illustrations/features/calling.svg"
        dark-image="/assets/illustrations/features/calling.svg"
        rounded
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="Block F"
        subtitle="Advanced block F variation 2"
        link="block-f-props"
        inverted
      />

      <StackedSection
        :features="stackedFeatures"
        image="/assets/illustrations/features/calling.svg"
        dark-image="/assets/illustrations/features/calling.svg"
        inverted
      />
    </Container>
  </Section>

  <Section id="block-f-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block F Props" subtitle="Available props for block F" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="featureBlockF" />
        </template>
        <template #props>
          <DemoProps :props="featureBlockFProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="featureBlockFSample" />
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
