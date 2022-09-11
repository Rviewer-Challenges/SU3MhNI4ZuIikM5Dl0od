<script setup lang="ts">
import type { IconBoxColor } from '/@src/components/base/icon/IconBox.vue'

export interface FaqStaticItem {
  title: string
  content: string
  icon: string
  color: IconBoxColor
}

export interface FaqStaticProps {
  items: FaqStaticItem[]
}

const props = withDefaults(defineProps<FaqStaticProps>(), {
  items: () => [],
})
</script>

<template>
  <div class="py-6">
    <div class="mx-auto max-w-9">
      <div class="columns is-multiline b-columns-half-tablet-p">
        <div
          v-for="(item, index) in props.items"
          :key="index"
          class="column is-6"
        >
          <div class="faq-item">
            <IconBox :color="item.color" size="medium">
              <i class="iconify" :data-icon="item.icon"></i>
            </IconBox>
            <div class="item-content">
              <Title tag="h3" :size="6" weight="semi" leading>
                <span>{{ item.title }}</span>
              </Title>
              <p class="paragraph rem-90">{{ item.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.faq-item {
  display: flex;
  padding: 0.5rem;

  .item-content {
    margin-left: 1rem;
  }
}

@media only screen and (max-width: 767px) {
  .faq-item {
    flex-direction: column;

    :deep(.icon-box) {
      margin-bottom: 0.75rem;
    }

    .item-content {
      margin-left: 0;
    }
  }
}
</style>
