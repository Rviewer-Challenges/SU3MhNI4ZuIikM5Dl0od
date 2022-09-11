<script setup lang="ts">
import { features4 } from '/@src/data/blocks/features'
import {
  featureBlockF,
  featureBlockFProps,
  featureBlockFSample,
} from '/@src/data/docs/blocks/feature/blockF'
</script>

<template>
  <Section id="block-f-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block F"
        subtitle="Feature block F variation 1"
        link="block-f-props"
      />

      <FeatureBlockF
        title="On point delivery."
        :features="features4"
        image="/assets/illustrations/features/bike.svg"
        dark-image="/assets/illustrations/features/bike-dark.svg"
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="Block F"
        subtitle="Feature block F variation 2"
        link="block-f-props"
        inverted
      />

      <FeatureBlockF
        title="On point delivery."
        :features="features4"
        image="/assets/illustrations/features/flying-dark.svg"
        dark-image="/assets/illustrations/features/flying-dark.svg"
        links
        inverted
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block F"
        subtitle="Feature block F variation 3"
        link="block-f-props"
      />

      <FeatureBlockF
        title="On point delivery."
        :features="features4"
        image="/assets/illustrations/features/flying.svg"
        dark-image="/assets/illustrations/features/flying-dark.svg"
        links
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
