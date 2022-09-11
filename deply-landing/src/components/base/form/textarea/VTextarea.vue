<script setup lang="ts">
import { computed } from 'vue'

export interface TextareaEmits {
  (e: 'update:modelValue', value: string): void
}

export interface TextareaProps {
  rows?: number
  placeholder?: string
  value?: string
  modelValue?: string
  readonly?: boolean
  resize?: boolean
}

const emit = defineEmits<TextareaEmits>()
const props = withDefaults(defineProps<TextareaProps>(), {
  value: undefined,
  modelValue: undefined,
  rows: undefined,
  placeholder: undefined,
  readonly: false,
  resize: true,
})

const textareaClasses = computed(() => [!props.resize && `no-resize`])

const testValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})
</script>

<template>
  <textarea
    v-model="testValue"
    :model-value="modelValue"
    :placeholder="props.placeholder"
    class="textarea"
    :class="textareaClasses"
    :rows="props.rows"
    :readonly="props.readonly"
    aria-label="textarea"
  ></textarea>
</template>

<style scoped lang="scss">
.textarea {
  color: var(--input-base-color);
  background: var(--input-base-bg-color);
  border-color: var(--input-base-border-color);
  border-radius: 0.65rem;
  box-shadow: none;
  transition: border 0.3s, box-shadow 0.3s;

  &:focus {
    box-shadow: var(--light-box-shadow);
    border-color: var(--input-base-focus-color);
  }

  &::placeholder {
    color: var(--input-placeholder-color);
  }

  &.no-resize {
    resize: none;
  }
}
</style>
