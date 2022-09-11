<script setup lang="ts">
export interface BlogTag {
  name: string
  slug: string
}

export interface BlogTagsProps {
  tags: BlogTag[]
}

const props = defineProps<BlogTagsProps>()
</script>

<template>
  <div class="blog-tags">
    <Title tag="h3" :size="5" weight="semi">
      <span>Tags</span>
    </Title>

    <div class="tags">
      <RouterLink
        v-for="(tag, index) in props.tags"
        :key="index"
        to="/blog"
        class="tag is-medium"
      >
        {{ tag.name }}
      </RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.blog-tags {
  margin-bottom: 3rem;

  .tags {
    :deep(.tag) {
      height: 3em;
      padding-left: 1em;
      padding-right: 1em;
      font-size: 0.9rem;
      font-family: var(--font);
      color: var(--title-color);
      background: var(--input-base-bg-color);
      border: 1px solid var(--input-base-border-color);
      border-radius: 0.85rem;
      text-decoration: none !important;
      transition: color 0.3s, border-color 0.3s, box-shadow 0.3s;

      &:hover {
        color: var(--primary);
        border-color: var(--primary);
        box-shadow: var(--light-box-shadow);
      }
    }
  }
}
</style>
