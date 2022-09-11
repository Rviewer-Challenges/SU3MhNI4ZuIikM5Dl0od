<script setup lang="ts">
import { computed } from 'vue'

export interface InputEmits {
  (e: 'update:modelValue', value: string | number): void
}

export interface InputProps {
  type?: string
  placeholder?: string
  value?: string | number
  modelValue?: string | number
  readonly?: boolean
  rounded?: boolean
  inverted?: boolean
}

const emit = defineEmits<InputEmits>()
const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  placeholder: undefined,
  value: undefined,
  modelValue: undefined,
  readonly: false,
  rounded: false,
  inverted: false,
})

const inputClasses = computed(() => [
  props.rounded && `is-rounded`,
  props.inverted && `is-inverted`,
])

function change(e: any) {
  const value = e.target.value

  emit('update:modelValue', value)
  console.log(value)
}
</script>

<template>
  <input
    :value="modelValue"
    :type="props.type"
    :placeholder="props.placeholder"
    :readonly="props.readonly"
    aria-label="input"
    class="input"
    :class="inputClasses"
    @keyup="change($event)"
  />
</template>

<style lang="scss" scoped>
.input {
  color: var(--input-base-color);
  background: var(--input-base-bg-color);
  border-color: var(--input-base-border-color);
  border-radius: 0.65rem;
  padding-bottom: calc(0.6em - 1px);
  box-shadow: none;
  transition: border 0.3s, box-shadow 0.3s;

  &:focus {
    box-shadow: var(--light-box-shadow);
    border-color: var(--input-base-focus-color);
  }

  &::placeholder {
    color: var(--input-placeholder-color);
  }

  &.is-rounded {
    border-radius: 500rem;
  }

  &.is-inverted {
    color: var(--input-inverted-color);
    background: var(--input-inverted-bg-color);
    border-color: var(--input-inverted-border-color);

    &:focus {
      box-shadow: var(--light-box-shadow);
      border-color: var(--input-inverted-border-color-hover);
    }

    &::placeholder {
      color: var(--input-inverted-placeholder-color);
    }
  }
}

.has-icon .input {
  padding-left: 38px;
}

.has-validation {
  .input {
    padding-right: 38px;
  }

  &.is-valid {
    .input {
      border-color: var(--success) !important;
    }
  }

  &.is-invalid {
    .input {
      border-color: var(--danger) !important;
    }
  }
}
</style>
