<script setup lang="ts">
export interface FaqCollapseItem {
  title: string
  content: string
}

export interface FaqCollapseProps {
  items: FaqCollapseItem[]
  chevrons?: boolean
}

const props = withDefaults(defineProps<FaqCollapseProps>(), {
  items: () => [],
  chevrons: false,
})
</script>

<template>
  <div class="py-6">
    <div class="mx-auto max-w-7">
      <div class="columns">
        <div class="column">
          <div class="collapse-wrap">
            <Collapse :items="props.items" :with-chevron="props.chevrons" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.collapse-wrap {
  :deep(.collapse) {
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    border-radius: 1rem;
    padding: 1rem;

    .collapse-content {
      padding-top: 0.75rem;
    }
  }
}
</style>
