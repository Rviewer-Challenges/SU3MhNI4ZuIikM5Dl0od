<script setup lang="ts">
import {
  boxedTestimonials,
  boxedTestimonials2,
} from '/@src/data/blocks/testimonials'
import {
  testimonialsBlockB,
  testimonialsBlockBProps,
  testimonialsBlockBSample,
} from '/@src/data/docs/blocks/testimonials/blockB'
</script>

<template>
  <Section id="block-b-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block B"
        subtitle="Block B variation 1"
        link="block-b-props"
      />

      <TestimonialBlockB :testimonials="boxedTestimonials" />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block B"
        subtitle="Block B variation 2"
        link="block-b-props"
      />

      <TestimonialBlockB :testimonials="boxedTestimonials2" squared />
    </Container>
  </Section>

  <Section id="block-b-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block B Props" subtitle="Available props for block B" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="testimonialsBlockB" />
        </template>
        <template #props>
          <DemoProps :props="testimonialsBlockBProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="testimonialsBlockBSample" />
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
