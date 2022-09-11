<script setup lang="ts">
export interface CompanyValue {
  title: string
  content: string
  image: string
  darkImage: string
}

export interface CompanyValueProps {
  values?: CompanyValue[]
  inverted?: boolean
  imageHeight?: string
}

const props = withDefaults(defineProps<CompanyValueProps>(), {
  values: () => [],
  inverted: false,
  imageHeight: '240px',
})
</script>

<template>
  <div class="company-values mx-auto max-w-10">
    <div class="columns b-columns-third-tablet-p">
      <div
        v-for="(value, index) in props.values"
        :key="index"
        class="column is-4"
      >
        <div class="company-value has-text-centered">
          <DarkImage
            class="mx-auto light-image-block"
            :src="value.image"
            :src-dark="value.darkImage"
            alt="Illustration"
          />
          <Title tag="h3" :size="5" leading :inverted="props.inverted">
            {{ value.title }}
          </Title>
          <p class="pb-4 mx-auto max-w-3">{{ value.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.company-values {
  position: relative;

  .company-value {
    img {
      display: block;
      max-height: v-bind('props.imageHeight');
      margin-bottom: 0.75rem;
    }

    h3 {
      font-family: var(--font-alt);
      font-weight: 600;
      color: var(--dark-text);
    }

    p {
      font-family: var(--font);
      font-size: 0.95rem;
      color: var(--light-text);
    }
  }
}
</style>
