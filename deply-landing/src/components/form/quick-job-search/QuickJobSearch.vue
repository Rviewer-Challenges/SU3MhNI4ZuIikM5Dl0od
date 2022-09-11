<script setup lang="ts">
const options = [
  {
    value: 'Hamburger',
    label: 'Hamburger',
  },
  {
    value: 'Cheeseburger',
    label: 'Cheeseburger',
  },
  {
    value: 'Burito',
    label: 'Burito',
  },
]
</script>

<template>
  <form>
    <div class="flex-form is-relative z-1">
      <Field grouped>
        <Control icon="feather:search" expanded>
          <VInput placeholder="What are you looking for?" />
        </Control>
        <Control>
          <VSelect :options="options" placeholder="All" />
        </Control>
      </Field>
      <div>
        <Button color="primary" bold raised fullwidth>Quick Search</Button>
      </div>
    </div>
  </form>
</template>

<style scoped lang="scss">
.flex-form {
  :deep(.control) {
    .form-icon {
      height: 48px;
      width: 48px;

      .iconify {
        font-size: 1.25rem;
      }
    }
  }

  :deep(.input) {
    height: 48px;
    padding-left: 48px;
  }

  :deep(.select) {
    select {
      height: 48px;
    }

    &::after {
      top: 58%;
    }
  }
}

@media only screen and (max-width: 767px) {
  .flex-form {
    margin-bottom: 2rem;

    :deep(.control) {
      margin-right: 0 !important;
      margin-bottom: 0.75rem !important;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .flex-form {
    max-width: 580px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
