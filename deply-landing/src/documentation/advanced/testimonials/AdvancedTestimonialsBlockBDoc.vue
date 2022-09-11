<script setup lang="ts">
import { testimonials } from '/@src/data/blocks/advanced/testimonials'
import {
  testimonialsBlockB,
  testimonialsBlockBProps,
  testimonialsBlockBSample,
} from '/@src/data/docs/advanced/testimonials/blockB'
</script>

<template>
  <Section id="block-b-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block B"
        subtitle="Advanced block B variation 1"
        link="block-b-props"
      />

      <div class="py-4"></div>
    </Container>

    <TestimonialsMarquee :testimonials="testimonials" color="default" />
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
