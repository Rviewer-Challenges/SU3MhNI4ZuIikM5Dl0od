<script setup lang="ts">
export interface NavbarSocialItemProps {
  icon: string
  label: string
  link: string
}

const props = defineProps<NavbarSocialItemProps>()
</script>

<template>
  <RouterLink :to="props.link" target="_blank" class="social-item px-2">
    <span class="icon">
      <i class="iconify" :data-icon="props.icon"></i>
      <span class="is-sr-only">{{ props.label }}</span>
    </span>
  </RouterLink>
</template>

<style scoped lang="scss">
.social-item {
  color: var(--medium-text);
  transition: color 0.3s;

  &:hover {
    color: var(--primary);
  }
}

.is-inverted {
  .social-item {
    color: var(--white-smoke);

    &:hover {
      color: var(--primary);
    }
  }
}
</style>
