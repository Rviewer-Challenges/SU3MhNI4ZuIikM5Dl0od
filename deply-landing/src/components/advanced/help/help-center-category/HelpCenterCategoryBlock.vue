<script setup lang="ts">
import { HelpCenterCategory } from '/@src/types'

export interface HelpCenterCategoryBlockProps {
  category: HelpCenterCategory
}

const props = defineProps<HelpCenterCategoryBlockProps>()
</script>

<template>
  <div class="help-container">
    <div class="help-toolbar">
      <a
        class="back-link"
        @click.prevent="$router.back()"
        @keydown.space.prevent="() => $router.back()"
      >
        <i-ph-arrow-left-bold />
        <span>Back</span>
      </a>
    </div>
    <div class="help-container-bg">
      <div class="category-header">
        <div class="icon">
          <i
            class="iconify"
            :data-icon="props.category.icon"
            :class="
              props.category.iconColor && `text-${props.category.iconColor}`
            "
          ></i>
        </div>
        <div class="inner-content">
          <Title tag="h2" :size="3" weight="semi" leading>
            <span>{{ props.category.name }}</span>
          </Title>
          <div class="inner-text">
            {{ props.category.text }}
          </div>
          <div class="card-meta">
            <img
              v-for="(contributor, c) in props.category.contributors.slice(
                0,
                2
              )"
              :key="c"
              class="small-avatar"
              :src="contributor.picture"
              alt="Contributor picture"
            />
            <div class="meta-info">
              <div class="articles-number">
                {{ props.category.articles.length }} articles in this section
              </div>
              <div class="authors">
                Written by
                <span class="contributor-name">
                  {{ props.category.contributors[0].name }}
                </span>
                <span v-if="props.category.contributors.length > 1">
                  and {{ props.category.contributors.length - 1 }}
                  <span v-if="props.category.contributors.length - 2 < 1">
                    other
                  </span>
                  <span v-else>others</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="articles-list">
        <div
          v-for="(article, index) in props.category.articles"
          :key="index"
          class="help-article"
        >
          <RouterLink
            :to="{
              name: 'subpages-help-category-article-slug',
              params: { slug: article.slug },
            }"
          >
            <div class="inner-content">
              <Title tag="h3" :size="5" weight="semi" leading>
                <span>{{ article.title }}</span>
              </Title>
              <div class="inner-text">
                {{ article.abstract }}
              </div>
              <div class="card-meta">
                <img
                  class="small-avatar"
                  :src="article.author.picture"
                  alt="Article author"
                />
                <div class="meta-info">
                  <div class="author">
                    Written by
                    <span>{{ article.author.name }}</span>
                  </div>
                  <div class="status">Updated about {{ article.updated }}</div>
                </div>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.help-container {
  position: relative;
  max-width: 880px;
  margin: -2rem auto 3rem;

  .help-toolbar {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;

    .back-link {
      display: inline-flex;
      align-items: center;
      font-family: var(--font);
      color: var(--primary);

      svg {
        vertical-align: middle;
        margin-right: 0.5rem;
        stroke: var(--primary);
        transition: transform 0.3s;
      }

      &:hover {
        svg {
          transform: translateX(-0.25rem);
        }
      }
    }
  }

  .help-container-bg {
    width: 100%;
    background: var(--wrap-muted-color-inverted);
    padding: 3rem;
    border-radius: 1rem;
  }

  .category-header {
    display: flex;
    padding: 0 2rem 1rem;
    z-index: 2;

    .icon {
      width: 80px;
      min-width: 80px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;

      .iconify {
        font-size: 3rem;
        color: var(--light-text);
      }
    }

    .inner-content {
      padding-left: 1.25rem;

      .inner-text {
        font-family: var(--font);
        font-size: 0.95rem;
        color: var(--medium-text);
      }

      .card-meta {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-top: 12px;

        .small-avatar {
          height: 34px;
          width: 34px;
          border-radius: 50%;
          margin-right: 10px;
          border: 2px solid var(--card-bg-color);
          position: relative;

          &:not(:first-child) {
            margin-left: -19px;
          }

          &:first-child {
            z-index: 3;
          }

          &:nth-child(2) {
            z-index: 2;
          }

          &:nth-child(3) {
            z-index: 1;
          }

          &:nth-child(4) {
            z-index: 0;
          }

          &.is-more {
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--title-color);
            background: var(--wrap-muted-color);
            font-weight: 500;
            font-size: 13px;

            span {
              position: relative;
              top: -2px;
              left: -1px;
            }
          }
        }

        .meta-info {
          color: var(--medium-text);
          font-family: var(--font);

          .articles-number {
            font-size: 0.85rem;
          }

          .authors {
            color: var(--light-text);
            font-size: 0.85rem;

            .contributor-name {
              color: var(--primary);
            }
          }
        }
      }
    }
  }

  .articles-list {
    position: relative;
    margin: 2rem;
    background: var(--card-bg-color);
    width: calc(100% - 4rem);
    border-radius: 0.75rem;
    border: 1px solid var(--card-border-color);

    .help-article {
      padding: 30px;

      a {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .inner-content {
          .title {
            margin-bottom: 10px;
            font-weight: 400;
            color: var(--primary);
          }

          .inner-text {
            font-family: var(--font);
            font-size: 0.95rem;
            color: var(--medium-text);
          }

          .card-meta {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin-top: 12px;

            .small-avatar {
              height: 34px;
              width: 34px;
              border-radius: 50%;
              margin-right: 10px;
              border: 2px solid var(--wrap-bg-color);
              position: relative;
            }

            .meta-info {
              font-family: var(--font);
              color: var(--medium-text);
              line-height: 1.1rem;

              .author {
                color: var(--light-text);
                font-size: 0.85rem;

                span {
                  color: var(--primary);
                }
              }

              .status {
                font-size: 12px;
                color: var(--light-text);
              }
            }
          }
        }
      }

      &:not(:last-child) {
        border-bottom: 1px solid var(--card-border-color);
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .help-container {
    .help-container-bg {
      padding: 1rem;

      .category-header {
        flex-direction: column;
        padding-left: 1rem;
        padding-right: 1rem;

        .icon {
          position: relative;
          left: -1rem;
        }

        .inner-content {
          padding: 0;
        }
      }
    }

    .articles-list {
      margin: 1rem;
      width: calc(100% - 2rem);

      .help-article {
        padding: 1.25rem;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .help-container {
    .help-container-bg {
      padding: 3rem 1.75rem 1.75rem;
    }
  }
}
</style>
