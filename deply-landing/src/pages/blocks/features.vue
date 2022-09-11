<script setup lang="ts">
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'
import FeatureBlockADoc from '/@src/documentation/blocks/feature/FeatureBlockADoc.vue'
import FeatureBlockBDoc from '/@src/documentation/blocks/feature/FeatureBlockBDoc.vue'
import FeatureBlockCDoc from '/@src/documentation/blocks/feature/FeatureBlockCDoc.vue'
import FeatureBlockDDoc from '/@src/documentation/blocks/feature/FeatureBlockDDoc.vue'
import FeatureBlockEDoc from '/@src/documentation/blocks/feature/FeatureBlockEDoc.vue'
import FeatureBlockFDoc from '/@src/documentation/blocks/feature/FeatureBlockFDoc.vue'
import FeatureBlockGDoc from '/@src/documentation/blocks/feature/FeatureBlockGDoc.vue'
import FeatureBlockHDoc from '/@src/documentation/blocks/feature/FeatureBlockHDoc.vue'
import FeatureBlockIDoc from '/@src/documentation/blocks/feature/FeatureBlockIDoc.vue'
import FeatureBlockJDoc from '/@src/documentation/blocks/feature/FeatureBlockJDoc.vue'
import FeatureBlockKDoc from '/@src/documentation/blocks/feature/FeatureBlockKDoc.vue'
import FeatureBlockLDoc from '/@src/documentation/blocks/feature/FeatureBlockLDoc.vue'

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
  {
    label: 'Block K',
    target: 'block-k-demo',
  },
  {
    label: 'Block L',
    target: 'block-l-demo',
  },
]
</script>

<template>
  <div>
    <HeroSub
      title="Feature Blocks"
      subtitle="More than 12 customizable feature blocks are awaiting for you to build your own layouts, pages, and content."
    />

    <DemoLinks :links="demoLinks" width="1080px" />

    <!--Feature block A demo-->
    <FeatureBlockADoc />

    <!--Feature block B demo-->
    <FeatureBlockBDoc />

    <!--Feature block C demo-->
    <FeatureBlockCDoc />

    <!--Feature block D demo-->
    <FeatureBlockDDoc />

    <!--Feature block E demo-->
    <FeatureBlockEDoc />

    <!--Feature block F demo-->
    <FeatureBlockFDoc />

    <!--Feature block G demo-->
    <FeatureBlockGDoc />

    <!--Feature block H demo-->
    <FeatureBlockHDoc />

    <!--Feature block I demo-->
    <FeatureBlockIDoc />

    <!--Feature block J demo-->
    <FeatureBlockJDoc />

    <!--Feature block K demo-->
    <FeatureBlockKDoc />

    <!--Feature block L demo-->
    <FeatureBlockLDoc />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
