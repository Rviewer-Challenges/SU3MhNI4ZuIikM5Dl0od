<script setup lang="ts">
import FooterBlockADoc from '/@src/documentation/blocks/footer/FooterBlockADoc.vue'
import FooterBlockBDoc from '/@src/documentation/blocks/footer/FooterBlockBDoc.vue'
import FooterBlockCDoc from '/@src/documentation/blocks/footer/FooterBlockCDoc.vue'
import FooterBlockDDoc from '/@src/documentation/blocks/footer/FooterBlockDDoc.vue'
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'

const demoLinks = [
  {
    label: 'Footer A',
    target: 'block-a-demo',
  },
  {
    label: 'Footer B',
    target: 'block-b-demo',
  },
  {
    label: 'Footer C',
    target: 'block-c-demo',
  },
  {
    label: 'Footer D',
    target: 'block-d-demo',
  },
]
</script>

<template>
  <div>
    <HeroSub
      title="Footer Blocks"
      subtitle="More than 4 customizable footer blocks are awaiting for you to build your own layouts, pages, and content."
    />

    <DemoLinks :links="demoLinks" width="440px" />

    <!--Footer A demo-->
    <FooterBlockADoc />

    <!--Footer B demo-->
    <FooterBlockBDoc />

    <!--Footer C demo-->
    <FooterBlockCDoc />

    <!--Footer D demo-->
    <FooterBlockDDoc />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
