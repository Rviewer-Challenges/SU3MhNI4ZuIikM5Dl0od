<script setup lang="ts">
import { ref } from 'vue'

export interface CollapseItem {
  title: string
  content: string
}
export interface CollapseProps {
  items: CollapseItem[]
  itemOpen?: number
  withChevron?: boolean
}

const props = withDefaults(defineProps<CollapseProps>(), {
  items: () => [],
  itemOpen: undefined,
})

const internalItemOpen = ref<number | undefined>(props.itemOpen)
const toggle = (key: number) => {
  if (internalItemOpen.value === key) {
    internalItemOpen.value = undefined
    return
  }

  internalItemOpen.value = key
}
</script>

<template>
  <details
    v-for="(item, key) in items"
    :key="key"
    :class="[withChevron && 'has-chevron', !withChevron && 'has-plus']"
    :open="internalItemOpen === key || undefined"
    class="collapse"
  >
    <slot name="collapse-item" :item="item" :index="key" :toggle="toggle">
      <summary
        class="collapse-header"
        tabindex="0"
        @keydown.space.prevent="() => toggle(key)"
        @click.prevent="() => toggle(key)"
      >
        <h3>
          <slot
            name="collapse-item-summary"
            :item="item"
            :index="key"
            :toggle="toggle"
          >
            {{ item.title }}
          </slot>
        </h3>
        <div class="collapse-icon">
          <Icon v-if="withChevron" icon="feather:chevron-down" />
          <Icon v-else-if="!withChevron" icon="feather:plus" />
        </div>
      </summary>
      <div class="collapse-content">
        <p>
          <slot
            name="collapse-item-content"
            :item="item"
            :index="key"
            :toggle="toggle"
          >
            {{ item.content }}
          </slot>
        </p>
      </div>
    </slot>
  </details>
</template>

<style lang="scss">
.collapse {
  padding: 0;
  margin-bottom: 1.5rem;

  &.has-plus {
    &[open] {
      .collapse-header {
        .collapse-icon {
          transform: rotate(45deg);
        }
      }

      .collapse-content {
        display: block;
      }
    }
  }

  &.has-chevron {
    &[open] {
      .collapse-header {
        .collapse-icon {
          transform: rotate(180deg);
        }
      }

      .collapse-content {
        display: block;
      }
    }
  }

  &[open] {
    .collapse-icon {
      border-color: var(--card-border-color) !important;
      box-shadow: var(--light-box-shadow);
    }
  }

  .collapse-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    padding: 0 20px;
    cursor: pointer;

    h3 {
      font-family: var(--font-alt);
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--dark-text);
    }

    .collapse-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30px;
      width: 30px;
      background: var(--card-bg-color);
      border-radius: 50%;
      border: 1px solid transparent;
      transition: all 0.3s; // transition-all test

      > span {
        display: block;
        height: 16px;
        width: 16px;
      }

      svg {
        position: relative;
        top: -2px;
        vertical-align: initial;
        height: 16px;
        width: 16px;
        color: var(--light-text);
      }
    }
  }

  .collapse-content {
    display: none;
    padding: 0 20px 20px;
    color: var(--light-text);
    font-family: var(--font);

    p:not(:last-child) {
      margin-bottom: 12px;
    }
  }
}

.is-dark {
  .collapse {
    .collapse-header {
      h3 {
        color: var(--white-smoke);
      }
    }
  }
}
</style>
