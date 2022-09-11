<script setup lang="ts">
import { PostItem } from '../blog-grid-item/BlogGridItem.vue'

export interface RecentPostsProps {
  posts: PostItem[]
  upsideDown?: boolean
  limit?: number
  sideGrid?: boolean
}

const props = withDefaults(defineProps<RecentPostsProps>(), {
  posts: () => [],
  limit: 4,
})
</script>

<template>
  <div class="blog-recent-posts">
    <Title tag="h3" :size="5" weight="semi">
      <span>Recent Posts</span>
    </Title>

    <div class="blog-recent-posts-inner">
      <RouterLink
        v-for="(post, index) in props.posts.slice(0, props.limit)"
        :key="index"
        to="/blog/post"
        class="blog-recent-post"
      >
        <div class="post-image">
          <img :src="post.image" alt="Post thumbnail" />
        </div>
        <div class="post-content">
          <Title tag="h3" :size="7" weight="semi" leading>
            <span>{{ post.title }}</span>
          </Title>
          <div class="meta">
            <AvatarSimple :picture="post.author.photo" size="small" />
            <span>{{ post.author.name }}</span>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.blog-recent-posts {
  margin-bottom: 3rem;

  .blog-recent-post {
    display: flex;
    align-items: center;
    margin-bottom: 1.75rem;

    &:last-child {
      margin-bottom: 0;
    }

    .post-image {
      position: relative;

      img {
        display: block;
        width: 80px;
        min-width: 80px;
        height: 80px;
        min-height: 80px;
        object-fit: cover;
        border-radius: 0.85rem;
        box-shadow: var(--spread-shadow);
      }
    }

    .post-content {
      flex-grow: 2;
      margin-left: 0.75rem;

      h3 {
        font-family: var(--font);
        font-size: 1.1rem;
        font-weight: 500;
        color: var(--title-color);
        margin-bottom: 6px;
        line-height: 1.2;
      }

      .meta {
        display: flex;
        align-items: center;

        img {
          display: block;
          height: 24px;
          width: 24px;
          min-width: 24px;
          border-radius: 50%;
        }

        span {
          color: var(--light-text);
          font-family: var(--font);
          font-size: 0.9rem;
          margin-left: 8px;
        }
      }
    }
  }
}
</style>
