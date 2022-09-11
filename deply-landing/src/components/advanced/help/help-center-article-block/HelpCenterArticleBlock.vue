<script setup lang="ts">
import { ref } from 'vue'
import Markdown from 'vue3-markdown-it'

import { HelpCenterArticle } from '/@src/types'

export interface HelpCenterArticleBlockProps {
  article: HelpCenterArticle
}

const props = defineProps<HelpCenterArticleBlockProps>()

const activeRating = ref('')
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
    <div class="flex-card single-help-article">
      <div class="article-inner">
        <Title tag="h2" :size="3">
          <span>{{ props.article.title }}</span>
        </Title>
        <Subtitle tag="h3" :size="5">
          <span>{{ props.article.subtitle }}</span>
        </Subtitle>
        <div class="article-meta">
          <img
            class="small-avatar"
            :src="props.article.author.picture"
            alt="Author photo"
          />
          <div class="meta-info">
            <div class="author">
              Written by
              <span>{{ props.article.author.name }}</span>
            </div>
            <div class="status">Updated {{ props.article.updated }}</div>
          </div>
        </div>

        <div class="content">
          <Markdown :source="props.article.content" />
        </div>

        <div class="rating-section">
          <div class="question">Was this article helpful ?</div>
          <div class="rating-buttons">
            <button
              class="rating-button"
              :class="activeRating === 'bad' && 'is-active'"
              @click="activeRating = 'bad'"
            >
              <i-ph-smiley-nervous-duotone />
            </button>
            <button
              class="rating-button"
              :class="activeRating === 'neutral' && 'is-active'"
              @click="activeRating = 'neutral'"
            >
              <i-ph-smiley-blank-duotone />
            </button>
            <button
              class="rating-button"
              :class="activeRating === 'good' && 'is-active'"
              @click="activeRating = 'good'"
            >
              <i-ph-smiley-duotone />
            </button>
            <span
              class="rating-message is-bad"
              :class="activeRating === 'bad' && 'is-active'"
            >
              Nope, that was bad.
            </span>
            <span
              class="rating-message is-neutral"
              :class="activeRating === 'neutral' && 'is-active'"
            >
              Well, that was so so.
            </span>
            <span
              class="rating-message is-good"
              :class="activeRating === 'good' && 'is-active'"
            >
              Yes, that was good.
            </span>
          </div>
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

  .single-help-article {
    border-radius: 0.85rem;
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    margin-top: 1.5rem;
    padding: 4rem;

    .article-inner {
      max-width: 640px;
      margin: 0 auto;

      .article-meta {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: var(--medium-text);
        line-height: 1.1rem;

        .small-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }

        .meta-info {
          color: var(--medium-text);
          font-family: var(--font);
          margin-left: 15px;

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

      :deep(.content) {
        font-family: var(--font);
        padding-top: 30px;

        p {
          font-size: 1rem;
          color: var(--medium-text);
        }

        h2,
        h3,
        h4 {
          font-family: var(--font-alt);
          font-weight: 600;
          color: var(--title-color);
          padding-top: 1.5rem;
        }

        ul {
          font-size: 1rem;
          color: var(--medium-text);
        }
      }

      .rating-section {
        width: 100%;
        text-align: center;
        margin-bottom: 2rem;

        .question {
          padding-top: 25px;
          font-family: var(--font);
          font-size: 1rem;
          font-weight: 500;
          color: var(--light-text);
          margin-bottom: 1.5rem;
        }

        .rating-buttons {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .rating-button {
          display: flex;
          justify-content: center;
          align-items: center;
          background: none;
          border: none;
          padding: 0;
          max-width: 60px;
          max-height: 60px;
          margin: 0 0.5rem;
          cursor: pointer;

          svg {
            font-size: 2.5rem;
            color: var(--light-text);
            transition: all 0.3s;
          }

          &:hover,
          &.is-active {
            svg {
              color: var(--primary);
              transform: scale(1.1);
            }

            &:first-child {
              svg {
                color: var(--danger);
              }
            }

            &:nth-child(2) {
              svg {
                color: var(--warning);
              }
            }

            &:nth-child(3) {
              svg {
                color: var(--success);
              }
            }
          }
        }

        .rating-message {
          position: absolute;
          bottom: -2rem;
          left: 0;
          right: 0;
          margin: 0 auto;
          width: auto;
          font-family: var(--font);
          font-size: 0.9rem;
          font-weight: 500;
          border-radius: 50rem;
          pointer-events: none;
          transform: translateY(0.5rem);
          opacity: 0;
          transition: transform 0.3s, opacity 0.3s;

          &.is-bad {
            color: var(--danger);
          }

          &.is-neutral {
            color: var(--warning);
          }

          &.is-good {
            color: var(--success);
          }

          &.is-active {
            transform: translateY(0);
            opacity: 1;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .help-container {
    .single-help-article {
      padding: 2rem;
    }
  }
}
</style>
