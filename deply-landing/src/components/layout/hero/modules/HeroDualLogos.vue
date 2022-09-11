<script setup lang="ts">
export interface DualLogoProps {
  left: string
  right: string
}

const props = withDefaults(defineProps<DualLogoProps>(), {
  left: undefined,
  right: undefined,
})
</script>

<template>
  <div class="dual-logos">
    <img
      class="is-relative mx-auto py-4 z-1"
      :src="props.left"
      alt="logo"
      width="300"
      height="106"
    />
    <img
      class="is-relative mx-auto py-4 z-1"
      :src="props.right"
      alt="logo"
      width="300"
      height="106"
    />
  </div>
</template>

<style lang="scss" scoped>
.dual-logos {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  margin: 0 auto;

  img {
    display: block;
    max-width: 110px;
  }
}

.is-dark {
  .dual-logos {
    img {
      filter: invert(1);
    }
  }
}
</style>
