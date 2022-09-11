<script setup lang="ts">
import { themeUtilities } from '/@src/data/docs/setup/utilities'
</script>

<template>
  <div class="theme-utilities pb-6">
    <DemoTitle
      title="Theme utilities"
      subtitle="Utility CSS classes and how to use them"
    />

    <div class="max-w-6 mb-5">
      <p class="paragraph">
        Vulk comes with some built-in utilities to help you code without writing
        unecessary CSS. Some utilities have accepted values that are also listed
        here. You'll find additional useful utilities by digging into the
        template code.
      </p>
    </div>

    <div class="theme-utilities-inner">
      <DemoUtilities :utilities="themeUtilities" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.theme-utilities {
  position: relative;
}
</style>
