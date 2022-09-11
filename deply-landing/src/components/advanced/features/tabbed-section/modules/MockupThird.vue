<script setup lang="ts"></script>

<template>
  <div class="ui-mockup is-keywords">
    <div class="toolbar">
      <h3>Keywords</h3>
      <Field>
        <Control icon="feather:search">
          <VInput placeholder="Search Keywords..." />
        </Control>
      </Field>
    </div>
    <div class="keywords">
      <div class="keyword">
        <div class="word">
          <span>Audio headset</span>
        </div>
        <div class="sales">
          <span>$1,243.12</span>
        </div>
      </div>
      <div class="keyword">
        <div class="word">
          <span>Earphones</span>
        </div>
        <div class="sales">
          <span>$3,518.29</span>
        </div>
      </div>
      <div class="keyword">
        <div class="word">
          <span>Audio Headset</span>
        </div>
        <div class="sales">
          <span>$971.47</span>
        </div>
      </div>
    </div>
    <div class="button-wrap">
      <Button color="primary" fullwidth bold raised>Add Keyword</Button>
    </div>
  </div>
</template>
