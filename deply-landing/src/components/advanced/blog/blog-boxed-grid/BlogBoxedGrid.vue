<script setup lang="ts">
import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'

export interface PostItem {
  id: number
  slug: string
  category: string
  title: string
  abstract: string
  image: string
  content: string
  date: string
}

export interface BoxedGridProps {
  title: string
  subtitle: string
  punchline: string
  posts: PostItem[]
  limit?: number
  inverted?: boolean
}

const props = withDefaults(defineProps<BoxedGridProps>(), {
  posts: () => [],
  limit: 4,
  inverted: false,
})
</script>

<template>
  <div class="py-6">
    <div class="blog-boxed-grid" :class="props.inverted && 'is-inverted'">
      <div class="has-text-centered mb-6">
        <span class="top-tag">{{ props.punchline }}</span>
        <Title tag="h2" :size="2" weight="bold">
          <span>{{ props.title }}</span>
        </Title>
        <Subtitle tag="p" :size="6" weight="semi">
          <span>{{ props.subtitle }}</span>
        </Subtitle>
      </div>

      <div class="inner-grid">
        <div class="columns is-multiline">
          <div
            v-for="(post, index) in props.posts"
            :key="index"
            class="column is-6"
          >
            <RouterLink to="/" class="boxed-post">
              <div class="post-image">
                <img
                  :src="post.image"
                  alt="Featured image"
                  width="600"
                  height="337"
                  @error.once="
                    (event) => viaPlaceholderErrorHandler(event, `600x337`)
                  "
                />
              </div>
              <div class="post-body">
                <Title tag="h3" :size="6" weight="semi" leading>
                  <span>{{ post.title }}</span>
                </Title>
                <p class="paragraph">{{ post.abstract }}</p>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.blog-boxed-grid {
  position: relative;
  padding: 4rem;
  background: var(--wrap-muted-color);
  border-radius: 1.5rem;

  .top-tag {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background: var(--wrap-bg-color);
    margin-bottom: 1rem;
    font-family: var(--font);
    font-weight: 500;
    font-size: 0.9rem;
    color: var(--title-color);
    box-shadow: var(--spread-shadow);
    border-radius: 5rem;
  }

  .inner-grid {
    .boxed-post {
      display: block;
      background: var(--card-bg-color);
      border-radius: 1rem;
      overflow: hidden;
      box-shadow: var(--spread-shadow);

      .post-body {
        padding: 1.5rem;
      }
    }
  }

  &.is-inverted {
    background: var(--wrap-muted-color-inverted);
  }
}

@media only screen and (max-width: 767px) {
  .blog-boxed-grid {
    padding: 1.5rem;
  }
}
</style>
