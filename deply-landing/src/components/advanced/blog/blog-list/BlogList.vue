<script setup lang="ts">
import { computed } from 'vue'

import { PostListItem } from '../blog-list-item/BlogListItem.vue'

export interface PostListProps {
  posts: PostListItem[]
  upsideDown?: boolean
  limit?: number
  singleList?: boolean
  sideList?: boolean
}

const props = withDefaults(defineProps<PostListProps>(), {
  posts: () => [],
  upsideDown: false,
  limit: 20,
  singleList: false,
  sideList: false,
})

const blockClasses = computed(() => [
  props.singleList && !props.sideList && 'max-w-7',
])

const columnClasses = computed(() => [props.singleList ? 'is-12' : 'is-6'])
</script>

<template>
  <div class="blog-grid mx-auto" :class="blockClasses">
    <div class="columns b-columns-half-tablet-p is-multiline">
      <div
        v-for="(post, index) in props.posts.slice(0, props.limit)"
        :key="index"
        class="column"
        :class="columnClasses"
      >
        <BlogListItem :post="post" :upside-down="props.upsideDown" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blog-list {
  position: relative;
}
</style>
