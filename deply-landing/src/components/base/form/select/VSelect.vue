<script setup lang="ts">
import { computed } from 'vue'

export interface SelectEmits {
  (e: 'update:modelValue', value: string | number): void
}

export interface SelectOption {
  value: string | number
  label: string
}

export interface SelectProps {
  options: SelectOption[]
  value?: string | number
  modelValue?: string | number
  placeholder?: string
  readonly?: boolean
  rounded?: boolean
}

const emit = defineEmits<SelectEmits>()
const props = withDefaults(defineProps<SelectProps>(), {
  value: undefined,
  modelValue: undefined,
  placeholder: '',
  readonly: false,
  rounded: false,
})

const selectClasses = computed(() => [props.rounded && `is-rounded`])

function change(e: any) {
  const value = e.target.value

  emit('update:modelValue', value)
  console.log(value)
}
</script>

<template>
  <div class="select" :class="selectClasses">
    <select :value="modelValue" @change="change($event)">
      <option>{{ props.placeholder }}</option>
      <option
        v-for="(option, index) in props.options"
        :key="index"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<style scoped lang="scss">
.select {
  position: relative;
  width: 100%;

  select {
    width: 100%;
    font-family: var(--font);
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
  }

  &:not(.is-multiple):not(.is-loading) {
    &::after {
      transform: scale(0.8) rotate(-45deg) !important;
      transition: transform 0.3s;
      border-color: var(--light-text);
    }

    &:focus-within {
      &::after {
        top: 60%;
        transform: scale(0.8) rotate(-225deg) !important;
      }
    }
  }

  &.is-rounded {
    select {
      border-radius: 500rem;
    }
  }
}

.has-icon .select select {
  padding-left: 38px;
}
</style>
