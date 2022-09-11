<script setup lang="ts">
import AvatarSimpleSizes from '/@src/documentation/base/avatar/AvatarSimpleSizes.vue'
import AvatarSimpleShapes from '/@src/documentation/base/avatar/AvatarSimpleShapes.vue'
import AvatarSimpleBadge from '/@src/documentation/base/avatar/AvatarSimpleBadge.vue'
import AvatarGroupBlock from '/@src/documentation/base/avatar/AvatarGroupBlock.vue'
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'

const demoLinks = [
  {
    label: 'Sizes',
    target: 'avatar-size-demo',
  },
  {
    label: 'Square',
    target: 'avatar-square-demo',
  },
  {
    label: 'Badge',
    target: 'avatar-badge-demo',
  },
  {
    label: 'Group',
    target: 'avatar-group-demo',
  },
]
</script>

<template>
  <div>
    <HeroSub
      title="Avatar Component"
      subtitle="Avatars have become a central component in almost all web and mobile application. Explore Vulk avatars."
    />

    <DemoLinks :links="demoLinks" width="340px" />

    <!--Avatar sizes demo-->
    <AvatarSimpleSizes />

    <!--Avatar squared demo-->
    <AvatarSimpleShapes />

    <!--Avatar badge-->
    <AvatarSimpleBadge />

    <!--Avatar groups-->
    <AvatarGroupBlock />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
