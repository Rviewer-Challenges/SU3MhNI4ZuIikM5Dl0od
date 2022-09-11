<script setup lang="ts">
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'
import AdvancedTestimonialsBlockADoc from '/@src/documentation/advanced/testimonials/AdvancedTestimonialsBlockADoc.vue'
import AdvancedTestimonialsBlockBDoc from '/@src/documentation/advanced/testimonials/AdvancedTestimonialsBlockBDoc.vue'
import AdvancedTestimonialsBlockCDoc from '/@src/documentation/advanced/testimonials/AdvancedTestimonialsBlockCDoc.vue'
import AdvancedTestimonialsBlockDDoc from '/@src/documentation/advanced/testimonials/AdvancedTestimonialsBlockDDoc.vue'
import AdvancedTestimonialsBlockEDoc from '/@src/documentation/advanced/testimonials/AdvancedTestimonialsBlockEDoc.vue'
import AdvancedTestimonialsBlockFDoc from '/@src/documentation/advanced/testimonials/AdvancedTestimonialsBlockFDoc.vue'
import AdvancedTestimonialsBlockGDoc from '/@src/documentation/advanced/testimonials/AdvancedTestimonialsBlockGDoc.vue'
import AdvancedTestimonialsBlockHDoc from '/@src/documentation/advanced/testimonials/AdvancedTestimonialsBlockHDoc.vue'

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
  {
    label: 'Block F',
    target: 'block-f-demo',
  },
  {
    label: 'Block G',
    target: 'block-g-demo',
  },
  {
    label: 'Block H',
    target: 'block-h-demo',
  },
]
</script>

<template>
  <div>
    <HeroSub
      title="Testimonial Blocks"
      subtitle="More than 8 customizable navbar blocks are awaiting for you to build your own layouts, pages, and content."
    />

    <DemoLinks :links="demoLinks" width="750px" />

    <!--Testimonials block A demo-->
    <AdvancedTestimonialsBlockADoc />

    <!--Testimonials block B demo-->
    <AdvancedTestimonialsBlockBDoc />

    <!--Testimonials block C demo-->
    <AdvancedTestimonialsBlockCDoc />

    <!--Testimonials block D demo-->
    <AdvancedTestimonialsBlockDDoc />

    <!--Testimonials block E demo-->
    <AdvancedTestimonialsBlockEDoc />

    <!--Testimonials block F demo-->
    <AdvancedTestimonialsBlockFDoc />

    <!--Testimonials block G demo-->
    <AdvancedTestimonialsBlockGDoc />

    <!--Testimonials block H demo-->
    <AdvancedTestimonialsBlockHDoc />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
