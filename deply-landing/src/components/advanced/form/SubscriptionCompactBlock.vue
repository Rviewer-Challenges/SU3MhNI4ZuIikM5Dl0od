<script setup lang="ts">
export interface CompactSubscriptionBlockProps {
  text: string
  label: string
  placeholder: string
}

const props = defineProps<CompactSubscriptionBlockProps>()
</script>

<template>
  <div class="mx-auto max-w-6 mt-2">
    <p class="paragraph has-text-centered">{{ props.text }}</p>
  </div>
  <div class="py-5 has-text-centered rem-200 text-light">
    <i class="iconify" data-icon="ph:arrow-down-bold"></i>
  </div>
  <div class="mx-auto max-w-4">
    <SubscriptionCompact
      :label="props.label"
      :placeholder="props.placeholder"
    />
  </div>
</template>
