<script setup lang="ts">
import CounterBase from '/@src/documentation/base/counter/CounterBase.vue'
import CounterBoxed from '/@src/documentation/base/counter/CounterBoxed.vue'
import CounterBold from '/@src/documentation/base/counter/CounterBold.vue'
import CounterContent from '/@src/documentation/base/counter/CounterContent.vue'
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'

const demoLinks = [
  {
    label: 'Counter',
    target: 'counter-base-demo',
  },
  {
    label: 'Bold',
    target: 'counter-bold-demo',
  },
  {
    label: 'Boxed',
    target: 'counter-boxed-demo',
  },
  {
    label: 'Content',
    target: 'counter-content-demo',
  },
]
</script>

<template>
  <div>
    <HeroSub
      title="Counter Component"
      subtitle="Counters are very useful when displaying stats or any numbers creating a positive effect over the target. Explore Vulk counters."
    />

    <DemoLinks :links="demoLinks" width="400px" />

    <!--Counter base demo-->
    <CounterBase />

    <!--Counter bold demo-->
    <CounterBold />

    <!--Counter boxed demo-->
    <CounterBoxed />

    <!--Counter content demo-->
    <CounterContent />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
