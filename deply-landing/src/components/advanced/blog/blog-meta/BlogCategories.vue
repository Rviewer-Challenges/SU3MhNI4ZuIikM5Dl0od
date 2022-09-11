<script setup lang="ts">
export interface BlogCategory {
  name: string
  slug: string
  postCount: number
}

export interface BlogCategoriesProps {
  categories: BlogCategory[]
}

const props = defineProps<BlogCategoriesProps>()
</script>

<template>
  <div class="blog-categories">
    <Title tag="h3" :size="5" weight="semi">
      <span>Categories</span>
    </Title>

    <div class="blog-categories-inner">
      <!--Category-->
      <RouterLink
        v-for="(category, index) in props.categories"
        :key="index"
        to="/blog"
        class="blog-category"
      >
        <span>{{ category.name }}</span>
        <div class="post-count">
          <span>{{ category.postCount }}</span>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.blog-categories {
  margin-bottom: 3rem;

  .blog-category {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.25rem;

    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      > span {
        color: var(--primary);
      }

      .post-count {
        border-color: var(--primary);

        span {
          color: var(--primary);
        }
      }
    }

    > span {
      font-family: var(--font);
      font-size: 0.9rem;
      color: var(--medium-text);
      line-height: 1.2;
      transition: color 0.3s;
    }

    .post-count {
      height: 30px;
      width: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      border: 1px solid transparent;
      transition: all 0.3s;

      span {
        font-family: var(--font);
        font-weight: 600;
        font-size: 0.7rem;
        color: var(--title-color);
        transition: color 0.3s;
      }
    }
  }
}
</style>
