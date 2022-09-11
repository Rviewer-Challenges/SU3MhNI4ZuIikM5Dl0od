<script setup lang="ts">
import { computed } from 'vue'
import type { Job } from '/@src/types'

export interface JobGridProps {
  jobs: Job[]
  pulled?: boolean
}

const props = withDefaults(defineProps<JobGridProps>(), {
  jobs: () => [],
  pulled: false,
})

const gridClasses = computed(() => [props.pulled && 'is-pulled'])
</script>

<template>
  <div class="py-6">
    <div class="job-grid" :class="gridClasses">
      <div class="columns is-multiline b-columns-half-tablet-p">
        <div v-for="(job, key) in props.jobs" :key="key" class="column is-4">
          <div class="job-card">
            <div class="job-card-icon">
              <img :src="job.icon" alt="" />
            </div>
            <div class="job-card-content">
              <h3 class="job-card-title">{{ job.title }}</h3>
              <h4 class="job-card-subtitle">
                <span>
                  <i-ph-map-pin-duotone />
                  {{ job.location }}
                </span>
                <span>
                  <i-ph-clock-duotone />
                  {{ job.duration }}
                </span>
              </h4>
            </div>
            <div class="job-stacks">
              <div
                v-for="(tech, t) in job.content.technologies"
                :key="t"
                class="job-stacks-inner"
              >
                <div v-for="(stack, s) in tech.tools.slice(0, 3)" :key="s">
                  <img v-if="t === 0" :src="stack.icon" alt="stack logo" />
                </div>
              </div>
            </div>
            <div class="job-card-action">
              <Button
                :to="{
                  name: 'subpages-jobs-slug',
                  params: { slug: job.slug },
                }"
                color="primary"
                :long="2"
                outlined
                raised
              >
                Job Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6">
      <Buttons alignment="centered">
        <Button color="primary" :long="3" raised bold>All Jobs</Button>
      </Buttons>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.job-grid {
  max-width: 980px;
  margin-left: auto;
  margin-right: auto;

  &.is-pulled {
    margin-top: -3rem;
  }
}

.job-card {
  background: var(--card-bg-color);
  border: 1px solid var(--card-border-color);
  border-radius: 0.75rem;
  padding: 2rem;
  transition: box-shadow 0.3s;

  .job-card-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 60px;
    background: var(--wrap-muted-color);
    border-radius: 50%;
    margin: 0 auto 1rem;

    img {
      display: block;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      filter: grayscale(1);
      opacity: 0.7;
      transition: filter 0.3s, opacity 0.3s;
    }
  }

  .job-card-content {
    text-align: center;

    .job-card-title {
      color: var(--title-color);
      font-family: var(--font-alt);
      font-size: 1.1rem;
      font-weight: 600;
      line-height: 1.2;
      margin-bottom: 0.5rem;
    }

    .job-card-subtitle {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font);
      font-size: 0.9rem;
      font-weight: 400;
      color: var(--light-text);

      span {
        display: flex;
        align-items: center;
        padding: 0 0.5rem;

        svg {
          vertical-align: middle;
          margin-right: 0.15rem;
        }
      }
    }
  }

  .job-stacks {
    margin: 1rem 0;

    .job-stacks-inner {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    img {
      display: block;
      min-width: 40px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }

  .job-card-action {
    display: flex;
    justify-content: center;

    .v-button {
      height: 48px;
    }
  }

  &:hover {
    box-shadow: var(--light-box-shadow);

    .job-card-icon {
      img {
        filter: grayscale(0);
        opacity: 1;
      }
    }
  }
}
</style>
