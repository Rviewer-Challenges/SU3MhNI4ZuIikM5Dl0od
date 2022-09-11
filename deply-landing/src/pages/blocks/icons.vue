<script setup lang="ts">
import IconBoxSize from '/@src/documentation/base/icon/IconBoxSize.vue'
import IconBoxRounded from '/@src/documentation/base/icon/IconBoxRounded.vue'
import IconBoxColors from '/@src/documentation/base/icon/IconBoxColors.vue'
import IconBoxBorder from '/@src/documentation/base/icon/IconBoxBorder.vue'
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'

const demoLinks = [
  {
    label: 'Size',
    target: 'iconbox-size-demo',
  },
  {
    label: 'Rounded',
    target: 'iconbox-rounded-demo',
  },
  {
    label: 'Colors',
    target: 'iconbox-colors-demo',
  },
  {
    label: 'Border',
    target: 'iconbox-border-demo',
  },
]
</script>

<template>
  <div>
    <HeroSub
      title="Icon Components"
      subtitle="Icons play a central part of every web and mobile application. They help users understanding your features in a glimpse. Explore Vulk icons."
    />

    <DemoLinks :links="demoLinks" width="360px" />

    <!--Iconbox sizes demo-->
    <IconBoxSize />

    <!--Iconbox rounded demo-->
    <IconBoxRounded />

    <!--Iconbox colors demo-->
    <IconBoxColors />

    <!--Iconbox border demo-->
    <IconBoxBorder />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
