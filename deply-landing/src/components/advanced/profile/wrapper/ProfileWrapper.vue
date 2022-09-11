<script setup lang="ts">
export interface ProfileWrapperProps {
  large?: boolean
}

const props = defineProps<ProfileWrapperProps>()
</script>

<template>
  <div class="profile-wrapper" :class="props.large && 'is-larger'">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.profile-wrapper {
  width: 100%;
  max-width: 780px;
  margin: 0 auto;
  padding-bottom: 6rem;

  &.is-larger {
    max-width: 890px;
  }
}
</style>