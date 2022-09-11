<script setup lang="ts">
import { HelpCenterCategory } from '/@src/types'

export interface HelpCenterCategoryCardProps {
  category: HelpCenterCategory
}

const props = defineProps<HelpCenterCategoryCardProps>()
</script>

<template>
  <div class="flex-card category-card light-bordered">
    <div class="card-body">
      <RouterLink
        :to="{
          name: 'subpages-help-category-slug',
          params: { slug: props.category.slug },
        }"
      >
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
          <Title tag="h3" :size="4" weight="thin" leading>
            <span>{{ props.category.name }}</span>
          </Title>
          <div class="inner-text">
            <span>
              {{ props.category.text }}
            </span>
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
      </RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.category-card {
  background: var(--card-bg-color);
  padding: 1.75rem;
  border: 1px solid var(--card-border-color);
  border-radius: 0.85rem;
  box-shadow: none;
  transition: box-shadow 0.3s, transform 0.3s;

  .card-body {
    a {
      display: flex;

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
            color: var(--medium-text) !important;
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
  }

  &:hover {
    box-shadow: var(--spread-shadow);
    transform: translateY(-0.25rem);
  }
}

@media only screen and (max-width: 767px) {
  .category-card {
    padding: 1rem;

    .card-body {
      a {
        flex-direction: column;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .category-card {
    padding: 1.25rem;

    .card-body {
      a {
        .icon {
          width: 60px;
          min-width: 60px;
          height: 60px;

          .iconify {
            font-size: 2.25rem;
          }
        }
      }
    }
  }
}
</style>
