<script setup lang="ts">
import { features } from '/@src/data/blocks/features'
import {
  featureBlockA,
  featureBlockAProps,
  featureBlockASample,
} from '/@src/data/docs/blocks/feature/blockA'
</script>

<template>
  <Section id="block-a-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block A"
        subtitle="Feature block A variation 1"
        link="block-a-props"
      />

      <FeatureBlockA
        alignment="centered"
        :features="features"
        :columns="4"
        :limit="6"
        size="medium"
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block A"
        subtitle="Feature block A variation 2"
        link="block-a-props"
      />

      <FeatureBlockA
        alignment="centered"
        :features="features"
        :columns="4"
        :limit="6"
        size="medium"
        rounded
        links
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="Block A"
        subtitle="Feature block A variation 3"
        link="block-a-props"
        inverted
      />

      <FeatureBlockA
        alignment="centered"
        :features="features"
        :columns="4"
        :limit="6"
        size="medium"
        inverted
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block A"
        subtitle="Feature block A variation 4"
        link="block-a-props"
      />

      <FeatureBlockA
        :features="features"
        :columns="3"
        :limit="8"
        size="small"
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="Block A"
        subtitle="Feature block A variation 5"
        link="block-a-props"
        inverted
      />

      <FeatureBlockA
        :features="features"
        :columns="3"
        :limit="8"
        size="small"
        inverted
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block A"
        subtitle="Feature block A variation 6"
        link="block-a-props"
      />

      <FeatureBlockA
        :features="features"
        :columns="3"
        :limit="8"
        size="small"
        rounded
        links
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block A"
        subtitle="Feature block A variation 7"
        link="block-a-props"
      />

      <FeatureBlockA
        :features="features"
        :columns="6"
        :limit="4"
        size="medium"
      />
    </Container>
  </Section>

  <Section id="block-a-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block A Props" subtitle="Available props for block A" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="featureBlockA" />
        </template>
        <template #props>
          <DemoProps :props="featureBlockAProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="featureBlockASample" />
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
