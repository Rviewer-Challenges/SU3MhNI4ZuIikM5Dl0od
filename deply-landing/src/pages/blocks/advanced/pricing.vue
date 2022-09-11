<script setup lang="ts">
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'
import AdvancedPricingBlockADoc from '/@src/documentation/advanced/pricing/AdvancedPricingBlockADoc.vue'
import AdvancedPricingBlockBDoc from '/@src/documentation/advanced/pricing/AdvancedPricingBlockBDoc.vue'
import AdvancedPricingBlockCDoc from '/@src/documentation/advanced/pricing/AdvancedPricingBlockCDoc.vue'
import AdvancedPricingBlockDDoc from '/@src/documentation/advanced/pricing/AdvancedPricingBlockDDoc.vue'
import AdvancedPricingBlockEDoc from '/@src/documentation/advanced/pricing/AdvancedPricingBlockEDoc.vue'
import AdvancedPricingBlockFDoc from '/@src/documentation/advanced/pricing/AdvancedPricingBlockFDoc.vue'
import AdvancedPricingBlockGDoc from '/@src/documentation/advanced/pricing/AdvancedPricingBlockGDoc.vue'
import AdvancedPricingBlockHDoc from '/@src/documentation/advanced/pricing/AdvancedPricingBlockHDoc.vue'

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
      title="Advanced Pricing"
      subtitle="Discover Vulk's advanced blocks and learn how you can customize them to build incredible and memorable projects."
    />

    <DemoLinks :links="demoLinks" width="780px" />

    <!--Pricing block A demo-->
    <AdvancedPricingBlockADoc />

    <!--Pricing block B demo-->
    <AdvancedPricingBlockBDoc />

    <!--Pricing block C demo-->
    <AdvancedPricingBlockCDoc />

    <!--Pricing block D demo-->
    <AdvancedPricingBlockDDoc />

    <!--Pricing block E demo-->
    <AdvancedPricingBlockEDoc />

    <!--Pricing block F demo-->
    <AdvancedPricingBlockFDoc />

    <!--Pricing block G demo-->
    <AdvancedPricingBlockGDoc />

    <!--Pricing block H demo-->
    <AdvancedPricingBlockHDoc />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
