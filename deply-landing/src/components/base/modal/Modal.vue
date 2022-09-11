<script setup lang="ts">
import { ref, watchEffect, onUnmounted } from 'vue'
//import { useI18n } from 'vue-i18n'

export type ModalSize = 'small' | 'medium' | 'large' | 'big'
export type ModalAction = 'center' | 'right'

export interface ModalEmits {
  (e: 'close'): void
}

export interface ModalProps {
  title: string
  size?: ModalSize
  actions?: ModalAction
  open?: boolean
  rounded?: boolean
  noscroll?: boolean
  noclose?: boolean
  tabs?: boolean
  cancelLabel?: string
}

const emit = defineEmits<ModalEmits>()
const props = withDefaults(defineProps<ModalProps>(), {
  size: undefined,
  actions: undefined,
  cancelLabel: undefined,
})

//const { t } = useI18n()
const wasOpen = ref(false)
//const cancelLabel = computed(() => props.cancelLabel || t('cancel-label'))

const checkScroll = () => {
  if (props.noscroll && props.open) {
    document.documentElement.classList.add('no-scroll')
    wasOpen.value = true
  } else if (wasOpen.value && props.noscroll && !props.open) {
    document.documentElement.classList.remove('no-scroll')
    wasOpen.value = false
  }
}

watchEffect(checkScroll)
onUnmounted(() => {
  document.documentElement.classList.remove('no-scroll')
})
</script>

<!--i18n lang="yaml">
de:
  cancel-label: 'Abbrechen'
en:
  cancel-label: 'Cancel'
es-MX:
  cancel-label: 'Cancelar'
es:
  cancel-label: 'Cancelar'
fr:
  cancel-label: 'Annuler'
zh-CN:
  cancel-label: '取消'
</i18n-->

<template>
  <teleport to="body">
    <div
      :class="[open && 'is-active', size && `is-${size}`]"
      class="modal v-modal"
    >
      <div
        class="modal-background v-modal-close"
        @click="() => noclose === false && emit('close')"
        @keydown.space.prevent="() => noclose === false && emit('close')"
      ></div>
      <div class="modal-content">
        <div class="modal-card">
          <header class="modal-card-head">
            <Title tag="h3" :size="6" weight="semi" narrow>
              <slot name="title">{{ title }}</slot>
            </Title>

            <button
              class="v-modal-close ml-auto"
              aria-label="close"
              @click="emit('close')"
            >
              <i aria-hidden="true" class="iconify" data-icon="feather:x"></i>
            </button>
          </header>
          <div class="modal-card-body" :class="[props.tabs && 'has-tabs']">
            <div class="inner-content">
              <slot name="content"></slot>
            </div>
          </div>
          <div
            class="modal-card-foot"
            :class="[
              actions === 'center' && 'is-centered',
              actions === 'right' && 'is-end',
            ]"
          >
            <slot name="cancel">
              <Button
                raised
                :long="2"
                :rounded="rounded"
                @click="emit('close')"
                @keydown.space.prevent="() => emit('close')"
              >
                Cancel
              </Button>
            </slot>
            <slot name="action"></slot>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<style lang="scss" scoped>
.modal {
  transition: all 0.5s;

  &.is-big {
    .modal-content {
      width: 100%;
      max-width: 840px;

      .modal-card {
        width: 100%;
      }
    }
  }

  &.is-large {
    .modal-content {
      width: 100%;
      max-width: 720px;

      .modal-card {
        width: 100%;
      }
    }
  }

  &.is-medium {
    .modal-content {
      width: 100%;
      max-width: 640px;

      .modal-card {
        width: 100%;
      }
    }
  }

  &.is-small {
    .modal-content {
      width: 100%;
      max-width: 420px;

      .modal-card {
        width: 100%;
      }
    }
  }

  .modal-content {
    transition: all 0.4s;
  }
}

.v-modal {
  &.is-active {
    z-index: 200 !important;

    .v-modal-close {
      cursor: pointer;
    }
  }

  .v-modal-card {
    width: 100%;
    background: var(--modal-bg-color);
    border: 1px solid var(--modal-border-color);
    border-radius: 8px;
    padding: 40px;
  }

  .modal-background {
    background-color: var(--night);
    opacity: 0.8;
  }

  .modal-content {
    transform: scale(1) !important;
    opacity: 1 !important;
    max-width: 540px;
    overflow-x: hidden;
    animation: fadedown 0.5s;
    margin: 0;
    padding: 0 10px;

    .modal-card {
      max-width: 100%;
      margin: 0 auto;

      &.is-rounded {
        border-radius: 12px;
      }

      .modal-card-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 20px;
        background: var(--modal-bg-color);
        border-bottom-color: var(--modal-border-color);
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;

        &.no-border {
          border-bottom-color: transparent;
        }

        .v-modal-close {
          display: flex;
          justify-content: center;
          align-items: center;
          background: none;
          border-color: transparent;
          width: 22px;
          height: 22px;
          padding: 0;
          outline: none !important;

          &:hover {
            svg {
              color: var(--primary);
            }
          }

          svg {
            width: 22px;
            height: 22px;
            color: var(--light-text);
            transition: color 0.3s;
          }
        }
      }

      .modal-card-body {
        background: var(--modal-bg-color);

        .modal-form {
          padding: 10px 0 20px;
        }

        &.has-tabs {
          padding: 0;
          overflow-x: hidden;

          .tabs {
            overflow-x: auto;

            &::-webkit-scrollbar {
              height: 5px !important;
            }

            &::-webkit-scrollbar-thumb {
              border-radius: 10px !important;
              background: rgb(0 0 0 / 20%) !important;
            }

            a {
              padding: 0.75em 1em;
            }
          }
        }
      }

      .modal-card-foot {
        background-color: var(--modal-bg-color);
        padding: 0 1.5rem 1rem;
        border: none;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;

        &.no-border {
          border-top-color: transparent;
        }

        &.is-start {
          justify-content: flex-start !important;
        }

        &.is-centered {
          justify-content: center !important;
        }

        &.is-end {
          justify-content: flex-end !important;
        }
      }
    }
  }
}

@media screen and (min-width: 769px) {
  .modal.modal-lg {
    .modal-card,
    .modal-content {
      width: 800px !important;
    }
  }

  .modal.modal-sm {
    .modal-card,
    .modal-content {
      width: 400px !important;
    }
  }
}
</style>
