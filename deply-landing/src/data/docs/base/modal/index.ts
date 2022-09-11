export const modalProps = `
<script setup lang="ts">
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
</script>
`

export const modalBase = `
<script setup lang="ts">
import { ref } from 'vue'
const modalBaseOpen = ref(false)
</script>

<template>
  <!--Modal trigger-->
  <Button bold @click="modalBaseOpen = true">Open Modal</Button>

  <!--Modal-->
  <Modal
    title="Premium features"
    :open="modalBaseOpen"
    actions="center"
    noscroll
    @close="modalBaseOpen = false"
  >
    <template #content>
      <PlaceholderSection
        title="Go Premium"
        subtitle="Unlock more features and business tools by going premium"
      >
        <template #image>
          <DarkImage
            src="/@src/assets/illustrations/features/vr.svg"
            src-dark="/@src/assets/illustrations/features/vr-dark.svg"
            alt="dark image"
          />
        </template>
      </PlaceholderSection>
    </template>
    <template #action>
      <Button color="primary" :long="2" raised>Confirm</Button>
    </template>
  </Modal>
</template>
`

export const modalSmall = `
<script setup lang="ts">
import { ref } from 'vue'
const modalSmallOpen = ref(false)
</script>

<template>
  <!--Modal trigger-->
  <Button bold @click="modalSmallOpen = true">Open Modal</Button>

  <!--Modal-->
  <Modal
    title="Small Modal"
    :open="modalSmallOpen"
    size="small"
    actions="center"
    noscroll
    @close="modalSmallOpen = false"
  >
    <template #content>
      <PlaceholderSection
        title="Go Premium"
        subtitle="Unlock more features and business tools by going premium"
      >
        <template #image>
          <DarkImage
            src="/@src/assets/illustrations/features/vr.svg"
            src-dark="/@src/assets/illustrations/features/vr-dark.svg"
            alt="dark image"
          />
        </template>
      </PlaceholderSection>
    </template>
    <template #action>
      <Button color="primary" :long="2" raised>Confirm</Button>
    </template>
  </Modal>
</template>
`

export const modalMedium = `
<script setup lang="ts">
import { ref } from 'vue'
const modalMediumOpen = ref(false)
</script>

<template>
  <!--Modal trigger-->
  <Button bold @click="modalMediumOpen = true">Open Modal</Button>

  <!--Modal-->
  <Modal
    title="Medium Modal"
    :open="modalMediumOpen"
    size="medium"
    actions="center"
    noscroll
    @close="modalMediumOpen = false"
  >
    <template #content>
      <PlaceholderSection
        title="Go Premium"
        subtitle="Unlock more features and business tools by going premium"
      >
        <template #image>
          <DarkImage
            src="/@src/assets/illustrations/features/vr.svg"
            src-dark="/@src/assets/illustrations/features/vr-dark.svg"
            alt="dark image"
          />
        </template>
      </PlaceholderSection>
    </template>
    <template #action>
      <Button color="primary" :long="2" raised>Confirm</Button>
    </template>
  </Modal>
</template>
`

export const modalLarge = `
<script setup lang="ts">
import { ref } from 'vue'
const modalLargeOpen = ref(false)
</script>

<template>
  <!--Modal trigger-->
  <Button bold @click="modalLargeOpen = true">Open Large Modal</Button>

  <!--Modal-->
  <Modal
    title="Large Modal"
    :open="modalLargeOpen"
    size="large"
    actions="center"
    noscroll
    @close="modalLargeOpen = false"
  >
    <template #content>
      <PlaceholderSection
        title="Go Premium"
        subtitle="Unlock more features and business tools by going premium"
      >
        <template #image>
          <DarkImage
            src="/@src/assets/illustrations/features/vr.svg"
            src-dark="/@src/assets/illustrations/features/vr-dark.svg"
            alt="dark image"
          />
        </template>
      </PlaceholderSection>
    </template>
    <template #action>
      <Button color="primary" :long="2" raised>Confirm</Button>
    </template>
  </Modal>
</template>
`

export const modalBig = `
<script setup lang="ts">
import { ref } from 'vue'
const modalBigOpen = ref(false)
</script>

<template>
  <!--Modal trigger-->
  <Button bold @click="modalBigOpen = true">Open Large Modal</Button>

  <!--Modal-->
  <Modal
    title="Big Modal"
    :open="modalBigOpen"
    size="big"
    actions="center"
    noscroll
    @close="modalBigOpen = false"
  >
    <template #content>
      <PlaceholderSection
        title="Go Premium"
        subtitle="Unlock more features and business tools by going premium"
      >
        <template #image>
          <DarkImage
            src="/@src/assets/illustrations/features/vr.svg"
            src-dark="/@src/assets/illustrations/features/vr-dark.svg"
            alt="dark image"
          />
        </template>
      </PlaceholderSection>
    </template>
    <template #action>
      <Button color="primary" :long="2" raised>Confirm</Button>
    </template>
  </Modal>
</template>
`
