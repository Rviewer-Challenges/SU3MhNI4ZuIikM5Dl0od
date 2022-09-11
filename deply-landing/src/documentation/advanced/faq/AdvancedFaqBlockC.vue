<script setup lang="ts">
import { staticFaq } from '/@src/data/blocks/faq'
import {
  faqBlockC,
  faqBlockCProps,
  faqBlockCSample,
} from '/@src/data/docs/advanced/faq/blockC'
</script>

<template>
  <Section id="block-c-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-10">
        <div class="pt-4 pb-6">
          <DemoTitle title="Block C" subtitle="Faq variation 3" />
          <div class="pt-4">
            <FaqStatic :items="staticFaq" />
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="faqBlockC" />
          </template>
          <template #props>
            <PrismCode language="javascript" :code="faqBlockCProps" />
          </template>
          <template #sample>
            <PrismCode language="javascript" :code="faqBlockCSample" />
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
