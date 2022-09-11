export const buttonProps = `
<script setup lang="ts">
export type ButtonSize = 'medium' | 'large' | 'form'
export type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'default'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'

export interface ButtonProps {
  color?: ButtonColor
  size?: ButtonSize
  long?: 1 | 2 | 3
  rounded?: boolean
  outlined?: boolean
  raised?: boolean
  elevated?: boolean
  bold?: boolean
  fullwidth?: boolean
  to?: RouteLocationRaw
  loading?: boolean
  disabled?: boolean
  iconLeft?: string
  iconRight?: string
}
</script>
`

export const buttonSizes = `
<template>
  <Button>Normal</Button>
  <Button size="medium">Medium</Button>
  <Button size="large">Large</Button>
</template>
`

export const buttonShapes = `
<template>
  <Button rounded>Normal</Button>
  <Button size="medium" rounded>Medium</Button>
  <Button size="large" rounded>Large</Button>
</template>
`

export const buttonTypes = `
<template>
  <Button>Iam a Button</Button>
  <Button href="https://google.com">Iam a Link</Button>
  <Button to="index">Iam a RouterLink</Button>
</template>
`

export const buttonColor = `
<template>
  <Button color="primary" :long="1">Primary</Button>
  <Button color="success" :long="1">Success</Button>
</template>
`

export const buttonOutlined = `
<template>
  <Button color="primary" :long="1" outlined>Primary</Button>
  <Button color="success" :long="1" outlined>Success</Button>
  <Button color="info" :long="1" outlined>Info</Button>
</template>
`

export const buttonIcons = `
<template>
  <Button icon-left="feather:github">GitHub</Button>
  <Button icon-right="feather:arrow-right">Go Right</Button>
</template>
`

export const buttonElevation = `
<template>
  <Button color="primary" elevated>Primary</Button>
  <Button color="success" raised>Success</Button>
  <Button color="info" elevated>Info</Button>
</template>
`

export const buttonLoading = `
<template>
  <Button loading>Default</Button>
  <Button color="primary" loading>Primary</Button>
  <Button color="success"loading>Success</Button>
</template>
`

export const buttonDisabled = `
<template>
  <Button disabled>Default</Button>
  <Button color="primary" disabled>Primary</Button>
  <Button color="success"disabled>Success</Button>
</template>
`
