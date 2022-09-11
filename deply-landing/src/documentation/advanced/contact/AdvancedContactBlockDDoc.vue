<script setup lang="ts">
import { contactInfo } from '/@src/data/pages/contact'
import {
  contactBlockD,
  contactBlockDProps,
  contactBlockDSample,
} from '/@src/data/docs/advanced/contact/blockD'
</script>

<template>
  <Section id="block-d-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block D"
        subtitle="Advanced block D variation 1"
        link="block-d-props"
      />

      <div class="py-4">
        <ContactInfo :infos="contactInfo" />
      </div>
    </Container>
  </Section>

  <Section id="block-d-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block D Props" subtitle="Available props for block D" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="contactBlockD" />
        </template>
        <template #props>
          <DemoProps :props="contactBlockDProps.props" />
        </template>
        <template #sample>
          <PrismCode language="html" :code="contactBlockDSample" />
        </template>
        <template #usage>
          <p class="paragraph rem-95">
            Vulk ships with stunning advanced Contact blocks that you can use in
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
