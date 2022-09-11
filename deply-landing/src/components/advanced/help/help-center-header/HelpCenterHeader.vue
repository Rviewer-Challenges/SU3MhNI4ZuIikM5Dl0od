<script setup lang="ts">
export interface HelpCenterTopic {
  icon: string
  iconColor: string
  title: string
  text: string
  link: string
}

export interface HelpCenterHeaderProps {
  title: string
  subtitle: string
  text?: string
  topics?: HelpCenterTopic[]
  compact?: boolean
}

const props = withDefaults(defineProps<HelpCenterHeaderProps>(), {
  topics: () => [],
  compact: false,
  text: undefined,
})
</script>

<template>
  <div>
    <PageTitle
      :title="props.title"
      :subtitle="props.subtitle"
      :text="props.text"
    >
      <template #content>
        <Control icon="feather:search">
          <VInput placeholder="Search topics..." />
        </Control>
      </template>
    </PageTitle>

    <div v-if="!props.compact" class="help-center-navigation">
      <div class="columns is-multiline b-columns-half-tablet-p">
        <div
          v-for="(topic, index) in props.topics.slice(0, 4)"
          :key="index"
          class="column is-3"
        >
          <RouterLink :to="topic.link" class="box">
            <i
              class="iconify"
              :data-icon="topic.icon"
              :class="topic.iconColor && `text-${topic.iconColor}`"
            ></i>
            <Title tag="h3" :size="6" weight="semi" narrow>
              <span>{{ topic.title }}</span>
            </Title>
            <p class="paragraph rem-85">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
:deep(.control) {
  max-width: 540px;
  margin: 1rem auto 0;
}

:deep(.form-icon) {
  height: 54px !important;
  width: 54px !important;
  font-size: 1.5rem;
}

:deep(.input) {
  height: 54px !important;
  padding-left: 54px !important;
  border-radius: 50rem;
}

.help-center-navigation {
  max-width: 1080px;
  margin: 0 auto;

  .box {
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    box-shadow: none;
    border-radius: 0.85rem;
    text-align: center;
    padding: 1.75rem;
    transition: box-shadow 0.3s, transform 0.3s;

    svg {
      font-size: 2.5rem;
      margin-bottom: 0.75rem;
    }

    &:hover {
      box-shadow: var(--spread-shadow);
      transform: translateY(-0.25rem);
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .help-center-navigation {
    .box {
      padding: 1.5rem 1rem;
    }
  }
}
</style>
