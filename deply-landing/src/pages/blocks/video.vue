<script setup lang="ts">
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'
import VideoBlockADoc from '/@src/documentation/blocks/video/VideoBlockADoc.vue'
import VideoBlockBDoc from '/@src/documentation/blocks/video/VideoBlockBDoc.vue'
import VideoBlockCDoc from '/@src/documentation/blocks/video/VideoBlockCDoc.vue'

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
      title="Video Blocks"
      subtitle="Vulk ships with 3 ready to use video section block variations. You can of course easily create your own from the existing ones."
    />
    <DemoLinks :links="demoLinks" width="320px" />

    <!--Video block A docs-->
    <VideoBlockADoc />

    <!--Video block B docs-->
    <VideoBlockBDoc />

    <!--Video block C docs-->
    <VideoBlockCDoc />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
