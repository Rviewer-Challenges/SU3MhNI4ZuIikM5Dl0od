<script setup lang="ts">
import { mentorsFaq } from '/@src/data/pages/mentors'
import {
  faqBlockB,
  faqBlockBProps,
  faqBlockBSample,
} from '/@src/data/docs/advanced/faq/blockB'
</script>

<template>
  <Section id="block-b-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-10">
        <div class="pt-4 pb-6">
          <DemoTitle title="Block B" subtitle="Faq variation 2" />
          <div class="pt-4">
            <FaqList :items="mentorsFaq" />
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="faqBlockB" />
          </template>
          <template #props>
            <PrismCode language="javascript" :code="faqBlockBProps" />
          </template>
          <template #sample>
            <PrismCode language="javascript" :code="faqBlockBSample" />
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
