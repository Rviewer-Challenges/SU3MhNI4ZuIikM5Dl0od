<script setup lang="ts">
import { features6, features7 } from '/@src/data/blocks/features'
import {
  featureBlockI,
  featureBlockIProps,
  featureBlockISample,
} from '/@src/data/docs/blocks/feature/blockI'
</script>

<template>
  <Section id="block-i-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block I"
        subtitle="Feature block I variation 1"
        link="block-i-props"
      />

      <FeatureBlockI
        title="Amazing Features"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi enim
        inter se dissentiunt. Expectoque quid ad id, quod quaerebam,
        respondeas. Nescio quo modo praetervolavit oratio. Duo Reges:
        constructio interrete. Disserendi artem nullam habuit."
        :features="features6"
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="Block I"
        subtitle="Feature block I variation 2"
        link="block-i-props"
        inverted
      />

      <FeatureBlockI
        title="Amazing Features"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi enim
        inter se dissentiunt. Expectoque quid ad id, quod quaerebam,
        respondeas. Nescio quo modo praetervolavit oratio. Duo Reges:
        constructio interrete. Disserendi artem nullam habuit."
        :features="features6"
        inverted
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block I"
        subtitle="Feature block I variation 3"
        link="block-i-props"
      />

      <FeatureBlockI
        title="Amazing Features"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi enim
        inter se dissentiunt. Expectoque quid ad id, quod quaerebam,
        respondeas. Nescio quo modo praetervolavit oratio. Duo Reges:
        constructio interrete. Disserendi artem nullam habuit."
        :features="features7"
        links
        rounded
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="Block I"
        subtitle="Feature block I variation 4"
        link="block-i-props"
        inverted
      />

      <FeatureBlockI
        title="Amazing Features"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi enim
        inter se dissentiunt. Expectoque quid ad id, quod quaerebam,
        respondeas. Nescio quo modo praetervolavit oratio. Duo Reges:
        constructio interrete. Disserendi artem nullam habuit."
        :features="features7"
        links
        rounded
        inverted
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block I"
        subtitle="Feature block I variation 5"
        link="block-i-props"
      />

      <FeatureBlockI
        title="Amazing Features"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi enim
        inter se dissentiunt. Expectoque quid ad id, quod quaerebam,
        respondeas. Nescio quo modo praetervolavit oratio. Duo Reges:
        constructio interrete. Disserendi artem nullam habuit."
        :features="features7"
        :columns="3"
        :limit="4"
        rounded
      />
    </Container>
  </Section>

  <Section id="block-i-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block I Props" subtitle="Available props for block I" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="featureBlockI" />
        </template>
        <template #props>
          <DemoProps :props="featureBlockIProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="featureBlockISample" />
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
