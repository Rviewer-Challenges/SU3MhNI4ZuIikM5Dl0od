<script setup lang="ts">
export interface FaqBoxedCollapseItem {
  title: string
  content: string
}

export interface FaqBoxedCollapseProps {
  items: FaqBoxedCollapseItem[]
  chevrons?: boolean
}

const props = withDefaults(defineProps<FaqBoxedCollapseProps>(), {
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
  background: var(--card-bg-color);
  border: 1px solid var(--card-border-color);
  border-radius: 1rem;

  :deep(.collapse) {
    padding: 1rem;
    margin-bottom: 0;

    .collapse-content {
      padding-top: 0.75rem;
    }

    &:not(:first-child) {
      border-top: 1px solid var(--card-border-color);
    }
  }
}

@media (max-width: 767px) {
  :deep(.collapse) {
    .collapse-header {
      padding-left: 0.75rem;
      padding-right: 0.75rem;
    }
  }
}
</style>
