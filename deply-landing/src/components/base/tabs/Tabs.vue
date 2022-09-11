<script setup lang="ts">
import { computed, ref } from 'vue'

export type TabsType = 'boxed' | 'toggle' | 'rounded'
export type TabsAlign = 'centered' | 'right'
export interface TabsItem {
  label: string
  value: string
  icon?: string
}
export interface TabsProps {
  tabs: TabsItem[]
  selected?: string
  type?: TabsType
  alignment?: TabsAlign
  slider?: boolean
  slow?: boolean
}

const props = withDefaults(defineProps<TabsProps>(), {
  selected: undefined,
  type: undefined,
  alignment: undefined,
})

const activeValue = ref(props.selected)
const sliderClass = computed(() => {
  if (!props.slider) {
    return ''
  }

  if (props.type === 'rounded') {
    if (props.tabs.length === 3) {
      return 'is-triple-slider'
    }
    if (props.tabs.length === 2) {
      return 'is-slider'
    }

    return ''
  }

  if (!props.type) {
    if (props.tabs.length === 3) {
      return 'is-squared is-triple-slider'
    }
    if (props.tabs.length === 2) {
      return 'is-squared is-slider'
    }
  }

  return ''
})
</script>

<template>
  <div class="tabs-wrapper" :class="[sliderClass]">
    <div class="tabs-inner">
      <div
        class="tabs"
        :class="[
          props.alignment === 'centered' && 'is-centered',
          props.alignment === 'right' && 'is-right',
          props.type === 'rounded' &&
            !props.slider &&
            'is-toggle is-toggle-rounded',
          props.type === 'toggle' && 'is-toggle',
          props.type === 'boxed' && 'is-boxed',
        ]"
      >
        <ul>
          <li
            v-for="(tab, key) in tabs"
            :key="key"
            :class="[activeValue === tab.value && 'is-active']"
          >
            <slot name="tab-link" :activeValue="activeValue">
              <a
                @click="activeValue = tab.value"
                @keydown.space.prevent="() => (activeValue = tab.value)"
              >
                <Icon v-if="tab.icon" :icon="tab.icon" />
                <span class="px-1">{{ tab.label }}</span>
              </a>
            </slot>
          </li>
          <li v-if="sliderClass" class="tab-naver"></li>
        </ul>
      </div>
    </div>

    <div class="tab-content is-active">
      <transition :name="props.slow ? 'fade-slow' : 'fade-fast'" mode="out-in">
        <slot name="tab" :activeValue="activeValue"></slot>
      </transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tabs {
  margin-bottom: 20px;

  &.is-toggle {
    li {
      &:first-child {
        a {
          border-right: none;
        }
      }

      &:last-child {
        a {
          border-left: none;
        }
      }

      &.is-active {
        a {
          background: var(--primary);
          border-color: var(--primary);

          &:hover {
            color: var(--white);
          }
        }
      }

      a {
        transition: all 0.3s;

        &:hover {
          border-color: #dbdbdb;
        }
      }
    }
  }

  &.is-boxed {
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

  ul {
    border-color: var(--tab-border-color);
  }

  li {
    &.is-active {
      a {
        border-bottom-color: var(--primary);
        color: var(--primary);

        &:hover {
          border-bottom-color: var(--primary);
          color: var(--primary);
        }
      }
    }

    a {
      font-family: var(--font);
      border-bottom-width: 2px;
      color: var(--tab-item-color);
      border-bottom-color: transparent;

      &:hover {
        color: var(--tab-item-hover-color);
        border-bottom-color: transparent;
      }

      svg {
        height: 16px;
        width: 16px;
        margin-right: 6px;
      }

      :deep(.iconify) {
        position: relative;
        top: -1px;
      }

      small {
        margin-left: 5px;
      }
    }
  }
}

.tab-content {
  display: none;
  animation-name: fadeinleft;
  animation-duration: 0.5s;

  &.is-active {
    display: block;

    &.is-spaced {
      margin-top: 10px !important;
    }
  }

  &.is-spaced {
    margin-top: 40px;
  }

  &.is-spaced-lg {
    margin-top: 40px !important;
  }
}

.tabs-wrapper,
.tabs-wrapper-alt {
  &.is-slider {
    &.is-inverted {
      .tabs {
        background: var(--white);
      }
    }

    &.is-squared {
      .tabs,
      .tab-naver {
        border-radius: 8px;
      }
    }

    .tabs {
      position: relative;
      background: var(--tabs-bg-color);
      border: 1px solid var(--tab-border-color) !important;
      max-width: 185px;
      height: 40px;
      border-bottom: none;
      border-radius: 500px;

      ul {
        border-bottom: none;

        &.is-profile {
          li {
            a {
              color: var(--smoke-white) !important;
            }

            &.is-active a {
              color: var(--dark-text) !important;
            }
          }
        }
      }

      li {
        width: 50%;

        a {
          color: var(--light-text);
          font-family: var(--font);
          font-size: 0.9rem;
          height: 40px;
          border-bottom: none;
          position: relative;
          z-index: 5;

          span {
            position: relative;
            top: -1px;
            display: block;
          }
        }

        &.is-active a {
          color: var(--white);
          font-weight: 400;
        }

        &:first-child {
          &.is-active ~ .tab-naver {
            margin-left: 0;
          }
        }

        &:nth-child(2) {
          &.is-active ~ .tab-naver {
            margin-left: 50% !important;
          }
        }
      }

      &.is-centered {
        margin-left: auto;
        margin-right: auto;
      }

      &.is-right {
        margin-left: auto;
      }

      &.is-left {
        margin-right: auto;
      }
    }

    .tab-naver {
      left: 0;
      background: var(--primary);
      position: absolute;
      top: 0;
      display: block;
      height: 38px;
      transition: all 0.3s;
      z-index: 4;
      border-radius: 50px;

      &.is-profile {
        background: var(--smoke-white) !important;
      }

      &.is-active {
        margin-left: 50%;
      }
    }
  }
}

.tabs-wrapper,
.tabs-wrapper-alt {
  &.is-triple-slider {
    &.is-inverted {
      .tabs {
        background: var(--white);
      }
    }

    &.is-squared {
      .tabs,
      .tab-naver {
        border-radius: 8px;
      }
    }

    .tabs {
      position: relative;
      background: var(--tabs-bg-color);
      border: 1px solid var(--tab-border-color) !important;
      max-width: 280px;
      height: 40px;
      border-bottom: none;
      border-radius: 500px;

      ul {
        border-bottom: none;

        &.is-profile {
          li {
            a {
              color: var(--smoke-white) !important;
            }

            &.is-active a {
              color: var(--dark-text) !important;
            }
          }
        }
      }

      li {
        width: 33.3%;

        a {
          color: var(--light-text);
          font-family: var(--font);
          font-weight: 400;
          height: 40px;
          border-bottom: none;
          position: relative;
          z-index: 5;

          span {
            position: relative;
            top: -1px;
            display: block;
          }
        }

        &.is-active a {
          color: var(--white);
          font-weight: 400;
        }

        &:first-child {
          &.is-active ~ .tab-naver {
            margin-left: 0;
          }
        }

        &:nth-child(2) {
          &.is-active ~ .tab-naver {
            margin-left: 33% !important;
          }
        }

        &:nth-child(3) {
          &.is-active ~ .tab-naver {
            margin-left: 66.6%;
          }
        }
      }

      &.is-centered {
        margin-left: auto;
        margin-right: auto;
      }

      &.is-right {
        margin-left: auto;
      }

      &.is-left {
        margin-right: auto;
      }
    }

    .tab-naver {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 33.3% !important;
      background: var(--primary);
      height: 38px;
      transition: all 0.3s;
      z-index: 4;
      border-radius: 40px;

      &.is-profile {
        background: var(--smoke-white) !important;
      }

      &.is-active {
        margin-left: 48%;
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .vertical-tabs-wrapper {
    .tabs {
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
      min-width: 25%;
      max-width: 25%;
      margin-right: 30px;

      ul {
        display: block;
        text-align: left;
        border-bottom-color: transparent !important;

        li {
          display: block;

          &.is-active {
            a {
              color: var(--primary);
              border-right-color: var(--primary);
            }
          }

          a {
            display: block;
            border-bottom-color: transparent !important;
            border-right: 2px solid #dbdbdb;
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
</style>
