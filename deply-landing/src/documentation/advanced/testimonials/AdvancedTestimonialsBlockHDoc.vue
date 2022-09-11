<script setup lang="ts">
import { testimonials } from '/@src/data/pages/jobs'

import {
  testimonialsBlockH,
  testimonialsBlockHProps,
  testimonialsBlockHSample,
} from '/@src/data/docs/advanced/testimonials/blockH'
</script>

<template>
  <Section id="block-h-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block H"
        subtitle="Advanced block H variation 1"
        link="block-h-props"
      />

      <div class="py-4"></div>

      <TestimonialsCarouselSingle :slides="testimonials" />
    </Container>
  </Section>

  <Section id="block-h-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block H Props" subtitle="Available props for block H" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="testimonialsBlockH" />
        </template>
        <template #props>
          <DemoProps :props="testimonialsBlockHProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="testimonialsBlockHSample" />
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
