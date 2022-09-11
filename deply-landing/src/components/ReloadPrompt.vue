<script setup lang="ts">
import { useRegisterSW } from 'virtual:pwa-register/vue'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export interface VReloadPromptProps {
  appName: string
}

const loading = ref(false)
const props = defineProps<VReloadPromptProps>()

const { t } = useI18n()
const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW()

const close = async () => {
  loading.value = false
  offlineReady.value = false
  needRefresh.value = false
}
const update = async () => {
  loading.value = true
  await updateServiceWorker()
  loading.value = false
}
</script>

<template>
  <Transition name="from-bottom">
    <Card
      v-if="offlineReady || needRefresh"
      class="pwa-toast"
      role="alert"
      radius="smooth"
    >
      <div class="pwa-message">
        <slot name="logo"></slot>
        <div class="ml-4">
          <p v-if="offlineReady" class="paragraph rem-90">
            {{ t('offline-ready', { appName: props.appName }) }}
          </p>
          <p v-else class="paragraph rem-90">
            {{ t('need-refresh', { appName: props.appName }) }}
          </p>
        </div>
      </div>
      <Buttons>
        <Button
          v-if="needRefresh"
          color="primary"
          icon="ion:reload-outline"
          :loading="loading"
          raised
          @click="() => update()"
        >
          {{ t('reload-button') }}
        </Button>
        <Button icon="feather:x" @click="close">
          {{ t('close-button') }}
        </Button>
      </Buttons>
    </Card>
  </Transition>
</template>

<style lang="scss" scoped>
.pwa-toast {
  position: fixed;
  right: 0;
  bottom: 0;
  max-width: 350px;
  margin: 16px;
  border: 1px solid #8885;
  border-radius: 4px;
  z-index: 9999;
  text-align: left;
  box-shadow: var(--spread-shadow);
}

.pwa-message {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.1rem;

  :deep(img) {
    max-width: 42px;
  }
}

:deep(.button) {
  min-width: 90px;
  min-height: 34px;
}
</style>
