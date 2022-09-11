<script setup lang="ts">
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'
import DarkImageBase from '/@src/documentation/base/image/DarkImageBase.vue'
import ImageRatioBase from '/@src/documentation/base/image/ImageRatioBase.vue'
import ImageRatioRounded from '/@src/documentation/base/image/ImageRatioRounded.vue'
import ImageRatioSquare from '/@src/documentation/base/image/ImageRatioSquare.vue'

const demoLinks = [
  {
    label: 'Dark',
    target: 'image-dark-demo',
  },
  {
    label: 'Ratio',
    target: 'image-ratio-demo',
  },
  {
    label: 'Rounded',
    target: 'image-rounded-demo',
  },
  {
    label: 'Square',
    target: 'image-square-demo',
  },
]
</script>

<template>
  <div>
    <HeroSub
      title="Image Components"
      subtitle="Images are very important in today's websites. They help carry your message to your users, without writing anything. Explore Vulk images."
    />

    <DemoLinks :links="demoLinks" width="360px" />

    <!--Dark image demo-->
    <DarkImageBase />

    <!--Image ratio demo-->
    <ImageRatioBase />

    <!--Image ratio rounded demo-->
    <ImageRatioRounded />

    <!--Image ratio square demo-->
    <ImageRatioSquare />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
