<script setup lang="ts">
import SimpleTableBase from '/@src/documentation/base/table/SimpleTableBase.vue'
import SimpleTableStriped from '/@src/documentation/base/table/SimpleTableStriped.vue'
import SimpleTableBordered from '/@src/documentation/base/table/SimpleTableBordered.vue'
import SimpleTableBoth from '/@src/documentation/base/table/SimpleTableBoth.vue'
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'

const demoLinks = [
  {
    label: 'Table',
    target: 'table-base-demo',
  },
  {
    label: 'Striped',
    target: 'table-striped-demo',
  },
  {
    label: 'Bordered',
    target: 'table-bordered-demo',
  },
  {
    label: 'Both',
    target: 'table-both-demo',
  },
]
</script>

<template>
  <div>
    <HeroSub
      title="Table Component"
      subtitle="Tables are a very common component that often remains as the most efficient way to display complex data. Explore Vulk tables."
    />

    <DemoLinks :links="demoLinks" width="360px" />

    <!--Simple table demo-->
    <SimpleTableBase />

    <!--Simple table striped demo-->
    <SimpleTableStriped />

    <!--Simple table bordered demo-->
    <SimpleTableBordered />

    <!--Simple table both demo-->
    <SimpleTableBoth />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
