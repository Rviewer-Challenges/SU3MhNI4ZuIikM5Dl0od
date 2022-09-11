<script setup lang="ts">
import { faq } from '/@src/data/pages/commerce'
import {
  faqBlockA,
  faqBlockAProps,
  faqBlockASample,
} from '/@src/data/docs/advanced/faq/blockA'
</script>

<template>
  <Section id="block-a-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-10">
        <div class="pt-4 pb-6">
          <DemoTitle title="Block A" subtitle="Faq variation 1" />
          <div class="pt-4">
            <DoubleFaqCollapse :left="faq.left" :right="faq.right" chevrons />
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="faqBlockA" />
          </template>
          <template #props>
            <PrismCode language="javascript" :code="faqBlockAProps" />
          </template>
          <template #sample>
            <PrismCode language="javascript" :code="faqBlockASample" />
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
