<script setup lang="ts">
import { iconFeatures1 } from '/@src/data/blocks/advanced/features'
import {
  featureBlockC,
  featureBlockCProps,
  featureBlockCSample,
} from '/@src/data/docs/advanced/feature/blockC'
</script>

<template>
  <Section id="block-c-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block C"
        subtitle="Advanced block C variation 1"
        link="block-c-props"
      />

      <IconSection :features="iconFeatures1" />
    </Container>
  </Section>

  <Section color="darker" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block C"
        subtitle="Advanced block C variation 2"
        link="block-c-props"
        inverted
      />

      <IconSection :features="iconFeatures1" inverted />
    </Container>
  </Section>

  <Section id="block-c-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block C Props" subtitle="Available props for block C" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="featureBlockC" />
        </template>
        <template #props>
          <DemoProps :props="featureBlockCProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="featureBlockCSample" />
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
