<script setup lang="ts">
import { values } from '/@src/data/blocks/advanced/values'
import {
  companyBlockD,
  companyBlockDProps,
  companyBlockDSample,
} from '/@src/data/docs/advanced/company/blockD'
</script>

<template>
  <Section id="block-d-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block D"
        subtitle="Advanced block D variation 1"
        link="block-d-props"
      />

      <ValuesSection :values="values" image-height="120px" />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="Block D"
        subtitle="Advanced block D variation 2"
        link="block-d-props"
        inverted
      />

      <ValuesSection :values="values" image-height="120px" inverted />
    </Container>
  </Section>

  <Section id="block-d-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block D Props" subtitle="Available props for block D" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="companyBlockD" />
        </template>
        <template #props>
          <DemoProps :props="companyBlockDProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="companyBlockDSample" />
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
