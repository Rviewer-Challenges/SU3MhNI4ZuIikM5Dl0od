<script setup lang="ts">
import Markdown from 'vue3-markdown-it'
import type { Job } from '/@src/types'

export interface JobDetailsProps {
  job: Job
}
const props = defineProps<JobDetailsProps>()
</script>

<template>
  <div class="job-wrapper">
    <RouterLink to="/landing/landing-28" class="back-link">
      <i class="iconify" aria-hidden="true" data-icon="feather:arrow-left"></i>
      <span>Back to jobs</span>
    </RouterLink>

    <div class="job-header">
      <div class="left">
        <div class="job-icon">
          <img :src="props.job.icon" alt="" />
        </div>
        <div class="meta">
          <h3 class="job-title">{{ props.job.title }}</h3>
          <h4
            v-if="props.job.location || props.job.duration"
            class="job-subtitle"
          >
            <i
              class="iconify"
              aria-hidden="true"
              data-icon="feather:map-pin"
            ></i>
            {{ props.job.location }} -
            <i class="iconify" aria-hidden="true" data-icon="feather:clock"></i>
            {{ props.job.duration }}
          </h4>
        </div>
      </div>
      <div v-if="props.job.contact" class="right">
        <Button color="primary" :long="3" outlined raised>Apply</Button>
      </div>
    </div>
    <div class="job-body">
      <div class="columns">
        <div class="column is-7">
          <template
            v-for="(content, descKey) in props.job.content.description"
            :key="descKey"
          >
            <h3>{{ content.title }}</h3>
            <Markdown :source="content.text" />
          </template>

          <div v-if="props.job.content.aptitude" class="requirements-list">
            <template
              v-for="(content, aptKey) in props.job.content.aptitude"
              :key="aptKey"
            >
              <h3>{{ content.title }}</h3>

              <li v-for="(skill, skillKey) in content.skills" :key="skillKey">
                <div class="block-icon">
                  <i
                    class="iconify"
                    aria-hidden="true"
                    data-icon="fa-solid:check"
                  ></i>
                </div>
                <span>{{ skill }}</span>
              </li>
              <hr class="is-invisible" />
            </template>
          </div>
        </div>
        <div class="column is-4 is-offset-1">
          <div v-if="props.job.content.technologies" class="recommended-skills">
            <template
              v-for="(content, techKey) in props.job.content.technologies"
              :key="techKey"
            >
              <h3>{{ content.title }}</h3>

              <div
                v-for="(skill, toolKey) in content.tools"
                :key="toolKey"
                :class="'skill-block'"
              >
                <img :src="skill.icon" alt="Skill icon" />
                <p>{{ skill.title }}</p>
              </div>
              <hr class="is-invisible" />
            </template>
          </div>

          <div v-if="props.job.salary || props.job.contact" class="apply-card">
            <h3>Salary</h3>
            <p v-if="props.job.salary">{{ props.job.salary }}</p>
            <div v-if="props.job.contact" class="action">
              <Button color="primary" raised fullwidth>Apply</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  overflow: initial;
}
</style>

<style lang="scss" scoped>
.job-wrapper {
  padding-top: 4rem;
  padding-bottom: 4rem;

  .back-link {
    font-family: var(--font);
    display: flex;
    align-items: center;
    color: var(--primary);

    .iconify {
      margin-right: 0.5rem;
      transition: transform 0.3s;
    }

    &:hover {
      .iconify {
        transform: translateX(-0.25rem);
      }
    }
  }

  .job-header {
    display: flex;
    align-items: center;
    padding: 2rem 0 2.5rem;
    border-bottom: 1px solid var(--card-border-color);

    .left {
      display: flex;
      align-items: center;

      .job-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;
        width: 80px;
        background: var(--wrap-bg-color);
        border: 1px solid var(--wrap-border-color);
        border-radius: 50%;
        box-shadow: var(--light-box-shadow);

        img {
          display: block;
          width: 68px;
          height: 68px;
          border-radius: 50%;
        }
      }

      .meta {
        margin-left: 1rem;
        line-height: 1.2;

        .job-title {
          font-family: var(--font-alt);
          font-size: 1.75rem;
          font-weight: 700;
        }

        .job-subtitle {
          font-family: var(--font);
          font-size: 1rem;
          font-weight: 400;
          color: var(--light-text);

          .iconify {
            font-size: 0.9rem;
          }
        }
      }
    }

    .right {
      margin-left: auto;
    }
  }

  .job-body {
    padding-top: 2.5rem;

    .column.is-7 {
      border-right: 1px solid var(--wrap-border-color);
      padding-right: 4rem;
    }

    h3 {
      font-family: var(--font-alt);
      font-weight: 600;
      font-size: 1.15rem;
      color: var(--title-color);
      margin-bottom: 0.75rem;
    }

    p,
    :deep(p) {
      font-family: var(--font);
      font-size: 1rem;
      color: var(--light-text);
      margin-bottom: 30px;
    }

    .requirements-list {
      list-style-type: none;
      font-family: var(--font);
      font-size: 1rem;
      color: var(--medium-text);
      margin-bottom: 2rem;
      padding-top: 0.75rem;
      padding-left: 0;

      li {
        display: flex;
        align-items: center;
        margin-bottom: 0.75rem;

        .block-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 30px;
          width: 30px;
          min-width: 30px;
          border-radius: 50%;
          background: var(--wrap-muted-color);
          color: var(--primary);
          margin-right: 10px;

          .iconify {
            font-size: 0.8rem;
          }
        }
      }
    }

    .recommended-skills {
      padding: 1.5rem 0;

      .skill-block {
        display: flex;
        align-items: center;
        margin-bottom: 1.5rem;

        img {
          display: block;
          height: 40px;
          width: 40px;
          min-width: 32px;
          border-radius: 50%;
          background: var(--wrap-muted-color);
        }

        p {
          font-family: var(--font);
          font-size: 0.95rem;
          color: var(--medium-text);
          margin-left: 16px;
          margin-bottom: 0;
        }
      }
    }

    .apply-card {
      position: sticky;
      top: 100px;
      background: var(--card-bg-color);
      border: 1px solid var(--card-border-color);
      border-radius: 0.75rem;
      padding: 2rem;
      box-shadow: var(--light-box-shadow);

      .action {
        .button {
          height: 48px;
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .job-wrapper {
    .job-header {
      flex-direction: column;

      .left {
        flex-direction: column;
        text-align: center;

        .job-icon {
          margin-bottom: 0.75rem;
        }

        img {
          height: 60px;
          width: 60px;
          min-width: 60px;
        }

        .meta {
          margin-left: 0;
        }
      }

      .right {
        margin: 20px auto 0;

        .button {
          min-width: 240px;
        }
      }
    }

    .job-body {
      .column.is-7 {
        padding-right: 0.5rem;
        border: none;
      }
    }

    > .button-wrap {
      text-align: center;
    }
  }
}
</style>
