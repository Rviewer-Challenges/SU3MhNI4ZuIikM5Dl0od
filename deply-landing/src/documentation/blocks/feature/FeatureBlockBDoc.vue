<script setup lang="ts">
import { features2 } from '/@src/data/blocks/features'
import {
  featureBlockB,
  featureBlockBProps,
  featureBlockBSample,
} from '/@src/data/docs/blocks/feature/blockB'
</script>

<template>
  <Section id="block-b-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block B"
        subtitle="Feature block B variation 1"
        link="block-b-props"
      />

      <FeatureBlockB
        alignment="centered"
        :features="features2"
        :columns="4"
        :limit="6"
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="Block B"
        subtitle="Feature block B variation 2"
        link="block-b-props"
        inverted
      />

      <FeatureBlockB
        alignment="centered"
        :features="features2"
        :columns="4"
        :limit="6"
        inverted
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block B"
        subtitle="Feature block B variation 3"
        link="block-b-props"
      />

      <FeatureBlockB
        alignment="centered"
        :features="features2"
        :columns="4"
        :limit="6"
        size="small"
        links
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block B"
        subtitle="Feature block B variation 4"
        link="block-b-props"
      />

      <FeatureBlockB
        size="small"
        :features="features2"
        :columns="3"
        :limit="8"
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="Block B"
        subtitle="Feature block B variation 5"
        link="block-b-props"
        inverted
      />

      <FeatureBlockB
        size="small"
        :features="features2"
        :columns="3"
        :limit="8"
        inverted
      />
    </Container>
  </Section>

  <Section id="block-b-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block B Props" subtitle="Available props for block B" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="featureBlockB" />
        </template>
        <template #props>
          <DemoProps :props="featureBlockBProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="featureBlockBSample" />
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
