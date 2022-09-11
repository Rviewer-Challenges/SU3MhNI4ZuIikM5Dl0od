export const avatarSimpleProps = `
export type AvatarSimpleSize = 'small' | 
            'medium' | 'large' | 'big' | 'xl' | ''

export interface AvatarSimpleProps {
  size?: AvatarSimpleSize
  picture: string
  squared?: boolean
  badge?: string
}
`

export const avatarSimpleSample = `
export const avatars = [
  {
    picture: 'https://dummyimage.com/150x150.jpg',
  },
  {
    picture: 'https://dummyimage.com/150x150.jpg',
  },
  {
    picture: 'https://dummyimage.com/150x150.jpg',
  },
]
`

export const avatarSimpleSize = `
<template>
  <AvatarSimple
    picture="https://dummyimage.com/150x150.jpg"
    size="small"
  />
  <AvatarSimple 
    picture="https://dummyimage.com/150x150.jpg" />
  <AvatarSimple
    picture="https://dummyimage.com/150x150.jpg"
    size="medium"
  />
  <AvatarSimple
    picture="https://dummyimage.com/150x150.jpg"
    size="large"
  />
  <AvatarSimple
    picture="https://dummyimage.com/150x150.jpg"
    size="big"
  />
  <AvatarSimple
    picture="https://dummyimage.com/150x150.jpg"
    size="xl"
  />
</template>
`

export const avatarSimpleShapes = `
<template>
  <AvatarSimple picture="https://dummyimage.com/150x150" size="small" squared />
  <AvatarSimple picture="https://dummyimage.com/150x150" />
  <AvatarSimple picture="https://dummyimage.com/150x150" size="medium" squared />
  <AvatarSimple picture="https://dummyimage.com/150x150" size="large" squared />
  <AvatarSimple picture="https://dummyimage.com/150x150" size="big" squared />
  <AvatarSimple picture="https://dummyimage.com/150x150" size="xl" squared />
</template>
`

export const avatarSimpleBadge = `
<template>
  <AvatarSimple
    picture="https://dummyimage.com/150x150"
    size="medium"
    badge="/@src/assets/icons/flags/united-states-of-america.svg"
  />
</template>
`

export const avatarGroup = `
<template>
  <AvatarGroup 
    size="medium" 
    :avatars="avatars" 
    :limit="5" 
    compact 
    counter 
  />
</template>
`

export const avatarGroupProps = `
<script setup lang="ts">
import type { AvatarSimpleProps } from '/@src/components/base/avatar/AvatarSimple.vue'

export type AvatarGroupSize = 'small' | 'medium' | 'large'

export interface AvatarGroupProps {
  avatars: AvatarSimpleProps[]
  size?: AvatarGroupSize
  compact?: boolean
  squared?: boolean
  limit?: number
  counter?: boolean
  boxed?: boolean
}
</script>
`
