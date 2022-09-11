<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('code')
</script>

<template>
  <div class="demo-tabs">
    <div class="tabs is-boxed">
      <ul>
        <li :class="activeTab === 'code' ? 'is-active' : ''">
          <a
            @click.prevent="activeTab = 'code'"
            @keydown.space.prevent="() => (activeTab = 'code')"
          >
            <i class="iconify rem-90" data-icon="feather:code"></i>
            <span class="ml-1">Code</span>
          </a>
        </li>
        <li :class="activeTab === 'props' ? 'is-active' : ''">
          <a
            @click.prevent="activeTab = 'props'"
            @keydown.space.prevent="() => (activeTab = 'props')"
          >
            <span>Props</span>
          </a>
        </li>
        <li :class="activeTab === 'sample' ? 'is-active' : ''">
          <a
            @click.prevent="activeTab = 'sample'"
            @keydown.space.prevent="() => (activeTab = 'sample')"
          >
            <span>Sample</span>
          </a>
        </li>
        <li :class="activeTab === 'usage' ? 'is-active' : ''">
          <a
            @click.prevent="activeTab = 'usage'"
            @keydown.space.prevent="() => (activeTab = 'usage')"
          >
            <span>Info</span>
          </a>
        </li>
      </ul>
    </div>
    <div v-if="activeTab === 'code'" class="tab-container">
      <slot name="code"></slot>
    </div>
    <div v-if="activeTab === 'props'" class="tab-container">
      <slot name="props"></slot>
    </div>
    <div v-if="activeTab === 'sample'" class="tab-container">
      <slot name="sample"></slot>
    </div>
    <div v-if="activeTab === 'usage'" class="tab-container">
      <slot name="usage"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.demo-tabs {
  .tabs {
    ul {
      border-color: var(--demo-tab-border-color);
    }

    li {
      a {
        font-family: var(--font);
        border-radius: 0.65rem 0.65rem 0 0;
      }

      &.is-active {
        a {
          background-color: var(--demo-tab-bg-color);
          border-color: var(--demo-tab-border-color);
        }
      }

      &:not(.is-active) {
        a {
          color: var(--light-text);

          &:hover {
            background-color: var(--demo-tab-bg-hover-color);
            border-bottom-color: var(--demo-tab-border-color);
          }
        }
      }
    }
  }

  .tab-container {
    min-height: 220px;

    :deep(pre) {
      margin-top: -1.5rem !important;
    }
  }
}
</style>
