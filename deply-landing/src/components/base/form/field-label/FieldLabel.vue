<script setup lang="ts">
export interface FieldLabelProps {
  label: string
}

const props = defineProps<FieldLabelProps>()
</script>

<template>
  <span class="field-label">
    <slot>{{ props.label }}</slot>
  </span>
</template>

<style lang="scss" scoped>
.field-label {
  font-family: var(--font);
  font-size: 0.9rem;
  color: var(--medium-text);
}
</style>
