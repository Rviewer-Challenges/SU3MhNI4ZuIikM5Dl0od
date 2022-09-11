<script setup lang="ts">
import { press } from '/@src/data/blocks/advanced/press'
import {
  companyBlockC,
  companyBlockCProps,
  companyBlockCSample,
} from '/@src/data/docs/advanced/company/blockC'
</script>

<template>
  <Section id="block-c-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block C"
        subtitle="Advanced block C variation 1"
        link="block-c-props"
      />

      <PressSection :releases="press" />
    </Container>
  </Section>

  <Section id="block-c-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block C Props" subtitle="Available props for block C" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="companyBlockC" />
        </template>
        <template #props>
          <DemoProps :props="companyBlockCProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="companyBlockCSample" />
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
