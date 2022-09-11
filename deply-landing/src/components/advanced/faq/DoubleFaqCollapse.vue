<script setup lang="ts">
export interface DoubleFaqCollapseItem {
  title: string
  content: string
}

export interface DoubleFaqCollapseProps {
  left: DoubleFaqCollapseItem[]
  right: DoubleFaqCollapseItem[]
  chevrons: boolean
}

const props = withDefaults(defineProps<DoubleFaqCollapseProps>(), {
  left: () => [],
  right: () => [],
  chevrons: false,
})
</script>

<template>
  <div class="py-6">
    <div class="columns">
      <div class="column is-5 is-offset-1">
        <Collapse :items="props.left" :with-chevron="props.chevrons" />
      </div>

      <div class="column is-5">
        <Collapse :items="props.right" :with-chevron="props.chevrons" />
      </div>
    </div>
  </div>
</template>
