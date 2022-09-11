<script setup lang="ts">
import { computed } from 'vue'

import { PostItem } from '../blog-grid-item/BlogGridItem.vue'

export interface PostGridProps {
  posts: PostItem[]
  upsideDown?: boolean
  limit?: number
  sideGrid?: boolean
}

const props = withDefaults(defineProps<PostGridProps>(), {
  posts: () => [],
  upsideDown: false,
  limit: 20,
  sideGrid: false,
})

const columnClasses = computed(() => [props.sideGrid ? 'is-6' : 'is-4'])
</script>

<template>
  <div class="blog-grid">
    <div class="columns b-columns-half-tablet-p is-multiline">
      <div
        v-for="(post, index) in props.posts.slice(0, props.limit)"
        :key="index"
        class="column"
        :class="columnClasses"
      >
        <BlogGridItem :post="post" :upside-down="props.upsideDown" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blog-grid {
  position: relative;
}
</style>
