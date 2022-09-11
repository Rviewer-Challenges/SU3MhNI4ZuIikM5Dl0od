<script setup lang="ts">
import CtaBlockADoc from '/@src/documentation/blocks/cta/CtaBlockADoc.vue'
import CtaBlockBDoc from '/@src/documentation/blocks/cta/CtaBlockBDoc.vue'
import CtaBlockCDoc from '/@src/documentation/blocks/cta/CtaBlockCDoc.vue'
import CtaBlockDDoc from '/@src/documentation/blocks/cta/CtaBlockDDoc.vue'
import CtaBlockEDoc from '/@src/documentation/blocks/cta/CtaBlockEDoc.vue'
import CtaBlockFDoc from '/@src/documentation/blocks/cta/CtaBlockFDoc.vue'
import CtaBlockGDoc from '/@src/documentation/blocks/cta/CtaBlockGDoc.vue'
import CtaBlockHDoc from '/@src/documentation/blocks/cta/CtaBlockHDoc.vue'
import CtaBlockIDoc from '/@src/documentation/blocks/cta/CtaBlockIDoc.vue'
import CtaBlockJDoc from '/@src/documentation/blocks/cta/CtaBlockJDoc.vue'
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
      title="CTA Blocks"
      subtitle="More than 10 customizable CTA blocks are awaiting for you to build your own layouts, pages, and content."
    />

    <DemoLinks :links="demoLinks" width="940px" />

    <!--Block A demo-->
    <CtaBlockADoc />

    <!--Block B demo-->
    <CtaBlockBDoc />

    <!--Block C demo-->
    <CtaBlockCDoc />

    <!--Block D demo-->
    <CtaBlockDDoc />

    <!--Block E demo-->
    <CtaBlockEDoc />

    <!--Block F demo-->
    <CtaBlockFDoc />

    <!--Block G demo-->
    <CtaBlockGDoc />

    <!--Block H demo-->
    <CtaBlockHDoc />

    <!--Block I demo-->
    <CtaBlockIDoc />

    <!--Block J demo-->
    <CtaBlockJDoc />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
