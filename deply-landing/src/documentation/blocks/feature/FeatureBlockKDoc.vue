<script setup lang="ts">
import { features4 } from '/@src/data/blocks/features'
import {
  featureBlockK,
  featureBlockKProps,
  featureBlockKSample,
} from '/@src/data/docs/blocks/feature/blockK'
</script>

<template>
  <Section id="block-k-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block K"
        subtitle="Feature block K variation 1"
        link="block-k-props"
      />

      <FeatureBlockK
        title="Fresh Vegetables"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi
          enim inter se dissentiunt. Expectoque quid ad id, quod
          quaerebam, respondeas. Nescio quo modo praetervolavit oratio.
          Duo Reges: constructio interrete. Disserendi artem nullam
          habuit. Videsne quam sit magna dissensio? Ecce aliud simile
          dissimile."
        :features="features4"
        links
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="Block K"
        subtitle="Feature block K variation 1"
        link="block-k-props"
        inverted
      />

      <FeatureBlockK
        title="Fresh Vegetables"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi
          enim inter se dissentiunt. Expectoque quid ad id, quod
          quaerebam, respondeas. Nescio quo modo praetervolavit oratio.
          Duo Reges: constructio interrete. Disserendi artem nullam
          habuit. Videsne quam sit magna dissensio? Ecce aliud simile
          dissimile."
        :features="features4"
        links
        inverted
      />
    </Container>
  </Section>

  <Section id="block-k-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block K Props" subtitle="Available props for block K" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="featureBlockK" />
        </template>
        <template #props>
          <DemoProps :props="featureBlockKProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="featureBlockKSample" />
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
