<script setup lang="ts">
import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'

export interface PostGridItemAuthor {
  photo: string
  name: string
  role: string
}

export interface PostItem {
  id: number
  author: PostGridItemAuthor
  category: string
  title: string
  abstract: string
  image: string
  views: string
  content: string
  date: string
  duration: number
  related?: PostItem[]
}

export interface PostItemProps {
  post: PostItem
  upsideDown?: boolean
}

const props = withDefaults(defineProps<PostItemProps>(), {
  upsideDown: false,
})
</script>

<template>
  <div class="card">
    <div v-if="props.upsideDown" class="card-image">
      <img
        class="block"
        :src="props.post.image"
        alt="Post image"
        width="360"
        height="200"
        @error.once="(event) => viaPlaceholderErrorHandler(event, `360x200`)"
      />
    </div>
    <div class="card-content">
      <div class="media is-align-items-center">
        <div class="media-left">
          <AvatarSimple :picture="props.post.author.photo" />
        </div>
        <div class="media-content">
          <Subtitle
            tag="p"
            :size="6"
            weight="semi"
            uppercase
            class="rem-75 weight-5 text-primary"
          >
            <span>{{ props.post.category }}</span>
          </Subtitle>
          <Title tag="h3" :size="6" weight="semi">
            <span>{{ props.post.title }}</span>
          </Title>
        </div>
      </div>

      <div class="content">
        <p class="paragraph">{{ props.post.abstract }}</p>
      </div>
      <div
        class="is-flex is-align-items-center is-justify-content-space-between"
      >
        <div>
          <RouterLink to="/blog/post" class="is-flex is-align-items-center">
            <span class="mr-2">Read More</span>
            <i class="iconify" data-icon="feather:arrow-right"></i>
          </RouterLink>
        </div>
        <div class="card-stats is-flex is-align-items-center">
          <div class="is-flex is-align-items-center">
            <i class="iconify" data-icon="feather:eye"></i>
            <span class="ml-1">{{ props.post.views }}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!props.upsideDown" class="card-image">
      <img
        class="block"
        :src="props.post.image"
        alt="Post image"
        width="360"
        height="200"
        @error.once="(event) => viaPlaceholderErrorHandler(event, `360x200`)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  box-shadow: none;
  background: var(--blog-grid-item-bg-color);
  border-radius: 0.75rem;
  border: 1px solid var(--blog-grid-item-border-color);
  overflow: hidden;
  transition: box-shadow 0.3s;

  .card-image {
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .media {
    .media-content {
      overflow-x: visible;
    }
  }

  a {
    font-family: var(--font);
    font-size: 0.95rem;

    .iconify {
      transition: transform 0.3s;
    }

    &:hover {
      color: var(--primary);
      opacity: 0.7;

      .iconify {
        transform: translateX(5px);
      }
    }
  }

  .card-stats {
    font-family: var(--font);
    color: var(--light-text);
  }

  .card-footer {
    .card-footer-item {
      color: var(--medium-text);
      transition: all 0.3s;

      &:hover {
        color: var(--primary);
        background: var(--widget-grey);
      }
    }
  }

  &:hover {
    box-shadow: var(--light-box-shadow);
  }
}
</style>
