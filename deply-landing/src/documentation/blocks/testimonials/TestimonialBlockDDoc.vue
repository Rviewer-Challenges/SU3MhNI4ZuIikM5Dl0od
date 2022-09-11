<script setup lang="ts">
import { socialTestimonials } from '/@src/data/blocks/testimonials'
import {
  testimonialsBlockD,
  testimonialsBlockDProps,
  testimonialsBlockDSample,
} from '/@src/data/docs/blocks/testimonials/blockD'
</script>

<template>
  <Section id="block-d-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block D"
        subtitle="Block D variation 1"
        link="block-d-props"
      />

      <TestimonialBlockD :testimonials="socialTestimonials" />
    </Container>
  </Section>

  <Section id="block-d-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block D"
        subtitle="Block D variation 2"
        link="block-d-props"
      />

      <TestimonialBlockD :testimonials="socialTestimonials" squared />
    </Container>
  </Section>

  <Section id="block-d-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block D Props" subtitle="Available props for block D" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="testimonialsBlockD" />
        </template>
        <template #props>
          <DemoProps :props="testimonialsBlockDProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="testimonialsBlockDSample" />
        </template>
        <template #usage>
          <p class="paragraph rem-95">
            Vulk ships with highly customizable and versatile Testimonial blocks
            that you can use in any page. Each block comes with it's own styles
            and props. Use the props to build your own examples or use one of
            the prebuilt examples.
          </p>
        </template>
      </DemoTabs>
    </Container>
  </Section>
</template>
