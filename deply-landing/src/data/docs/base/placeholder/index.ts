export const placeholderProps = `
<script setup lang="ts">
export interface PlaceholderProps {
  title: string
  subtitle?: string
  larger?: boolean
}
</script>
`

export const placeholderBase = `
<template>
  <Placeholder
    title="Project not found"
    subtitle="some nice subtitle text."
  >
    <template #image>
      <DarkImage
        src="https://dummyimage.com/800x600"
        src-dark="https://dummyimage.com/800c600"
        alt="illustration"
      />
    </template>
    <template #action>
      <Buttons alignment="centered">
        <Button color="primary" :long="2" raised>Projects</Button>
        <Button :long="2">Dashboard</Button>
      </Buttons>
    </template>
  </Placeholder>
</template>
`
