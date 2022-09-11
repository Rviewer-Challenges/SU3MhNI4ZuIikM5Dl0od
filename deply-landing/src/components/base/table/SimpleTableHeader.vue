<script setup lang="ts"></script>

<template>
  <th>
    <slot></slot>
  </th>
</template>

<style lang="scss" scoped>
th {
  padding: 0.75rem;
  font-size: 0.85rem;
  font-weight: 500;
  text-transform: uppercase;
  border-color: var(--table-border-color);
  color: var(--table-th-color);
}
</style>
