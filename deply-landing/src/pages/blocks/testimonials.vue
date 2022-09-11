<script setup lang="ts">
import TestimonialBlockADoc from '/@src/documentation/blocks/testimonials/TestimonialBlockADoc.vue'
import TestimonialBlockBDoc from '/@src/documentation/blocks/testimonials/TestimonialBlockBDoc.vue'
import TestimonialBlockCDoc from '/@src/documentation/blocks/testimonials/TestimonialBlockCDoc.vue'
import TestimonialBlockDDoc from '/@src/documentation/blocks/testimonials/TestimonialBlockDDoc.vue'
import TestimonialBlockEDoc from '/@src/documentation/blocks/testimonials/TestimonialBlockEDoc.vue'
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'

const demoLinks = [
  {
    label: 'Block A',
    target: 'block-a-demo',
  },
  {
    label: 'Block B',
    target: 'block-b-demo',
  },
  {
    label: 'Block C',
    target: 'block-c-demo',
  },
  {
    label: 'Block D',
    target: 'block-d-demo',
  },
  {
    label: 'Block E',
    target: 'block-e-demo',
  },
]
</script>

<template>
  <div>
    <HeroSub
      title="Testimonial Blocks"
      subtitle="More than 3 customizable Testimonial blocks are awaiting for you to build your own layouts, pages, and content."
    />

    <DemoLinks :links="demoLinks" width="480px" />

    <!--Block A demo-->
    <TestimonialBlockADoc />

    <!--Block B demo-->
    <TestimonialBlockBDoc />

    <!--Block C demo-->
    <TestimonialBlockCDoc />

    <!--Block D demo-->
    <TestimonialBlockDDoc />

    <!--Block E demo-->
    <TestimonialBlockEDoc />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
