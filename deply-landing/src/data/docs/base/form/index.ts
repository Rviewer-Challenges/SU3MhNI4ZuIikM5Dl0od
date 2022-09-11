export const inputProps = `
<script setup lang="ts">
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
</script>
`

export const inputBase = `
<script setup lang="ts">
import { ref } from 'vue'

const inputOneValue = ref()
</script>

<template>
  <Field>
    <FieldLabel label="Username"></FieldLabel>
    <Control>
      <VInput
        v-model="inputOneValue"
        placeholder="John Doe"
      />
    </Control>
  </Field>
</template>
`

export const inputIcon = `
<template>
  <Field>
    <FieldLabel label="Email Address"></FieldLabel>
    <Control icon="feather:mail">
      <VInput placeholder="johndoe@gmail.com" />
    </Control>
  </Field>
</template>
`
export const inputValidation = `
<template>
  <Field>
    <FieldLabel label="Email Address"></FieldLabel>
    <Control icon="feather:mail" validation is-valid>
      <VInput
        placeholder="johndoe@gmail.com"
        value="mymail@gmail.com"
      />
    </Control>
  </Field>
  <Field>
    <FieldLabel label="Password"></FieldLabel>
    <Control icon="feather:lock" validation is-invalid>
      <VInput type="password" value="" />
    </Control>
  </Field>
</template>
`

export const textareaProps = `
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
</script>
`

export const textareaBase = `
<script setup lang="ts">
import { ref } from 'vue'

const textareaValue = ref('')
</script>

<template>
  <Field>
    <FieldLabel label="Message"></FieldLabel>
    <Control>
      <VTextarea
        v-model="textareaValue"
        placeholder="Write something..."
      />
    </Control>
  </Field>
</template>
`

export const textareaResize = `
<script setup lang="ts">
import { ref } from 'vue'

const textareaValue = ref('')
</script>

<template>
  <Field>
    <FieldLabel label="Message"></FieldLabel>
    <Control icon="feather:mail">
      <VTextarea
        v-model="textareaValue"
        :resize="false"
        placeholder="Write something..."
      />
    </Control>
  </Field>
</template>
`

export const selectProps = `
<script setup lang="ts">
export interface SelectOption {
  value: string | number
  label: string
}

export interface SelectProps {
  options: SelectOption[]
  value?: any
  placeholder?: string
  readonly?: boolean
  rounded?: boolean
}
</script>
`

export const selectBase = `
<script setup lang="ts">
import { ref } from 'vue'

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

const selectOneValue = ref()
</script>

<template>
  <Field>
    <FieldLabel label="Choose an option"></FieldLabel>
    <Control>
      <VSelect
        v-model="selectOneValue"
        :options="options"
      />
    </Control>
  </Field>
</template>
`

export const selectIcon = `
<script setup lang="ts">
import { ref } from 'vue'

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

const selectOneValue = ref()
</script>

<template>
  <Field>
    <FieldLabel label="Choose an option"></FieldLabel>
    <Control icon="feather:globe">
      <VSelect
        v-model="selectOneValue"
        :options="options"
      />
    </Control>
  </Field>
</template>
`

export const checkboxProps = `
<script setup lang="ts">
export interface CheckboxEmits {
  (e: 'update:modelValue', value: (string | number)[]): void
}

export type CheckboxColor =
  | 'default'
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'

export interface CheckboxProps {
  name: string
  color?: CheckboxColor
  value?: string | number
  modelValue?: (string | number)[]
  disabled?: boolean
  rounded?: boolean
  label?: string
}
</script>
`

export const checkboxBase = `
<script setup lang="ts">
import { ref } from 'vue'

const options = ref(['Option 2'])
</script>

<template>
  <!--Regular checkbox-->
  <Checkbox
    v-model="options"
    name="checkbox-1"
    label="Option 1"
    value="Option 1"
  />

  <!--Rounded checkbox-->
  <Checkbox 
    v-model="options"
    name="checkbox-2"
    label="Option 2"
    value="Option 2"
    rounded 
  />
</template>
`

export const radioProps = `
<script setup lang="ts">
export type RadioColor =
  | 'default'
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'

export interface RadioProps {
  name: string
  group: string
  color?: RadioColor
  value?: boolean
  disabled?: boolean
  rounded?: boolean
  label?: string
}
</script>
`

export const radioBase = `
<template>
  <Radio 
    name="radio-1" 
    label="Choice 1" 
    group="radio-group-1" 
    color="default" 
  />
</template>
`

export const toggleProps = `
<script setup lang="ts">
export type ToggleFlavor = 'thin' | 'switch'

export type ToggleColor =
  | 'default'
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'

export interface ToggleProps {
  flavor?: ToggleFlavor
  name: string
  color?: ToggleColor
  value?: boolean
  disabled?: boolean
  icon?: boolean
}
</script>
`

export const toggleBase = `
<script setup lang="ts">
import { ref } from 'vue'

const options = ref(['Option 2', 'Option 9'])
</script>

<template>
  <!--Thin Toggle-->
  <NinjaToggle
    v-model="options"
    name="demo-toggle-1"
    value="Option 0"
  />

  <!--Switch Toggle-->
  <NinjaToggle
    v-model="options"
    name="demo-toggle-9"
    icon
    flavor="switch"
    color="success"
    value="Option 8"
  />
</template>
`
