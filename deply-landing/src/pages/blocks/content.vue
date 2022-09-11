<script setup lang="ts">
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'
import ContentBlockADoc from '/@src/documentation/blocks/content/ContentBlockADoc.vue'
import ContentBlockBDoc from '/@src/documentation/blocks/content/ContentBlockBDoc.vue'
import ContentBlockCDoc from '/@src/documentation/blocks/content/ContentBlockCDoc.vue'
import ContentBlockDDoc from '/@src/documentation/blocks/content/ContentBlockDDoc.vue'
import ContentBlockEDoc from '/@src/documentation/blocks/content/ContentBlockEDoc.vue'
import ContentBlockFDoc from '/@src/documentation/blocks/content/ContentBlockFDoc.vue'
import ContentBlockGDoc from '/@src/documentation/blocks/content/ContentBlockGDoc.vue'
import ContentBlockHDoc from '/@src/documentation/blocks/content/ContentBlockHDoc.vue'
import ContentBlockIDoc from '/@src/documentation/blocks/content/ContentBlockIDoc.vue'
import ContentBlockJDoc from '/@src/documentation/blocks/content/ContentBlockJDoc.vue'

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
  {
    label: 'Block I',
    target: 'block-i-demo',
  },
  {
    label: 'Block J',
    target: 'block-j-demo',
  },
]
</script>

<template>
  <div>
    <HeroSub
      title="Content Blocks"
      subtitle="More than 10 customizable content blocks are awaiting for you to build your own layouts, pages, and content."
    />
    <DemoLinks :links="demoLinks" width="940px" />

    <!--Content Block A demo-->
    <ContentBlockADoc />

    <!--Content Block B demo-->
    <ContentBlockBDoc />

    <!--Content Block C demo-->
    <ContentBlockCDoc />

    <!--Content Block D demo-->
    <ContentBlockDDoc />

    <!--Content Block E demo-->
    <ContentBlockEDoc />

    <!--Content Block F demo-->
    <ContentBlockFDoc />

    <!--Content Block G demo-->
    <ContentBlockGDoc />

    <!--Content Block H demo-->
    <ContentBlockHDoc />

    <!--Content Block I demo-->
    <ContentBlockIDoc />

    <!--Content Block J demo-->
    <ContentBlockJDoc />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
