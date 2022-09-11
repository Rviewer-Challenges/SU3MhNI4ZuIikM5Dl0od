<script setup lang="ts">
import { contactBlockA } from '/@src/data/docs/advanced/contact/blockA'
</script>

<template>
  <Section id="block-a-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block A"
        subtitle="Advanced block A variation 1"
        link="block-a-props"
      />

      <div class="mx-auto max-w-3 py-4">
        <ContactForm />
      </div>
    </Container>
  </Section>

  <Section id="block-a-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block A Props" subtitle="Available props for block A" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="contactBlockA" />
        </template>
        <template #props>
          <div class="empty-text">
            <p class="paragraph rem-95">
              No props available for this component
            </p>
          </div>
        </template>
        <template #sample>
          <div class="empty-text">
            <p class="paragraph rem-95">
              No data sample available for this component
            </p>
          </div>
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
