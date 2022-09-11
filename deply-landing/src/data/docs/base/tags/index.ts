export const tagProps = `
<script setup lang="ts">
export type TagColor =
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'orange'
  | 'blue'
  | 'green'
  | 'purple'
  | 'solid'

export type TagShape = 'squared' | 'curved' | 'rounded'

export interface TagProps {
  label: string | number
  color?: TagColor
  shape?: TagShape
  outlined?: boolean
  elevated?: boolean
  remove?: boolean
}

</script>
`

export const tagColors = `
<template>
  <Tag label="Default"></Tag>
  <Tag color="primary" label="Primary"></Tag>
  <Tag color="success" label="Success"></Tag>
</template>
`

export const tagRounded = `
<template>
  <Tag label="Default" shape="rounded"></Tag>
  <Tag color="solid" label="Solid" shape="rounded"></Tag>
  <Tag color="primary" label="Primary" shape="rounded"></Tag>
</template>
`

export const tagSquare = `
<template>
  <Tag label="Default" shape="squared"></Tag>
  <Tag color="solid" label="Solid" shape="squared"></Tag>
  <Tag color="primary" label="Primary" shape="squared"></Tag>
</template>
`

export const tagOutlined = `
<template>
  <Tag label="Default" outlined></Tag>
  <Tag color="primary" label="Primary" outlined></Tag>
  <Tag color="success" label="Success" outlined></Tag>
</template>
`

export const tagElevated = `
<template>
  <Tag label="Default" shape="rounded" elevated></Tag>
  <Tag color="solid" label="Solid" shape="rounded" elevated></Tag>
  <Tag color="primary" label="Primary" shape="rounded" elevated></Tag>
</template>
`
