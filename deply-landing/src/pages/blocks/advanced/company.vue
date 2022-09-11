<script setup lang="ts">
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'
import AdvancedCompanyBlockADoc from '/@src/documentation/advanced/company/AdvancedCompanyBlockADoc.vue'
import AdvancedCompanyBlockBDoc from '/@src/documentation/advanced/company/AdvancedCompanyBlockBDoc.vue'
import AdvancedCompanyBlockDDoc from '/@src/documentation/advanced/company/AdvancedCompanyBlockDDoc.vue'
import AdvancedCompanyBlockCDoc from '/@src/documentation/advanced/company/AdvancedCompanyBlockCDoc.vue'

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
      title="Advanced Company"
      subtitle="Discover Vulk's advanced blocks and learn how you can customize them to build incredible and memorable projects."
    />

    <DemoLinks :links="demoLinks" width="400px" />

    <!--Company block A demo-->
    <AdvancedCompanyBlockADoc />

    <!--Company block B demo-->
    <AdvancedCompanyBlockBDoc />

    <!--Company block C demo-->
    <AdvancedCompanyBlockCDoc />

    <!--Company block D demo-->
    <AdvancedCompanyBlockDDoc />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
