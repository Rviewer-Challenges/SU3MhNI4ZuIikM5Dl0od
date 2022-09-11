<script setup lang="ts">
import { mentorTestimonials } from '/@src/data/pages/mentors'

import {
  testimonialsBlockE,
  testimonialsBlockEProps,
  testimonialsBlockESample,
} from '/@src/data/docs/advanced/testimonials/blockE'
</script>

<template>
  <Section id="block-e-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block E"
        subtitle="Advanced block E variation 1"
        link="block-c-props"
      />

      <div class="py-4"></div>

      <TestimonialsTabbed
        :trainees="mentorTestimonials.trainees"
        :mentors="mentorTestimonials.mentors"
      />
    </Container>
  </Section>

  <Section id="block-e-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block E Props" subtitle="Available props for block E" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="testimonialsBlockE" />
        </template>
        <template #props>
          <DemoProps :props="testimonialsBlockEProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="testimonialsBlockESample" />
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
