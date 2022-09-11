<script setup lang="ts">
export interface TagsProps {
  addons?: boolean
}

const props = defineProps<TagsProps>()
</script>

<template>
  <div class="tags" :class="[props.addons && 'has-addons']">
    <slot></slot>
  </div>
</template>
