<script setup lang="ts">
import { computed } from 'vue'
import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'

export interface PostListItemAuthor {
  photo: string
  name: string
  role: string
}

export interface PostListItem {
  id: number
  author: PostListItemAuthor
  category: string
  title: string
  abstract: string
  image: string
  views: string
  content: string
  date: string
  duration: number
  related?: PostListItem[]
}

export interface PostListItemProps {
  post: PostListItem
  upsideDown?: boolean
}

const props = withDefaults(defineProps<PostListItemProps>(), {
  upsideDown: false,
})

const blockClasses = computed(() => [props.upsideDown ? 'is-upside-down' : ''])
</script>

<template>
  <div class="post-list-item" :class="blockClasses">
    <div v-if="!props.upsideDown" class="featured-post-image">
      <img
        :src="props.post.image"
        alt="Featured image"
        width="360"
        height="200"
        @error.once="(event) => viaPlaceholderErrorHandler(event, `360x200`)"
      />
      <div class="post-date">
        <div class="post-date-inner">
          <span>{{ props.post.date }}</span>
        </div>
      </div>
    </div>

    <div class="featured-post-body">
      <div class="featured-post-title">
        <div class="title-avatar">
          <AvatarSimple :picture="props.post.author.photo" size="medium" />
        </div>
        <div class="title-meta">
          <Title tag="h3" :size="5" weight="semi" narrow>
            <span>{{ props.post.title }}</span>
          </Title>
          <h4 class="post-subtitle">
            <span>
              by
              <a class="author-name" href="#">{{ props.post.author.name }}</a>
            </span>
            <span class="px-2">·</span>
            <span>
              Posted in
              <a href="#">{{ props.post.category }}</a>
            </span>
          </h4>
        </div>
      </div>
      <p>
        {{ props.post.abstract }}
      </p>

      <div class="post-action">
        <RouterLink to="/blog" class="read-more-link">
          Read More
          <span>&#10230;</span>
        </RouterLink>
        <div class="post-stats is-flex is-align-items-center">
          <div class="is-flex is-align-items-center">
            <i class="iconify" data-icon="feather:eye"></i>
            <span class="ml-1">{{ props.post.views }}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-if="props.upsideDown" class="featured-post-image">
      <img
        :src="props.post.image"
        alt="Featured image"
        width="758"
        height="421"
        @error.once="(event) => viaPlaceholderErrorHandler(event, `758x421`)"
      />
      <div class="post-date">
        <div class="post-date-inner">
          <span>{{ props.post.date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.post-list-item {
  border-radius: 1rem;
  background: var(--card-bg-color);
  border: 1px solid var(--card-border-color);
  box-shadow: none;
  width: 100%;
  max-width: 760px;
  margin: 0 auto 50px;
  overflow: hidden;

  &:last-child {
    margin-bottom: 0;
  }

  .featured-post-image {
    position: relative;

    img {
      display: block;
      width: 100%;
    }

    .post-date {
      position: absolute;
      bottom: -18px;
      right: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 38px;
      padding: 0 0.75rem;
      width: auto;
      background: var(--wrap-bg-color);
      border: 1px solid var(--wrap-border-color);
      border-radius: 10px;
      box-shadow: var(--light-box-shadow);
      text-align: center;

      .post-date-inner {
        line-height: 1;
        text-align: center;

        span {
          font-family: var(--font);
          display: block;

          &:first-child {
            font-size: 0.8rem;
            letter-spacing: 2px;
            color: var(--title-color);
          }

          &:nth-child(2) {
            font-weight: 700;
            font-size: 1.8rem;
            color: var(--primary);
          }
        }
      }
    }
  }

  .featured-post-body {
    padding: 2rem;

    .featured-post-title {
      display: flex;
      margin-bottom: 1rem;

      .title-meta {
        margin-left: 0.75rem;

        .post-subtitle {
          font-family: var(--font);
          font-size: 0.9rem;
          color: var(--medium-text);

          a {
            color: var(--primary);
          }
        }
      }
    }

    p {
      font-family: var(--font);
      color: var(--medium-text);
      margin-bottom: 1.5rem;
    }

    .post-action {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .post-stats {
      font-family: var(--font);
      color: var(--light-text);
    }

    .read-more-link {
      font-family: var(--font);
      letter-spacing: 1px;
      color: var(--primary);
      font-size: 1rem;

      span {
        display: inline-block;
        position: relative;
        top: 2px;
        font-size: 1.6rem;
        margin-left: 4px;
        transition: transform 0.3s;
      }

      &:hover {
        span {
          transform: translateX(0.25rem);
        }
      }
    }
  }

  &.is-upside-down {
    .featured-post-image {
      .post-date {
        bottom: initial;
        top: -18px;
      }
    }
  }
}
</style>
