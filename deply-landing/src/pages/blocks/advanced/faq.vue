<script setup lang="ts">
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'
import AdvancedFaqBlockA from '/@src/documentation/advanced/faq/AdvancedFaqBlockA.vue'
import AdvancedFaqBlockB from '/@src/documentation/advanced/faq/AdvancedFaqBlockB.vue'
import AdvancedFaqBlockC from '/@src/documentation/advanced/faq/AdvancedFaqBlockC.vue'
import AdvancedFaqBlockD from '/@src/documentation/advanced/faq/AdvancedFaqBlockD.vue'

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
      title="Advanced FAQ"
      subtitle="Discover Vulk's advanced blocks and learn how you can customize them to build incredible and memorable projects."
    />

    <DemoLinks :links="demoLinks" width="420px" />

    <!--FAQ block A demo-->
    <AdvancedFaqBlockA />

    <!--FAQ block B demo-->
    <AdvancedFaqBlockB />

    <!--FAQ block C demo-->
    <AdvancedFaqBlockC />

    <!--FAQ block D demo-->
    <AdvancedFaqBlockD />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
