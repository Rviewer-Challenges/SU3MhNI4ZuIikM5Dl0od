<script setup lang="ts"></script>

<template>
  <tr>
    <slot></slot>
  </tr>
</template>

<style lang="scss" scoped>
.is-striped {
  tr {
    &:not(.is-selected):nth-child(even) {
      background: var(--table-striped-bg-color);
    }
  }
}
</style>
