<script setup lang="ts">
import { features3 } from '/@src/data/blocks/features'
import {
  featureBlockE,
  featureBlockEProps,
  featureBlockESample,
} from '/@src/data/docs/blocks/feature/blockE'
</script>

<template>
  <Section id="block-e-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block E"
        subtitle="Feature block E variation 1"
        link="block-e-props"
      />

      <FeatureBlockE
        title="Grow Faster."
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi enim
          inter se dissentiunt. Expectoque quid ad id, quod quaerebam,
          respondeas. Nescio quo modo praetervolavit oratio. Duo Reges:
          constructio interrete. Disserendi artem nullam habuit. Videsne quam
          sit magna dissensio? Ecce aliud simile dissimile."
        :features="features3"
        image="/assets/illustrations/features/thinking.svg"
        dark-image="/assets/illustrations/features/thinking.svg"
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="Block E"
        subtitle="Feature block E variation 2"
        link="block-e-props"
        inverted
      />

      <FeatureBlockE
        title="Grow Faster."
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi enim
          inter se dissentiunt. Expectoque quid ad id, quod quaerebam,
          respondeas. Nescio quo modo praetervolavit oratio. Duo Reges:
          constructio interrete. Disserendi artem nullam habuit. Videsne quam
          sit magna dissensio? Ecce aliud simile dissimile."
        :features="features3"
        image="/assets/illustrations/features/bike-dark.svg"
        dark-image="/assets/illustrations/features/bike-dark.svg"
        inverted
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block E"
        subtitle="Feature block E variation 3"
        link="block-e-props"
      />

      <FeatureBlockE
        title="VR For Business."
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi enim
          inter se dissentiunt. Expectoque quid ad id, quod quaerebam,
          respondeas. Nescio quo modo praetervolavit oratio. Duo Reges:
          constructio interrete. Disserendi artem nullam habuit. Videsne quam
          sit magna dissensio? Ecce aliud simile dissimile."
        :features="features3"
        image="/assets/illustrations/features/vr.svg"
        dark-image="/assets/illustrations/features/vr-dark.svg"
        links
      />
    </Container>
  </Section>

  <Section id="block-e-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block E Props" subtitle="Available props for block E" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="featureBlockE" />
        </template>
        <template #props>
          <DemoProps :props="featureBlockEProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="featureBlockESample" />
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
