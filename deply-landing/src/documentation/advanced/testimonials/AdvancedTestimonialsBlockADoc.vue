<script setup lang="ts">
import { testimonials2 } from '/@src/data/blocks/advanced/testimonials'

import {
  testimonialsBlockA,
  testimonialsBlockAProps,
  testimonialsBlockASample,
} from '/@src/data/docs/advanced/testimonials/blockA'
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

      <TestimonialsGrid :testimonials="testimonials2" blobs />
    </Container>
  </Section>

  <Section id="block-a-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block A Props" subtitle="Available props for block A" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="testimonialsBlockA" />
        </template>
        <template #props>
          <DemoProps :props="testimonialsBlockAProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="testimonialsBlockASample" />
        </template>
        <template #usage>
          <p class="paragraph rem-95">
            Vulk ships with stunning advanced Testimonial blocks that you can
            use in any page. Each block comes with it's own styles and props.
            Use the props to build your own examples or use one of the prebuilt
            examples. Every block is natively supporting dark mode. See markup
            and props tab for more details about usage.
          </p>
        </template>
      </DemoTabs>
    </Container>
  </Section>
</template>
