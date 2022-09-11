export const cardProps = `
<script setup lang="ts">
export type CardShape = 'straight' | 'squared' | 'curved'

export interface CardProps {
  padding?: string
  shape?: CardShape
  shadow?: boolean
  overflow?: boolean
  animated?: boolean
}
</script>
`

export const cardShapes = `
<template>
  <Card shape="squared">
    <Title tag="h2" weight="semi" :size="6" leading>Squared Card</Title>
    <p class="paragraph rem-90">This is a normal squared card</p>
  </Card>
</template>
`

export const cardPadding = `
<template>
  <Card shape="curved" padding="3rem">
    <p class="paragraph leading-tight rem-90">This card has custom padding</p>
  </Card>
</template>
`

export const cardShadows = `
<template>
  <Card shape="squared" shadow>
    <Title tag="h2" weight="semi" :size="6" leading>Squared Card</Title>
    <p class="paragraph rem-90">This is a normal squared card</p>
  </Card>
</template>
`

export const cardAnimation = `
<template>
  <Card shape="squared" animated>
    <Title tag="h2" weight="semi" :size="6" leading>Squared Card</Title>
    <p class="paragraph rem-90">This is a normal squared card</p>
  </Card>
</template>
`
