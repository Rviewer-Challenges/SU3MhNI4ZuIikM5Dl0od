<script setup lang="ts">
import { useLayout } from '/@src/composable/useLayout'

const { transition } = useLayout()
</script>

<template>
  <NavbarG fixed :inverted="true" />

  <RouterView v-slot="{ Component }">
    <Transition :name="transition" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>

  <BackToTop />
</template>
