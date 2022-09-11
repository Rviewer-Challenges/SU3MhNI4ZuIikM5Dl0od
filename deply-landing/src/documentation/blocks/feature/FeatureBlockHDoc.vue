<script setup lang="ts">
import { features } from '/@src/data/blocks/features'
import {
  featureBlockH,
  featureBlockHProps,
  featureBlockHSample,
} from '/@src/data/docs/blocks/feature/blockH'
</script>

<template>
  <Section id="block-h-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block H"
        subtitle="Feature block H variation 1"
        link="block-h-props"
      />

      <FeatureBlockH :features="features" />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block H"
        subtitle="Feature block H variation 2"
        link="block-h-props"
      />

      <FeatureBlockH :features="features" rounded links />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="Block H"
        subtitle="Feature block H variation 3"
        link="block-h-props"
        inverted
      />

      <FeatureBlockH :features="features" rounded links inverted />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block H"
        subtitle="Feature block H variation 4"
        link="block-h-props"
      />

      <FeatureBlockH :features="features" :columns="3" :limit="8" />
    </Container>
  </Section>

  <Section id="block-h-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block H Props" subtitle="Available props for block H" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="featureBlockH" />
        </template>
        <template #props>
          <DemoProps :props="featureBlockHProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="featureBlockHSample" />
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
