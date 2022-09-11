<script setup lang="ts">
import { features } from '/@src/data/blocks/features'
import {
  featureBlockC,
  featureBlockCProps,
  featureBlockCSample,
} from '/@src/data/docs/blocks/feature/blockC'
</script>

<template>
  <Section id="block-c-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block C"
        subtitle="Feature block C variation 1"
        link="block-c-props"
      />

      <FeatureBlockC
        :features="features"
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
        title="Block C"
        subtitle="Feature block C variation 2"
        link="block-c-props"
      />

      <FeatureBlockC
        :features="features"
        :limit="6"
        size="small"
        animated
        horizontal
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block C"
        subtitle="Feature block C variation 3"
        link="block-c-props"
      />

      <FeatureBlockC
        :features="features"
        :limit="6"
        size="medium"
        links
        rounded
      />
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
