<script setup lang="ts">
import { workoutTestimonials } from '/@src/data/pages/workout'

import {
  testimonialsBlockG,
  testimonialsBlockGProps,
  testimonialsBlockGSample,
} from '/@src/data/docs/advanced/testimonials/blockG'
</script>

<template>
  <Section id="block-g-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block G"
        subtitle="Advanced block G variation 1"
        link="block-g-props"
      />

      <div class="py-4"></div>

      <TestimonialsCarouselColor :slides="workoutTestimonials" />
    </Container>
  </Section>

  <Section id="block-g-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block G Props" subtitle="Available props for block G" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="testimonialsBlockG" />
        </template>
        <template #props>
          <DemoProps :props="testimonialsBlockGProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="testimonialsBlockGSample" />
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
