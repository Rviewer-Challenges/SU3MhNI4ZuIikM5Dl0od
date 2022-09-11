<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
import {
  clientsBlockC,
  clientsBlockCProps,
  clientsBlockCSample,
} from '/@src/data/docs/advanced/clients/blockC'
</script>

<template>
  <Section id="block-c-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block C"
        subtitle="Advanced block C variation 1"
        link="block-b-props"
      />

      <div class="py-4"></div>

      <CompanyGrid
        title="Who are our partners?"
        :logos="customerLogos"
        :limit="20"
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="Block C"
        subtitle="Advanced block C variation 2"
        link="block-b-props"
        inverted
      />

      <CompanyGrid
        title="Who are our partners?"
        :logos="customerLogos"
        :limit="20"
        inverted
      />
    </Container>
  </Section>

  <Section id="block-c-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block C Props" subtitle="Available props for block C" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="clientsBlockC" />
        </template>
        <template #props>
          <DemoProps :props="clientsBlockCProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="clientsBlockCSample" />
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
