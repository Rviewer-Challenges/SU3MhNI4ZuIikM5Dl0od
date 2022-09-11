<script setup lang="ts">
import { ref, computed } from 'vue'
import { ColorPicker } from 'vue-accessible-color-picker'
import { useCssVar } from '@vueuse/core'

export type AvailableColors =
  | 'primary'
  | 'secondary'
  | 'dark'
  | 'dark-bg'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'purple'
  | 'blue'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'pink'
  | 'light-text'
  | 'medium-text'
  | 'dark-text'
  | 'widget-grey'

const props = withDefaults(
  defineProps<{
    color: AvailableColors
  }>(),
  {}
)
const colorVarName = computed(() => `--${props.color}`)
const colorHueVarName = computed(() => `--${props.color}-h`)
const colorSaturationVarName = computed(() => `--${props.color}-s`)
const colorLuminanceVarName = computed(() => `--${props.color}-l`)

const colorVar = useCssVar(colorVarName.value)
const colorHueVar = useCssVar(colorHueVarName.value)
const colorSaturationVar = useCssVar(colorSaturationVarName.value)
const colorLuminanceVar = useCssVar(colorLuminanceVarName.value)
const colorHslCss = computed(
  () =>
    `hsl(${colorHueVar.value}, ${colorSaturationVar.value}, ${colorLuminanceVar.value})`
)

const isOpen = ref(false)
const toggle = () => {
  isOpen.value = !isOpen.value
}
function updateColor({ colors }: any) {
  const { h, s, l } = colors.hsl
  colorHueVar.value = `${Math.round(h * 360)}`
  colorSaturationVar.value = `${Math.round(s * 100)}%`
  colorLuminanceVar.value = `${Math.round(l * 100)}%`
}
</script>

<template>
  <div class="color-card">
    <div class="color-card-header">
      <div class="color-dot is-primary"></div>
      <div class="meta">
        <span>var({{ colorVarName }})</span>
        <span>{{ colorVar }}</span>
      </div>
      <div class="actions">
        <Button tabindex="0" @keydown.space.prevent="toggle" @click="toggle">
          <span v-if="isOpen">Close</span>
          <span v-else>Customize</span>
        </Button>
      </div>
    </div>
    <div v-if="isOpen">
      <div class="is-divider"></div>
      <div class="color-picker">
        <ColorPicker
          :id="props.color"
          class="hide-alpha hide-copy"
          :color="`hsl(${colorHueVar}, ${colorSaturationVar}, ${colorLuminanceVar})`"
          @color-change="updateColor"
        >
          <template #hue-range-input-label>
            <span class="sr-only">Hue</span>
          </template>

          <template #alpha-range-input-label>
            <span class="sr-only">Alpha</span>
          </template>

          <template #copy-button>
            <span class="is-sr-only">Copy color</span>

            <i
              class="iconify is-clickable"
              aria-hidden="true"
              data-icon="feather:copy"
            ></i>
          </template>

          <template #format-switch-button>
            <span class="sr-only">Switch format</span>

            <i
              class="iconify rem-120 is-clickable"
              aria-hidden="true"
              data-icon="fluent:chevron-up-down-20-filled"
            ></i>
          </template>
        </ColorPicker>
      </div>
      <div class="is-divider"></div>
      <dl>
        <dt>
          <span>Hue</span>
          <small>var({{ colorHueVarName }})</small>
        </dt>
        <dd>{{ colorHueVar }}</dd>
      </dl>
      <dl>
        <dt>
          <span>Saturation</span>
          <small>var({{ colorSaturationVarName }})</small>
        </dt>
        <dd>{{ colorSaturationVar }}</dd>
      </dl>
      <dl>
        <dt>
          <span>Luminance</span>
          <small>var({{ colorLuminanceVarName }})</small>
        </dt>
        <dd>{{ colorLuminanceVar }}</dd>
      </dl>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../../scss/abstracts/mixins';

.color-picker {
  margin: 0.75rem auto;
  width: 100% !important;
  max-width: 100% !important;

  > div {
    width: 100%;
    max-width: 100%;
    min-height: 100%;
    background: var(--card-bg-color);

    span {
      color: var(--light-text);
    }

    .vacp-color-inputs {
      .vacp-color-input-group {
        label {
          .vacp-color-input-label-text {
            color: var(--light-text);
          }
        }
      }
    }
  }
}

:deep(.vacp-color-input-label-text) {
  color: var(--light-text);
}

:deep(.vacp-color-input) {
  background-color: var(--wrap-muted-color) !important;
  border-color: var(--wrap-muted-color) !important;
  color: var(--title-color);
}

:deep(.vacp-format-switch-button) {
  background-color: var(--wrap-muted-color) !important;
  border-color: var(--wrap-muted-color) !important;
  color: var(--title-color);
}

.color-card {
  background: var(--card-bg-color);
  border: 1px solid var(--card-border-color);
  border-radius: 0.85rem;
  box-shadow: var(--light-box-shadow);
  padding: 1.25rem;

  .color-card-header {
    display: flex;
    align-items: center;
  }

  .is-divider {
    border-top-color: var(--card-border-color);
  }

  dl {
    font: var(--font);
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:not(:last-child) {
      border-bottom: solid 1px var(--card-border-color);
      padding-bottom: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }

  dd {
    font-size: 0.9rem;
    font-family: var(--font);
    font-weight: 500;
    color: var(--title-color);
  }

  dt {
    display: flex;
    flex-direction: column;
    line-height: 1.3;

    span {
      font-size: 0.9rem;
      font-family: var(--font);
      font-weight: 500;
      color: var(--title-color);
    }

    small {
      font-size: 0.85rem;
      font-family: var(--font);
      color: var(--light-text);
    }
  }

  .color-dot {
    height: 40px;
    width: 40px;
    min-width: 40px;
    border-radius: 50%;
    background-color: v-bind(colorHslCss);
  }

  .meta {
    margin-left: 12px;
    flex-grow: 1;

    span {
      display: block;
      font-family: var(--font-alt);

      &:first-child {
        color: var(--title-color);
        font-size: 0.8rem;
        font-weight: 600;
      }

      &:nth-child(2) {
        font-size: 0.8rem;
        color: var(--light-text);
      }
    }
  }
}
</style>
