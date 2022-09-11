<script setup lang="ts">
import { computed } from 'vue'

export interface CheckboxEmits {
  (e: 'update:modelValue', value: (string | number)[]): void
}

export type CheckboxColor =
  | 'default'
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'

export interface CheckboxProps {
  name: string
  color?: CheckboxColor
  value?: string | number
  modelValue?: (string | number)[]
  disabled?: boolean
  rounded?: boolean
  label?: string
}

const emit = defineEmits<CheckboxEmits>()
const props = withDefaults(defineProps<CheckboxProps>(), {
  color: 'primary',
  value: undefined,
  modelValue: () => [],
  disabled: false,
  rounded: false,
  label: undefined,
})

const checked = computed(() => props.modelValue.includes(props.value))

function change() {
  const values = [...props.modelValue]

  if (checked.value) {
    values.splice(values.indexOf(props.value), 1)
  } else {
    values.push(props.value)
  }
  emit('update:modelValue', values)
}

const checkboxClasses = computed(() => [
  props.color && `is-${props.color}`,
  props.rounded && `is-rounded`,
])
</script>

<template>
  <div class="checkbox" :class="checkboxClasses">
    <label :for="`checkbox-${props.name}`" class="checkbox-inner-wrap">
      <span class="checkbox-inner">
        <input
          :id="`checkbox-${props.name}`"
          :value="props.value"
          :checked="checked"
          type="checkbox"
          @change="change"
        />
        <i class="iconify rem-70" data-icon="feather:check"></i>
        <span class="inner-overlay"></span>
      </span>
      <span v-if="props.label" class="checkbox-label">{{ props.label }}</span>
    </label>
  </div>
</template>

<style scoped lang="scss">
.checkbox {
  position: relative;
  display: inline-block;
  cursor: pointer;

  .checkbox-inner-wrap {
    display: flex;
    align-items: center;

    .checkbox-inner {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 20px;
      width: 20px;
      background: var(--checkbox-bg-color);
      border-radius: 0.35rem;
      //border: 1px solid var(--checkbox-border-color);
      overflow: hidden;
      color: var(--white);
      box-sizing: content-box;
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
            transform: translateY(0);
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
        transform: translateY(20px);
        transition: transform 0.3s;
        transition-delay: 0.15s;
        z-index: 2;

        :deep(path) {
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

    .checkbox-label {
      font-family: var(--font);
      font-size: 0.9rem;
      color: var(--light-text);
      margin-left: 0.5rem;
      cursor: pointer;
    }
  }

  &:focus-within {
    .checkbox-inner {
      box-shadow: var(--light-box-shadow-md);
    }
  }

  &.is-rounded {
    .checkbox-inner-wrap {
      .checkbox-inner {
        border-radius: 50%;
        box-sizing: border-box;

        .inner-overlay {
          border-radius: 50% !important;
        }
      }
    }
  }

  &.is-default {
    .checkbox-inner-wrap {
      .checkbox-inner {
        svg {
          color: var(--checkbox-symbol-color-default);
        }
      }
    }
  }

  &.is-primary {
    .checkbox-inner-wrap {
      .checkbox-inner {
        .inner-overlay {
          background: var(--primary);
        }
      }
    }
  }

  &.is-success {
    .checkbox-inner-wrap {
      .checkbox-inner {
        .inner-overlay {
          background: var(--success);
        }
      }
    }
  }

  &.is-info {
    .checkbox-inner-wrap {
      .checkbox-inner {
        .inner-overlay {
          background: var(--info);
        }
      }
    }
  }

  &.is-warning {
    .checkbox-inner-wrap {
      .checkbox-inner {
        .inner-overlay {
          background: var(--warning);
        }
      }
    }
  }

  &.is-danger {
    .checkbox-inner-wrap {
      .checkbox-inner {
        .inner-overlay {
          background: var(--danger);
        }
      }
    }
  }
}
</style>
