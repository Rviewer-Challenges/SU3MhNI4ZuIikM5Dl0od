<script setup lang="ts">
import { ref } from 'vue'

type TabId = 'base' | 'intermediate' | 'blocks' | 'advanced' | 'utilities'
const activeTab = ref<TabId>('base')
</script>

<template>
  <div class="py-6">
    <div class="vuero-components">
      <div class="vertical-tabs-wrapper">
        <div class="tabs">
          <ul>
            <li :class="[activeTab === 'base' && 'is-active']">
              <a
                tabindex="0"
                @keydown.space.prevent="activeTab = 'base'"
                @click="activeTab = 'base'"
              >
                Base
              </a>
            </li>
            <li :class="[activeTab === 'intermediate' && 'is-active']">
              <a
                tabindex="0"
                @keydown.space.prevent="activeTab = 'intermediate'"
                @click="activeTab = 'intermediate'"
              >
                Intermediate
              </a>
            </li>
            <li :class="[activeTab === 'blocks' && 'is-active']">
              <a
                tabindex="0"
                @keydown.space.prevent="activeTab = 'blocks'"
                @click="activeTab = 'blocks'"
              >
                Blocks
              </a>
            </li>
            <li :class="[activeTab === 'advanced' && 'is-active']">
              <a
                tabindex="0"
                @keydown.space.prevent="activeTab = 'advanced'"
                @click="activeTab = 'advanced'"
              >
                Advanced
              </a>
            </li>
            <li :class="[activeTab === 'utilities' && 'is-active']">
              <a
                tabindex="0"
                @keydown.space.prevent="activeTab = 'utilities'"
                @click="activeTab = 'utilities'"
              >
                Utilities
              </a>
            </li>
          </ul>
        </div>
        <div class="content-wrap">
          <DemoComponentsContent :active-tab="activeTab" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@media only screen and (max-width: 767px) {
  .vertical-tabs-wrapper {
    position: relative;

    .tabs {
      position: sticky;
      top: 80px;

      ul {
        li {
          &.is-active {
            a {
              color: var(--primary);
              border-bottom-color: var(--primary);
            }
          }

          a {
            color: var(--light-text);
          }
        }
      }
    }

    .content-wrap {
      .tab-content {
        padding-top: 12px;
        display: none;
        animation: fadeinleft 0.5s;

        &.is-active {
          display: block;
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) {
  .vertical-tabs-wrapper {
    display: flex;

    .tabs {
      min-width: 20%;
      max-width: 20%;
      margin-right: 30px;

      ul {
        display: block;
        text-align: left;
        border-bottom-color: transparent !important;

        li {
          display: block;

          &.is-active {
            a {
              font-weight: 500;
              color: var(--primary);
              border-right-color: var(--primary);
            }
          }

          a {
            display: block;
            border-bottom-color: transparent !important;
            border-right: 2px solid var(--card-border-color);
            color: var(--light-text);
          }
        }
      }
    }

    .content-wrap {
      flex-grow: 2;

      .tab-content {
        display: none;
        animation: fadeinleft 0.5s;

        &.is-active {
          display: block;
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .vuero-components {
    .tab-content {
      .columns {
        display: flex;

        .column.is-3 {
          min-width: 33.3% !important;
        }
      }
    }
  }
}
</style>
