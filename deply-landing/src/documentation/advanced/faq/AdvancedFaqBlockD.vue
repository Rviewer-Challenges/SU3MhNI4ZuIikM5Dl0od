<script setup lang="ts">
import { genericFaq } from '/@src/data/blocks/advanced/faq'
import {
  faqBlockD,
  faqBlockDProps,
  faqBlockDSample,
} from '/@src/data/docs/advanced/faq/blockD'
</script>

<template>
  <Section id="block-d-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-10">
        <div class="pt-4 pb-6">
          <DemoTitle title="Block D" subtitle="Faq variation 4" />
          <div class="pt-4">
            <FaqListBoxed :items="genericFaq" />
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="faqBlockD" />
          </template>
          <template #props>
            <PrismCode language="javascript" :code="faqBlockDProps" />
          </template>
          <template #sample>
            <PrismCode language="javascript" :code="faqBlockDSample" />
          </template>
          <template #usage>
            <p class="paragraph rem-95">
              Vulk ships with stunning advanced FAQ blocks that you can use in
              any page. Each block comes with it's own styles and props. Use the
              props to build your own examples or use one of the prebuilt
              examples. Every block is natively supporting dark mode. See markup
              and props tab for more details about usage.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
