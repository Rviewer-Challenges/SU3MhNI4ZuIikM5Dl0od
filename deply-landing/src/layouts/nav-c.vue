<script setup lang="ts">
import { useLayout } from '/@src/composable/useLayout'

const { transition } = useLayout()
</script>

<template>
  <NavbarC fixed />

  <RouterView v-slot="{ Component }">
    <Transition :name="transition" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>

  <BackToTop />
</template>
