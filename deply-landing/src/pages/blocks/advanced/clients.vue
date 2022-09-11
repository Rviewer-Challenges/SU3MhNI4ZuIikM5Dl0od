<script setup lang="ts">
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'
import AdvancedClientsBlockADoc from '/@src/documentation/advanced/clients/AdvancedClientsBlockADoc.vue'
import AdvancedClientsBlockBDoc from '/@src/documentation/advanced/clients/AdvancedClientsBlockBDoc.vue'
import AdvancedClientsBlockCDoc from '/@src/documentation/advanced/clients/AdvancedClientsBlockCDoc.vue'

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
]
</script>

<template>
  <div>
    <HeroSub
      title="Advanced Clients"
      subtitle="Discover Vulk's advanced blocks and learn how you can customize them to build incredible and memorable projects."
    />

    <DemoLinks :links="demoLinks" width="360px" />

    <!--Clients block A demo-->
    <AdvancedClientsBlockADoc />

    <!--Clients block B demo-->
    <AdvancedClientsBlockBDoc />

    <!--Clients block C demo-->
    <AdvancedClientsBlockCDoc />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
