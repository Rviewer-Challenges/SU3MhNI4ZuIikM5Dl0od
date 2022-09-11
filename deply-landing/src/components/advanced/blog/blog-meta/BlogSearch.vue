<script setup lang="ts"></script>

<template>
  <div class="blog-search">
    <Control icon="feather:search">
      <VInput placeholder="Search posts..." />
    </Control>
  </div>
</template>

<style scoped lang="scss">
.blog-search {
  position: relative;
  margin-bottom: 3rem;

  :deep(.control) {
    .form-icon {
      height: 52px;
      width: 52px;
      font-size: 1.5rem;
    }
  }

  :deep(.input) {
    height: 52px;
    padding-left: 52px;
  }
}
</style>
