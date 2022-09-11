<script setup lang="ts">
import {
  base,
  intermediate,
  blocks,
  advanced,
  utilities,
} from '/@src/data/demo/'
import { useDarkmode } from '/@src/stores/darkmode'

const props = withDefaults(
  defineProps<{
    activeTab?: 'base' | 'intermediate' | 'blocks' | 'advanced' | 'utilities'
  }>(),
  {
    activeTab: 'base',
  }
)

const darkmode = useDarkmode()
</script>

<template>
  <!--Base-->
  <div
    id="demo-base"
    :class="[props.activeTab === 'base' && 'is-active']"
    class="tab-content has-text-left"
  >
    <div class="columns is-multiline">
      <div v-for="item in base" :key="item.id" class="column is-4">
        <RouterLink
          v-preload-link
          :to="{ name: item.link }"
          class="component-box"
        >
          <div class="component">
            <img
              v-if="!darkmode.isDark"
              :src="item.media.light"
              alt="component icon"
              loading="lazy"
            />
            <img
              v-else
              :src="item.media.dark"
              alt="component icon"
              loading="lazy"
            />
          </div>
          <div class="component-title">{{ item.name }}</div>
        </RouterLink>
      </div>
    </div>
  </div>

  <!--Intermediate-->
  <div
    id="demo-intermediate"
    :class="[props.activeTab === 'intermediate' && 'is-active']"
    class="tab-content has-text-left"
  >
    <div class="columns is-multiline">
      <!--Item-->
      <div v-for="item in intermediate" :key="item.id" class="column is-4">
        <RouterLink :to="{ name: item.link }" class="component-box">
          <div class="component">
            <img
              v-if="!darkmode.isDark"
              :src="item.media.light"
              alt="component icon"
              loading="lazy"
            />
            <img
              v-else
              :src="item.media.dark"
              alt="component icon"
              loading="lazy"
            />
          </div>
          <div class="component-title">{{ item.name }}</div>
        </RouterLink>
      </div>
    </div>
  </div>

  <!--Blocks-->
  <div
    id="demo-blocks"
    :class="[props.activeTab === 'blocks' && 'is-active']"
    class="tab-content has-text-left"
  >
    <div class="columns is-multiline">
      <!--Item-->
      <div v-for="item in blocks" :key="item.id" class="column is-4">
        <RouterLink :to="{ name: item.link }" class="component-box">
          <div class="component">
            <img
              v-if="!darkmode.isDark"
              :src="item.media.light"
              alt="component icon"
              loading="lazy"
            />
            <img
              v-else
              :src="item.media.dark"
              alt="component icon"
              loading="lazy"
            />
          </div>
          <div class="component-title">{{ item.name }}</div>
        </RouterLink>
      </div>
    </div>
  </div>

  <!--Advanced-->
  <div
    id="demo-advanced"
    :class="[props.activeTab === 'advanced' && 'is-active']"
    class="tab-content has-text-left"
  >
    <div class="columns is-multiline">
      <div v-for="item in advanced" :key="item.id" class="column is-4">
        <RouterLink :to="{ name: item.link }" class="component-box">
          <div class="component">
            <img
              v-if="!darkmode.isDark"
              :src="item.media.light"
              alt="component icon"
              loading="lazy"
            />
            <img
              v-else
              :src="item.media.dark"
              alt="component icon"
              loading="lazy"
            />
          </div>
          <div class="component-title">{{ item.name }}</div>
        </RouterLink>
      </div>
    </div>
  </div>

  <!--Utilities-->
  <div
    id="demo-utilities"
    :class="[props.activeTab === 'utilities' && 'is-active']"
    class="tab-content has-text-left"
  >
    <div class="columns is-multiline">
      <div v-for="item in utilities" :key="item.id" class="column is-4">
        <RouterLink :to="{ name: item.link }" class="component-box">
          <div class="component">
            <img
              v-if="!darkmode.isDark"
              :src="item.media.light"
              alt="component icon"
              loading="lazy"
            />
            <img
              v-else
              :src="item.media.dark"
              alt="component icon"
              loading="lazy"
            />
          </div>
          <div class="component-title">{{ item.name }}</div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.component-box {
  display: block;
  background: var(--card-bg-color);
  border: 1px solid var(--card-border-color);
  padding: 1rem;
  border-radius: 1rem;
  margin-bottom: 0;
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
  cursor: pointer;

  &:hover,
  &:focus {
    transform: translateY(-5px);
    box-shadow: var(--light-box-shadow);
    border-color: var(--primary);

    .component-title {
      color: var(--title-color);
    }
  }

  .component {
    img {
      display: block;
      max-width: 100%;
      transition: all 0.3s;
      background: var(--feature-block-c-box-bubble-bg);
      border-radius: 0.85rem;
    }
  }

  .component-title {
    font-family: var(--font-main);
    font-size: 0.95rem;
    font-weight: 500;
    padding-top: 0.5rem;
    color: var(--light-text);
    transition: color 0.3s;
  }
}

.tab-content {
  display: none;
  animation-name: fadeinleft;
  animation-duration: 0.5s;

  &.is-active {
    display: block;
  }
}
</style>
