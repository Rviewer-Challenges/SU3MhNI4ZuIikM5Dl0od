<script setup lang="ts">
export interface IconFeature {
  icon: string
  title: string
  content: string
}

export interface IconFeaturesProps {
  features?: IconFeature[]
  centered?: boolean
  inverted?: boolean
}

const props = withDefaults(defineProps<IconFeaturesProps>(), {
  features: () => [],
  centered: false,
  inverted: false,
})
</script>

<template>
  <div class="py-6 mx-auto max-w-10">
    <div
      class="columns is-multiline b-columns-third-tablet-p"
      :class="props.centered && 'is-centered'"
    >
      <div
        v-for="(feature, index) in props.features"
        :key="index"
        class="column is-4"
      >
        <div class="py-4">
          <img
            class="product-icon"
            :src="feature.icon"
            alt="Icon feature"
            width="150"
            height="150"
          />
          <Title tag="h3" :size="5" leading :inverted="props.inverted">
            <span>{{ feature.title }}</span>
          </Title>
          <p class="paragraph rem-90">{{ feature.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-icon {
  display: block;
  max-width: 65px;
  margin-bottom: 0.75rem;
}

.is-centered {
  text-align: center;

  .product-icon {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
