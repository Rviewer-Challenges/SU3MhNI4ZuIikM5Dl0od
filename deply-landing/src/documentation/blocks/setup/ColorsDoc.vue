<script setup lang="ts"></script>

<template>
  <div class="theme-colors pb-6">
    <DemoTitle title="Main colors" subtitle="Main theme and primary colors" />

    <div class="columns is-multiline py-4">
      <div class="column is-4">
        <DemoColor color="primary" />
      </div>
      <div class="column is-4">
        <DemoColor color="secondary" />
      </div>
      <div class="column is-4">
        <DemoColor color="info" />
      </div>
      <div class="column is-4">
        <DemoColor color="success" />
      </div>
      <div class="column is-4">
        <DemoColor color="warning" />
      </div>
      <div class="column is-4">
        <DemoColor color="danger" />
      </div>
    </div>

    <DemoTitle
      title="Additional colors"
      subtitle="Additional and secondary colors"
    />

    <div class="columns is-multiline py-4">
      <div class="column is-4">
        <DemoColor color="dark" />
      </div>
      <div class="column is-4">
        <DemoColor color="dark-bg" />
      </div>
      <div class="column is-4">
        <DemoColor color="green" />
      </div>
      <div class="column is-4">
        <DemoColor color="blue" />
      </div>
      <div class="column is-4">
        <DemoColor color="purple" />
      </div>
      <div class="column is-4">
        <DemoColor color="yellow" />
      </div>
      <div class="column is-4">
        <DemoColor color="orange" />
      </div>
      <div class="column is-4">
        <DemoColor color="red" />
      </div>
    </div>

    <DemoTitle title="Text colors" subtitle="typography and text colors" />

    <div class="columns is-multiline py-4">
      <div class="column is-4">
        <DemoColor color="light-text" />
      </div>
      <div class="column is-4">
        <DemoColor color="medium-text" />
      </div>
      <div class="column is-4">
        <DemoColor color="dark-text" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.theme-colors {
  position: relative;
}
</style>
