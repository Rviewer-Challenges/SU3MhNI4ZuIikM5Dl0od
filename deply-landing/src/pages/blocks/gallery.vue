<script setup lang="ts">
import GalleryBlockADoc from '/@src/documentation/blocks/gallery/GalleryBlockADoc.vue'
import GalleryBlockBDoc from '/@src/documentation/blocks/gallery/GalleryBlockBDoc.vue'
import GalleryBlockCDoc from '/@src/documentation/blocks/gallery/GalleryBlockCDoc.vue'
import GalleryBlockDDoc from '/@src/documentation/blocks/gallery/GalleryBlockDDoc.vue'
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
]
</script>

<template>
  <div>
    <HeroSub
      title="Gallery Blocks"
      subtitle="More than 4 customizable gallery blocks are awaiting for you to build your own layouts, pages, and content."
    />

    <DemoLinks :links="demoLinks" width="420px" />

    <!--Block A demo-->
    <GalleryBlockADoc />

    <!--Block B demo-->
    <GalleryBlockBDoc />

    <!--Block C demo-->
    <GalleryBlockCDoc />

    <!--Block D demo-->
    <GalleryBlockDDoc />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
