<script setup lang="ts">
import { features2 } from '/@src/data/blocks/features'
import {
  featureBlockD,
  featureBlockDProps,
  featureBlockDSample,
} from '/@src/data/docs/blocks/feature/blockD'
</script>

<template>
  <Section id="block-d-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block D"
        subtitle="Feature block D variation 1"
        link="block-d-props"
      />

      <FeatureBlockD
        :features="features2"
        :limit="6"
        size="medium"
        links
        animated
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block D"
        subtitle="Feature block D variation 2"
        link="block-d-props"
      />

      <FeatureBlockD
        :features="features2"
        :limit="6"
        size="small"
        horizontal
        animated
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block D"
        subtitle="Feature block D variation 3"
        link="block-d-props"
      />

      <FeatureBlockD :features="features2" :limit="6" links />
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
          <PrismCode language="javascript" :code="featureBlockDSample" />
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
