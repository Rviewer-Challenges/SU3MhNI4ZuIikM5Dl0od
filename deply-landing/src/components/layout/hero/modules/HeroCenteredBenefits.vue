<script setup lang="ts">
export interface HeroBenefitsProps {
  benefits: string[]
}

const props = defineProps<HeroBenefitsProps>()
</script>

<template>
  <div class="field is-grouped mx-auto max-w-5 -m-2 mb-5">
    <div
      v-for="(benefit, index) in props.benefits"
      :key="index"
      class="control"
    >
      <i class="iconify" data-icon="feather:check"></i>
      <span class="is-weight-500 pl-2 pr-4">{{ benefit }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.field {
  color: var(--hero-benefits-color);

  .control {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 1 0;
    font-family: var(--font);
  }

  span {
    font-size: 0.9rem;
  }
}

@media only screen and (max-width: 767px) {
  .field {
    flex-direction: column;

    .control {
      &:not(:last-child) {
        margin-bottom: 0.5rem;
      }
    }
  }
}
</style>
