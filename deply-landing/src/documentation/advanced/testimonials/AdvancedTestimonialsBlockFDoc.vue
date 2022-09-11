<script setup lang="ts">
import { testimonials } from '/@src/data/pages/commerce'

import {
  testimonialsBlockF,
  testimonialsBlockFProps,
  testimonialsBlockFSample,
} from '/@src/data/docs/advanced/testimonials/blockF'
</script>

<template>
  <Section id="block-f-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block F"
        subtitle="Advanced block F variation 1"
        link="block-f-props"
      />

      <div class="py-4"></div>

      <TestimonialsCarousel :slides="testimonials" />
    </Container>
  </Section>

  <Section color="darker" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block F"
        subtitle="Advanced block F variation 2"
        link="block-f-props"
        inverted
      />

      <div class="py-4"></div>

      <TestimonialsCarousel :slides="testimonials" inverted />
    </Container>
  </Section>

  <Section id="block-f-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block F Props" subtitle="Available props for block F" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="testimonialsBlockF" />
        </template>
        <template #props>
          <DemoProps :props="testimonialsBlockFProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="testimonialsBlockFSample" />
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
