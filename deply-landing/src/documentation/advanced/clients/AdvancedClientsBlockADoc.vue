<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
import {
  clientsBlockA,
  clientsBlockAProps,
  clientsBlockASample,
} from '/@src/data/docs/advanced/clients/blockA'
</script>

<template>
  <Section id="block-a-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block A"
        subtitle="Advanced block A variation 1"
        link="block-a-props"
      />

      <div class="py-4"></div>

      <LogoSection
        title="WE DRIVE RESULTS FOR ENTREPRENEURS TO THE FORTUNE 500"
        :logos="customerLogos"
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

      <LogoSection
        title="WE DRIVE RESULTS FOR ENTREPRENEURS TO THE FORTUNE 500"
        :logos="customerLogos"
        inverted
      />
    </Container>
  </Section>

  <Section id="block-a-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block A Props" subtitle="Available props for block A" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="clientsBlockA" />
        </template>
        <template #props>
          <DemoProps :props="clientsBlockAProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="clientsBlockASample" />
        </template>
        <template #usage>
          <p class="paragraph rem-95">
            Vulk ships with stunning advanced logo blocks that you can use in
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
