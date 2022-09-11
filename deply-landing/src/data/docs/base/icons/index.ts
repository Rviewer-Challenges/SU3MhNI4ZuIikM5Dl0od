export const iconboxProps = `
<script setup lang="ts">
export type IconBoxSize = 'small' | 'medium' | 'large' | 'big' | 'xl'
export type IconBoxColor =
  | 'default'
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'purple'
  | 'yellow'
  | 'orange'
  | 'green'
  | 'red'
  | 'blue'
export interface IconBoxProps {
  size?: IconBoxSize
  color?: IconBoxColor
  rounded?: boolean
  bordered?: boolean
  inverted?: boolean
}
</script>
`

export const iconboxSize = `
<template>
  <IconBox size="small">
    <i class="iconify" data-icon="ion:gift-outline"></i>
  </IconBox>
  <IconBox>
    <i class="iconify" data-icon="ion:gift-outline"></i>
  </IconBox>
  <IconBox size="medium">
    <i class="iconify" data-icon="ion:gift-outline"></i>
  </IconBox>
</template>
`

export const iconboxRounded = `
<template>
  <IconBox size="small" rounded>
    <i class="iconify" data-icon="ion:gift-outline"></i>
  </IconBox>
  <IconBox rounded>
    <i class="iconify" data-icon="ion:gift-outline"></i>
  </IconBox>
  <IconBox size="medium" rounded>
    <i class="iconify" data-icon="ion:gift-outline"></i>
  </IconBox>
</template>
`

export const iconboxColors = `
<template>
  <IconBox size="medium" color="primary">
    <i class="iconify" data-icon="ion:gift-outline"></i>
  </IconBox>
  <IconBox size="medium" color="success">
    <i class="iconify" data-icon="ion:gift-outline"></i>
  </IconBox>
  <IconBox size="medium" color="info">
    <i class="iconify" data-icon="ion:gift-outline"></i>
  </IconBox>
</template>
`

export const iconboxBordered = `
<template>
  <IconBox size="medium" color="primary" bordered>
    <i class="iconify" data-icon="ion:gift-outline"></i>
  </IconBox>
  <IconBox size="medium" color="success" rounded bordered>
    <i class="iconify" data-icon="ion:gift-outline"></i>
  </IconBox>
  <IconBox size="medium" color="info" bordered>
    <i class="iconify" data-icon="ion:gift-outline"></i>
  </IconBox>
</template>
`
