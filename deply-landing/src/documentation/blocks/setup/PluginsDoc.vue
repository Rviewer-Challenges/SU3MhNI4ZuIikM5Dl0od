<script setup lang="ts">
import { plugins } from '/@src/data/docs/setup/plugins'
</script>

<template>
  <div class="theme-plugins pb-6">
    <DemoTitle
      title="Theme plugins"
      subtitle="Vue and javascript plugins included with Vulk"
    />

    <div class="max-w-6 mb-5">
      <p class="paragraph">
        Vulk comes with some high quality plugins to help you produce great and
        clean code. All Vulk plugins are listed below with a link to their
        documentation. Take the time to visit each plugin documentation to get
        the most out of it.
      </p>
    </div>

    <DemoPlugins :items="plugins" />
  </div>
</template>

<style scoped lang="scss">
.theme-plugins {
  position: relative;
  max-width: 1040px;
  margin: 0 auto;
}
</style>
