<script setup lang="ts">
import CardShape from '/@src/documentation/base/card/CardShape.vue'
import CardPadding from '/@src/documentation/base/card/CardPadding.vue'
import CardShadow from '/@src/documentation/base/card/CardShadow.vue'
import CardAnimated from '/@src/documentation/base/card/CardAnimated.vue'
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'

const demoLinks = [
  {
    label: 'Shape',
    target: 'card-shapes-demo',
  },
  {
    label: 'Padding',
    target: 'card-padding-demo',
  },
  {
    label: 'Shadow',
    target: 'card-shadow-demo',
  },
  {
    label: 'Animated',
    target: 'card-animated-demo',
  },
]
</script>

<template>
  <div>
    <HeroSub
      title="Card Component"
      subtitle="Cards are an essential part of all web and mobile application with a wide variety of usage. Explore Vulk cards."
    />

    <DemoLinks :links="demoLinks" width="400px" />

    <!--Card shape demo-->
    <CardShape />

    <!--Card padding demo-->
    <CardPadding />

    <!--Card shadows demo-->
    <CardShadow />

    <!--Card animation demo-->
    <CardAnimated />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
