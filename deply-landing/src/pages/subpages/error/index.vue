<route lang="yaml">
meta:
  layout: minimal
</route>

<script setup lang="ts"></script>

<template>
  <div>
    <ErrorHero color="grey" pattern>
      <template #error>
        <IllustrationError />
      </template>
    </ErrorHero>
  </div>
</template>
