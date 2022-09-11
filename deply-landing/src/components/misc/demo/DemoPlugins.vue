<script setup lang="ts">
export type PluginColor =
  | 'default'
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'purple'
  | 'yellow'
  | 'orange'
  | 'green'
  | 'red'
  | 'blue'

export interface PluginItem {
  name: string
  icon: string
  color: PluginColor
  linkLabel: string
  url: string
}

export interface PluginGridProps {
  items: PluginItem[]
}

const props = withDefaults(defineProps<PluginGridProps>(), {
  items: () => [],
})
</script>

<template>
  <div class="plugin-grid">
    <div class="columns is-multiline">
      <div
        v-for="(item, index) in props.items"
        :key="index"
        class="column is-4"
      >
        <div class="grid-item">
          <IconBox :color="item.color">
            <i class="iconify" :data-icon="item.icon"></i>
          </IconBox>
          <Title tag="h3" weight="semi" :size="7" narrow>{{ item.name }}</Title>
          <a :href="item.url" target="_blank">
            {{ item.linkLabel }}
            <i-tabler-external-link />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.plugin-grid {
  .grid-item {
    display: flex;
    align-items: center;
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    padding: 1.25rem;
    border-radius: 0.85rem;
    transition: box-shadow 0.3s;

    :deep(.icon-box) {
      margin-right: 0.5rem;
    }

    a {
      display: flex;
      align-items: center;
      font-family: var(--font);
      font-weight: 500;
      font-size: 0.85rem;
      color: var(--primary);
      margin-left: auto;

      svg {
        margin-left: 0.15rem;
      }
    }

    &:hover {
      box-shadow: var(--spread-shadow);
    }
  }
}
</style>
