<script setup lang="ts">
import { computed } from 'vue'

export interface RadioEmits {
  (e: 'update:modelValue', value: string | number): void
}

export type RadioColor =
  | 'default'
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'

export interface RadioProps {
  name: string
  group: string
  color?: RadioColor
  value: string | number
  modelValue?: string | number
  disabled?: boolean
  rounded?: boolean
  label?: string
}

const emit = defineEmits<RadioEmits>()
const props = withDefaults(defineProps<RadioProps>(), {
  color: 'primary',
  modelValue: undefined,
  disabled: false,
  label: undefined,
})

const checked = computed(() => props.value === props.modelValue)

function change() {
  emit('update:modelValue', props.value)
}

const radioClasses = computed(() => [props.color && `is-${props.color}`])
</script>

<template>
  <div class="radio" :class="radioClasses">
    <label :for="`radio-${props.group}`" class="radio-inner-wrap">
      <span class="radio-inner">
        <input
          :id="`radio-${props.group}`"
          :name="props.name"
          :checked="checked"
          :value="props.value"
          type="radio"
          @change="change"
        />
        <i class="iconify rem-50" data-icon="feather:circle"></i>
        <span class="inner-overlay"></span>
      </span>
      <span v-if="props.label" class="radio-label">{{ props.label }}</span>
    </label>
  </div>
</template>

<style scoped lang="scss">
.radio {
  position: relative;
  display: inline-block;
  cursor: pointer;

  .radio-inner-wrap {
    display: flex;
    align-items: center;

    .radio-inner {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 20px;
      width: 20px;
      background: var(--checkbox-bg-color);
      border-radius: 50%;
      border: 1px solid var(--checkbox-border-color);
      overflow: hidden;
      color: var(--white);
      box-sizing: border-box;
      transition: box-shadow 0.3s;

      input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
        z-index: 3;

        &:checked {
          + svg {
            transform: scale(1);
          }

          ~ .inner-overlay {
            transform: scale(1.1);
            border-radius: 0.35rem;
          }
        }
      }

      svg {
        position: relative;
        left: 0.5px;
        transform: scale(0);
        transition: transform 0.3s;
        transition-delay: 0.15s;
        z-index: 2;

        :deep(circle) {
          stroke-width: 4px !important;
        }
      }

      .inner-overlay {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        transform: scale(0);
        background: var(--checkbox-overlay-bg-color-default);
        border-radius: 50%;
        transition: transform 0.3s, border 0.3s;
        z-index: 1;
      }
    }

    .radio-label {
      font-family: var(--font);
      font-size: 0.9rem;
      color: var(--light-text);
      margin-left: 0.25rem;
      cursor: pointer;
    }
  }

  &:focus-within {
    .radio-inner {
      box-shadow: var(--light-box-shadow-md);
    }
  }

  &.is-default {
    .radio-inner-wrap {
      .radio-inner {
        svg {
          color: var(--checkbox-symbol-color-default);
        }
      }
    }
  }

  &.is-primary {
    .radio-inner-wrap {
      .radio-inner {
        svg {
          color: var(--primary);
        }
      }
    }
  }

  &.is-success {
    .radio-inner-wrap {
      .radio-inner {
        svg {
          color: var(--success);
        }
      }
    }
  }

  &.is-info {
    .radio-inner-wrap {
      .radio-inner {
        svg {
          color: var(--info);
        }
      }
    }
  }

  &.is-warning {
    .radio-inner-wrap {
      .radio-inner {
        svg {
          color: var(--warning);
        }
      }
    }
  }

  &.is-danger {
    .radio-inner-wrap {
      .radio-inner {
        svg {
          color: var(--danger);
        }
      }
    }
  }
}
</style>
