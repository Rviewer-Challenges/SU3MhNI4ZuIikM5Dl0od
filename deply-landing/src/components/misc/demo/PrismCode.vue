<script lang="ts">
import 'prismjs'
import 'prism-theme-vars/base.css'
import '/@src/scss/css-variables/components/base/_prism.scss'
</script>

<script setup lang="ts">
import Prism from 'vue-prism-component'

export interface DocCodeProps {
  code: string
  language?: string
}

const props = withDefaults(defineProps<DocCodeProps>(), {
  language: 'javascript',
})
</script>

<template>
  <div class="code-wrapper">
    <div class="code-header">
      <span class="code-dot bg-success"></span>
      <span class="code-dot bg-warning"></span>
      <span class="code-dot bg-danger"></span>
    </div>
    <div class="code-body">
      <Prism :language="props.language">{{ props.code }}</Prism>
    </div>
  </div>
</template>

<style lang="scss">
.code-body .tag:not(body) {
  background: none !important;
}
</style>

<style lang="scss" scoped>
:deep(pre[class*='language-']) {
  background: none !important;

  &::-webkit-scrollbar {
    height: 10px !important;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgb(0 0 0 / 20%);
  }
}

:deep(code[class*='language-']),
:deep(pre.language-javascript) {
  color: var(--primary) !important;
  font-size: 0.85rem !important;

  .number {
    font-size: inherit;
    background: none;
    display: initial;
    margin: 0;
    padding: 0;
  }

  .tag:not(body) {
    font-size: inherit;
    display: initial;
    padding: initial;
    height: initial;
    line-height: initial;
  }
}

.code-wrapper {
  width: 100%;
  background: var(--card-bg-color);
  border: 1px solid var(--card-border-color);
  border-radius: 1rem;

  .code-header {
    height: 3rem;
    display: flex;
    align-items: center;
    padding: 0 1rem;

    .code-dot {
      height: 0.75rem;
      width: 0.75rem;
      border-radius: 50%;
      margin-right: 0.35rem;
    }
  }

  .code-body {
    margin-top: -2rem;
  }
}
</style>
