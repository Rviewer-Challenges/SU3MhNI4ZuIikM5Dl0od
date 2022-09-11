<script setup lang="ts">
import {
  boxedTestimonials,
  boxedTestimonials2,
} from '/@src/data/blocks/testimonials'
import {
  testimonialsBlockC,
  testimonialsBlockCProps,
  testimonialsBlockCSample,
} from '/@src/data/docs/blocks/testimonials/blockC'
</script>

<template>
  <Section id="block-c-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block C"
        subtitle="Block C variation 1"
        link="block-c-props"
      />

      <TestimonialBlockC :testimonials="boxedTestimonials2" />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block C"
        subtitle="Block C variation 2"
        link="block-c-props"
      />

      <TestimonialBlockC :testimonials="boxedTestimonials" squared />
    </Container>
  </Section>

  <Section id="block-c-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block C Props" subtitle="Available props for block C" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="testimonialsBlockC" />
        </template>
        <template #props>
          <DemoProps :props="testimonialsBlockCProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="testimonialsBlockCSample" />
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
