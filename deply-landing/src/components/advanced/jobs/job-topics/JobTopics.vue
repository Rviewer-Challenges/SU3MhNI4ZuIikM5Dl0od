<script setup lang="ts">
export interface JobTopic {
  name: string
  text: string
  icon: string
  link: string
}

export interface JobTopicsProps {
  topics: JobTopic[]
  limit?: number
}

const props = withDefaults(defineProps<JobTopicsProps>(), {
  topics: () => [],
  limit: 3,
})
</script>

<template>
  <div class="py-6">
    <div class="job-topics">
      <div class="columns is-multiline b-columns-half-tablet-p">
        <div
          v-for="(topic, index) in props.topics.slice(0, props.limit)"
          :key="index"
          class="column is-4"
        >
          <RouterLink :to="topic.link" class="job-topic">
            <div class="topic-icon">
              <ClientOnly>
                <i class="iconify" :data-icon="topic.icon"></i>
              </ClientOnly>
            </div>
            <div class="meta">
              <h3>{{ topic.name }}</h3>
              <p class="paragraph rem-90">{{ topic.text }}</p>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.job-topics {
  position: relative;
  max-width: 1040px;
  margin: 0 auto;

  .job-topic {
    display: flex;
    align-items: center;
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    border-radius: 0.85rem;
    padding: 1rem;
    transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;

    .topic-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 44px;
      width: 44px;
      background: var(--wrap-muted-color);
      border-radius: 50%;
      font-size: 1.25rem;
    }

    .meta {
      margin-left: 0.75rem;

      h3 {
        font-family: var(--font-alt);
        font-weight: 600;
        color: var(--title-color);
        line-height: 1.2;
      }
    }

    &:hover {
      transform: translateY(-5px);
      border-color: var(--primary);
      box-shadow: var(--light-box-shadow);
    }
  }
}
</style>
