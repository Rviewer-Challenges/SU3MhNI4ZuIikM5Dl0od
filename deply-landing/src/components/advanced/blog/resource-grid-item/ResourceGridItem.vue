<script setup lang="ts">
import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'

export interface ResourceCategory {
  name: string
}

export interface ResourceItem {
  id: number
  categories: ResourceCategory[]
  title: string
  image: string
  likes: string
  date: string
  duration: number
}

export interface ResourceItemProps {
  post: ResourceItem
  upsideDown?: boolean
}

const props = withDefaults(defineProps<ResourceItemProps>(), {
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
        <div class="media-content">
          <Tags>
            <Tag
              v-for="(category, c) in props.post.categories"
              :key="c"
              :label="category.name"
            />
          </Tags>
          <Title tag="h3" :size="6" weight="semi">
            <span>{{ props.post.title }}</span>
          </Title>
        </div>
      </div>

      <div
        class="is-flex is-align-items-center is-justify-content-space-between"
      >
        <div>
          <RouterLink
            :to="{ name: 'blog-post' }"
            class="is-flex is-align-items-center"
          >
            <span class="mr-2">Read More</span>
            <i class="iconify" data-icon="feather:arrow-right"></i>
          </RouterLink>
        </div>
        <div class="card-stats is-flex is-align-items-center">
          <div class="is-flex is-align-items-center">
            <i class="iconify" data-icon="feather:heart"></i>
            <span class="ml-1">{{ props.post.likes }}</span>
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

<style scoped lang="scss">
.card {
  box-shadow: var(--light-box-shadow);
  background: var(--blog-grid-item-bg-color);
  border-radius: 0.75rem;
  border: 1px solid var(--blog-grid-item-border-color);
  overflow: hidden;

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
}
</style>
