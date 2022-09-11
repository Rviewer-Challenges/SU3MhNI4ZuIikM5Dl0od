<script setup lang="ts">
import { computed } from 'vue'

export interface ToggleEmits {
  (e: 'update:modelValue', value: (string | number)[]): void
}

export type ToggleFlavor = 'thin' | 'switch'

export type ToggleColor =
  | 'default'
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'

export interface ToggleProps {
  flavor?: ToggleFlavor
  name: string
  color?: ToggleColor
  value?: string | number
  modelValue?: (string | number)[]
  disabled?: boolean
  icon?: boolean
}

const emit = defineEmits<ToggleEmits>()
const props = withDefaults(defineProps<ToggleProps>(), {
  flavor: 'thin',
  color: 'primary',
  value: undefined,
  modelValue: () => [],
  disabled: false,
  icon: false,
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

const toggleClasses = computed(() => [
  props.flavor && `is-${props.flavor}`,
  props.color && `is-${props.color}`,
])
</script>

<template>
  <label
    :for="`toggle-${props.name}`"
    class="ninja-toggle"
    :class="toggleClasses"
  >
    <slot></slot>

    <input
      :id="`toggle-${props.name}`"
      :value="props.value"
      :checked="checked"
      type="checkbox"
      @change="change"
    />
    <span class="no-margin">
      <span class="track">
        <span class="track-inner"></span>
        <span class="track-knob">
          <i
            v-if="props.icon"
            class="inactive iconify"
            data-icon="feather:circle"
          ></i>
          <i
            v-if="props.icon"
            class="active iconify"
            data-icon="feather:check"
          ></i>
        </span>
      </span>
    </span>
  </label>
</template>

<style lang="scss" scoped>
.ninja-toggle {
  position: relative;

  &.is-primary {
    input:checked {
      + span span.track .track-knob {
        background: var(--primary);
        border-color: var(--primary);
        box-shadow: var(--primary-box-shadow);
      }
    }
  }

  &.is-success {
    input:checked {
      + span span.track .track-knob {
        background: var(--success);
        border-color: var(--success);
        box-shadow: var(--success-box-shadow);
      }
    }
  }

  &.is-info {
    input:checked {
      + span span.track .track-knob {
        background: var(--info);
        border-color: var(--info);
        box-shadow: var(--info-box-shadow);
      }
    }
  }

  &.is-warning {
    input:checked {
      + span span.track .track-knob {
        background: var(--warning);
        border-color: var(--warning);
        box-shadow: var(--warning-box-shadow);
      }
    }
  }

  &.is-danger {
    input:checked {
      + span span.track .track-knob {
        background: var(--danger);
        border-color: var(--danger);
        box-shadow: var(--danger-box-shadow);
      }
    }
  }

  &.is-thin {
    input {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      opacity: 0;

      &:checked {
        + span {
          span {
            &.track {
              .track-knob {
                margin-left: 22px;
                transform: rotate(360deg);

                i {
                  opacity: 1;
                }

                svg {
                  &.inactive {
                    display: none;
                    stroke-width: var(--dark-text);
                  }

                  &.active {
                    display: block;
                    stroke: var(--white-smoke);
                    color: var(--white-smoke);
                  }
                }
              }
            }
          }
        }
      }
    }

    span {
      display: block;
      cursor: pointer;

      span {
        display: block;

        &.track {
          position: relative;

          .track-inner {
            height: 11px;
            width: 42px;
            background: var(--custom-toggle-track-bg);
            border-radius: 100px;
          }

          .track-knob {
            position: absolute;
            top: -8px;
            left: -2px;
            height: 26px;
            width: 26px;
            border-radius: 50%;
            border: 1px solid var(--custom-toggle-knob-border);
            box-shadow: var(--light-box-shadow);
            background: var(--custom-toggle-knob-bg);
            display: flex;
            justify-content: center;
            align-items: center;
            transform: rotate(0);
            transition: all 0.3s;

            i {
              color: var(--custom-toggle-knob-color);
              opacity: 0;
              transition: all 0.3s;
            }

            .iconify {
              color: var(--custom-toggle-knob-color);
            }

            svg {
              height: 14px;
              width: 14px;
              stroke-width: 2px;
              stroke: var(--custom-toggle-knob-color);

              &.inactive {
                display: block;
              }

              &.active {
                display: none;
              }
            }
          }
        }
      }
    }
  }

  &.is-switch {
    input {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      opacity: 0;

      &:checked {
        + span {
          span {
            &.track {
              .track-knob {
                margin-left: 23px;
                transform: rotate(360deg);

                i {
                  opacity: 1;
                }

                svg {
                  &.inactive {
                    display: none;
                    stroke-width: var(--dark-text);
                  }

                  &.active {
                    display: block;
                    stroke: var(--white-smoke);
                    color: var(--white-smoke);
                  }
                }
              }
            }
          }
        }
      }
    }

    span {
      display: block;
      cursor: pointer;

      span {
        display: block;

        &.track {
          position: relative;

          .track-inner {
            height: 26px;
            width: 50px;
            background: var(--custom-toggle-track-bg);
            border-radius: 100px;
          }

          .track-knob {
            position: absolute;
            top: 2px;
            left: 2px;
            height: 22px;
            width: 22px;
            border-radius: 50%;
            border: 1px solid var(--custom-toggle-knob-border);
            box-shadow: var(--light-box-shadow);
            background: var(--custom-toggle-knob-bg);
            display: flex;
            justify-content: center;
            align-items: center;
            transform: rotate(0);
            transition: all 0.3s;

            i {
              color: var(--custom-toggle-knob-color);
              opacity: 0;
              transition: all 0.3s;
            }

            .iconify {
              color: var(--custom-toggle-knob-color);
            }

            svg {
              height: 12px;
              width: 12px;
              stroke-width: 2px;
              stroke: var(--custom-toggle-knob-color);

              &.inactive {
                display: block;
              }

              &.active {
                display: none;
              }
            }
          }
        }
      }
    }
  }
}
</style>
