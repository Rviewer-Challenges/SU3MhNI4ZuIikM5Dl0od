<script setup lang="ts"></script>

<template>
  <div class="table-cell-flex">
    <slot name="media"></slot>
    <div class="flex-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.table-cell-flex {
  display: flex;
  align-items: center;

  .flex-content {
    margin-left: 0.5rem;
  }
}
</style>
