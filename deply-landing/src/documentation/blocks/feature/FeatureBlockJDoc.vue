<script setup lang="ts">
import { features8 } from '/@src/data/blocks/features'
import {
  featureBlockJ,
  featureBlockJProps,
  featureBlockJSample,
} from '/@src/data/docs/blocks/feature/blockJ'
</script>

<template>
  <Section id="block-j-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block J"
        subtitle="Feature block J variation 1"
        link="block-j-props"
      />

      <FeatureBlockJ
        title="Fresh Vegetables"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi
          enim inter se dissentiunt. Expectoque quid ad id, quod
          quaerebam, respondeas. Nescio quo modo praetervolavit oratio.
          Duo Reges: constructio interrete. Disserendi artem nullam
          habuit. Videsne quam sit magna dissensio? Ecce aliud simile
          dissimile."
        image="/assets/illustrations/features/carrying-vegetables.svg"
        dark-image="/assets/illustrations/features/carrying-vegetables.svg"
        :features="features8"
        links
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="Block J"
        subtitle="Feature block J variation 2"
        link="block-j-props"
        inverted
      />

      <FeatureBlockJ
        title="Fresh Vegetables"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi
          enim inter se dissentiunt. Expectoque quid ad id, quod
          quaerebam, respondeas. Nescio quo modo praetervolavit oratio.
          Duo Reges: constructio interrete. Disserendi artem nullam
          habuit. Videsne quam sit magna dissensio? Ecce aliud simile
          dissimile."
        image="/assets/illustrations/features/carrying-vegetables.svg"
        dark-image="/assets/illustrations/features/carrying-vegetables.svg"
        :features="features8"
        links
        inverted
      />
    </Container>
  </Section>

  <Section id="block-j-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block J Props" subtitle="Available props for block J" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="featureBlockJ" />
        </template>
        <template #props>
          <DemoProps :props="featureBlockJProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="featureBlockJSample" />
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
