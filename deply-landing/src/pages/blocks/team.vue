<script setup lang="ts">
import TeamBlockADoc from '/@src/documentation/blocks/team/TeamBlockADoc.vue'
import TeamBlockBDoc from '/@src/documentation/blocks/team/TeamBlockBDoc.vue'
import TeamBlockCDoc from '/@src/documentation/blocks/team/TeamBlockCDoc.vue'
import TeamBlockDDoc from '/@src/documentation/blocks/team/TeamBlockDDoc.vue'
import TeamBlockEDoc from '/@src/documentation/blocks/team/TeamBlockEDoc.vue'
import TeamBlockFDoc from '/@src/documentation/blocks/team/TeamBlockFDoc.vue'
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
]
</script>

<template>
  <div>
    <HeroSub
      title="Team Blocks"
      subtitle="More than 6 customizable Team blocks are awaiting for you to build your own layouts, pages, and content."
    />

    <DemoLinks :links="demoLinks" width="600px" />

    <!--Block A demo-->
    <TeamBlockADoc />

    <!--Block B demo-->
    <TeamBlockBDoc />

    <!--Block C demo-->
    <TeamBlockCDoc />

    <!--Block D demo-->
    <TeamBlockDDoc />

    <!--Block E demo-->
    <TeamBlockEDoc />

    <!--Block F demo-->
    <TeamBlockFDoc />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
