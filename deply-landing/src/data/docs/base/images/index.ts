export const darkImageProps = `
<script setup lang="ts">
export interface DarkImageProps {
  src: string
  srcDark?: string
  alt?: string
  width?: string
  height?: string
  inline?: boolean
}
</script>
`

export const darkImage = `
<template>
  <DarkImage
    src="/@src/assets/illustrations/features/vr.svg"
    src-dark="/@src/assets/illustrations/features/vr-dark.svg"
    alt="dark image"
    width="800"
    height="600"
  />
</template>
`

export const imageRatioProps = `
<script setup lang="ts">
export type ImageRatio =
  | '1by1'
  | '5by4'
  | '4by3'
  | '3by2'
  | '5by3'
  | '16by9'
  | '2by1'
  | '3by1'
  | '4by5'
  | '3by4'
  | '2by3'
  | '3by5'
  | '9by16'
  | '1by2'
  | '1by3'

export type ImageDimensions = 16 | 24 | 32 | 48 | 64 | 96 | 128

export interface ImageRatioProps {
  ratio: ImageRatio
  rounded?: boolean
  curve?: string
  squareDimensions?: ImageDimensions
}
</script>
`

export const imageRatioBase = `
<template>
  <ImageRatio ratio="4by3">
    <img src="https://dummyimage.com/640x480/" alt="ratio image" width="640" height="480" />
  </ImageRatio>
</template>
`

export const imageRatioRounded = `
<template>
  <ImageRatio ratio="4by3" rounded>
    <img src="https://dummyimage.com/640x480/" alt="ratio image" width="640" height="480" />
  </ImageRatio>
</template>
`

export const imageRatioSquare = `
<template>
  <ImageRatio ratio="1by1" :square-dimensions="96" rounded>
    <img src="https://dummyimage.com/250x250" alt="ratio image" width="250" height="250" />
  </ImageRatio>
</template>
`
