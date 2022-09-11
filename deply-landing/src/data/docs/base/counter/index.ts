export const counterProps = `
<script setup lang="ts">
  const props = defineProps<{
    number: number
  }>()
</script>
`

export const counterThin = `
<template>
  <Title tag="h3" :size="4" weight="thin" narrow>
    <Counter :number="79" />
  </Title>
</template>
`

export const counterBold = `
<template>
  <Title tag="h3" :size="4" weight="bold" narrow>
    <Counter :number="79" />
  </Title>
</template>
`

export const counterBox = `
<template>
  <Card padding="2rem" class="counter-card">
    <Title tag="h3" :size="4" weight="bold" narrow>
      <Counter :number="194" />
    </Title>
  </Card>
</template>
`

export const counterContent = `
<template>
  <div class="px-4 has-text-centered">
    <Icon icon="la:pizza-slice" :size="200" color="primary" />
    <Title tag="h3" :size="4" weight="bold" narrow>
      <Counter :number="194" />
    </Title>
    <p class="paragraph rem-95">Pizzas eaten</p>
  </div>
</template>
`
