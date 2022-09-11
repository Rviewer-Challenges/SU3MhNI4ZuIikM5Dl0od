<script setup lang="ts">
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'
import AdvancedContentBlockADoc from '/@src/documentation/advanced/content/AdvancedContentBlockADoc.vue'
import AdvancedContentBlockBDoc from '/@src/documentation/advanced/content/AdvancedContentBlockBDoc.vue'
import AdvancedContentBlockCDoc from '/@src/documentation/advanced/content/AdvancedContentBlockCDoc.vue'
import AdvancedContentBlockDDoc from '/@src/documentation/advanced/content/AdvancedContentBlockDDoc.vue'

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
]
</script>

<template>
  <div>
    <HeroSub
      title="Advanced Content"
      subtitle="Discover Vulk's advanced blocks and learn how you can customize them to build incredible and memorable projects."
    />

    <DemoLinks :links="demoLinks" width="400px" />

    <!--Content block A demo-->
    <AdvancedContentBlockADoc />

    <!--Content block B demo-->
    <AdvancedContentBlockBDoc />

    <!--Content block C demo-->
    <AdvancedContentBlockCDoc />

    <!--Content block D demo-->
    <AdvancedContentBlockDDoc />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
