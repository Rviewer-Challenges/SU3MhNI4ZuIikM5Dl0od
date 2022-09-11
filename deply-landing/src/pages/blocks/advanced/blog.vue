<script setup lang="ts">
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'
import AdvancedBlogBlockADoc from '/@src/documentation/advanced/blog/AdvancedBlogBlockADoc.vue'
import AdvancedBlogBlockBDoc from '/@src/documentation/advanced/blog/AdvancedBlogBlockBDoc.vue'

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
      title="Advanced Blog"
      subtitle="Discover Vulk's advanced blocks and learn how you can customize them to build incredible and memorable projects."
    />

    <DemoLinks :links="demoLinks" width="400px" />

    <!--Blog block A demo-->
    <AdvancedBlogBlockADoc />

    <!--Blog block B demo-->
    <AdvancedBlogBlockBDoc />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
