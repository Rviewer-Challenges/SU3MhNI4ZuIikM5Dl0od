<script setup lang="ts">
import { computed } from 'vue'

export interface IconProps {
  icon: string
  size?: number
  color?: string
}

const props = withDefaults(defineProps<IconProps>(), {
  size: undefined,
  color: undefined,
})

const isIconify = computed(() => {
  return props.icon && props.icon.indexOf(':') !== -1
})

const iconClasses = computed(() => [
  props.size && `rem-${props.size}`,
  props.color && `text-${props.color}`,
])
</script>

<template>
  <span :key="props.icon">
    <i
      v-if="isIconify"
      aria-hidden="true"
      class="iconify"
      :class="iconClasses"
      :data-icon="props.icon"
    ></i>
    <i v-else aria-hidden="true" :class="props.icon"></i>
  </span>
</template>

<style lang="scss" scoped>
.iconify {
  vertical-align: middle;
}
</style>
