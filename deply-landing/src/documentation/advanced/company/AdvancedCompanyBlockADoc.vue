<script setup lang="ts">
import { stats } from '/@src/data/blocks/advanced/stats'
import {
  companyBlockA,
  companyBlockAProps,
  companyBlockASample,
} from '/@src/data/docs/advanced/company/blockA'
</script>

<template>
  <Section id="block-a-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block A"
        subtitle="Advanced block A variation 1"
        link="block-a-props"
      />

      <NumbersSection
        subtitle="AI Technology"
        title="Our data scale powers your success"
        content="Our immense data scale feeds our machine learning and
                algorithms, so you can rest assured that every decision our AI
                makes is a smart one."
        :numbers="stats"
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="Block A"
        subtitle="Advanced block A variation 2"
        link="block-a-props"
        inverted
      />

      <NumbersSection
        inverted
        subtitle="AI Technology"
        title="Our data scale powers your success"
        content="Our immense data scale feeds our machine learning and
                algorithms, so you can rest assured that every decision our AI
                makes is a smart one."
        :numbers="stats"
        animated
      />
    </Container>
  </Section>

  <Section id="block-a-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block A Props" subtitle="Available props for block A" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="companyBlockA" />
        </template>
        <template #props>
          <DemoProps :props="companyBlockAProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="companyBlockASample" />
        </template>
        <template #usage>
          <p class="paragraph rem-95">
            Vulk ships with stunning advanced Feature blocks that you can use in
            any page. Each block comes with it's own styles and props. Use the
            props to build your own examples or use one of the prebuilt
            examples. Every block is natively supporting dark mode. See markup
            and props tab for more details about usage.
          </p>
        </template>
      </DemoTabs>
    </Container>
  </Section>
</template>
