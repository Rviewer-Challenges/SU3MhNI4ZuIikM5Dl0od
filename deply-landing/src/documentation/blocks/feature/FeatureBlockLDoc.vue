<script setup lang="ts">
import { features9 } from '/@src/data/blocks/features'
import {
  featureBlockL,
  featureBlockLProps,
  featureBlockLSample,
} from '/@src/data/docs/blocks/feature/blockL'
</script>

<template>
  <Section id="block-l-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block L"
        subtitle="Feature block L variation 1"
        link="block-l-props"
      />

      <FeatureBlockL :features="features9" blob dots links />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="Block L"
        subtitle="Feature block L variation 1"
        link="block-l-props"
        inverted
      />

      <FeatureBlockL :features="features9" blob dots links inverted />
    </Container>
  </Section>

  <Section id="block-l-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block L Props" subtitle="Available props for block L" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="featureBlockL" />
        </template>
        <template #props>
          <DemoProps :props="featureBlockLProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="featureBlockLSample" />
        </template>
        <template #usage>
          <p class="paragraph rem-95">
            Vulk ships with highly customizable and versatile Feature blocks
            that you can use in any page. Each block comes with it's own styles
            and props. Use the props to build your own examples or use one of
            the prebuilt examples. Every block is natively supporting dark mode.
            However, there are some cases when even in light mode, the section
            background is dark or colored. In that case, you can use the
            <code>inverted</code>
            prop to invert the component when in light mode. See markup and
            props tab for more details about usage.
          </p>
        </template>
      </DemoTabs>
    </Container>
  </Section>
</template>
