<script setup lang="ts">
export interface SubscriptionCompactProps {
  label: string
  placeholder: string
}

const props = defineProps<SubscriptionCompactProps>()
</script>

<template>
  <div class="subscribe-compact">
    <form>
      <Field grouped>
        <Control expanded>
          <VInput :placeholder="props.placeholder" />
        </Control>
        <Control>
          <Button size="form" color="primary" :long="1" raised bold>
            {{ props.label }}
          </Button>
        </Control>
      </Field>
    </form>
  </div>
</template>

<style scoped lang="scss">
.subscribe-compact {
  :deep(.field) {
    border: 2px solid var(--input-base-border-color);
    padding: 0.25rem;
    border-radius: 0.85rem;
    transition: box-shadow 0.3s, border-color 0.3s;
    background-color: var(--input-base-bg-color);

    &:focus-within {
      box-shadow: var(--light-box-shadow);
      border-color: var(--primary);
    }
  }

  :deep(.control) {
    .form-icon {
      height: 48px !important;
      width: 48px !important;
      font-size: 1.15rem !important;
    }
  }

  :deep(.input) {
    height: 48px !important;
    font-size: 1.1rem !important;
    border: none;
    box-shadow: none !important;
  }

  :deep(.button) {
    height: 48px !important;
  }
}
</style>
