<script setup lang="ts">
import { HelpCenterCategory } from '/@src/types'

export interface HelpCenterCategoriesProps {
  categories: HelpCenterCategory[]
}

const props = defineProps<HelpCenterCategoriesProps>()
</script>

<template>
  <div class="py-6">
    <div class="help-center-categories">
      <div class="columns is-multiline">
        <div
          v-for="(category, index) in props.categories"
          :key="index"
          class="column is-6"
        >
          <HelpCenterCategoryCard :category="category" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.help-center-categories {
  position: relative;
}
</style>
