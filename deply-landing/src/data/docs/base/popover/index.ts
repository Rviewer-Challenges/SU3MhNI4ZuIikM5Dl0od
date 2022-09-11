export const popoverProps = `
<script setup lang="ts">
export type PopoverPlacement = 'top' | 'bottom' | 'right' | 'left'
export type PopoverColor =
  | 'default'
  | 'inverted'
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'purple'

export type PopoverSpacing = 'small' | 'medium' | 'large'

export interface PopoverProps {
  content?: string
  placement?: PopoverPlacement
  spacing?: PopoverSpacing
  arrow?: boolean
  hover?: boolean
  custom?: boolean
  color?: PopoverColor
  offsetDistance?: number
  openDelay?: number
  closeDelay?: number
}
</script>
`

export const popoverBase = `
<template>
  <Popover
    content="This is a top popover"
    placement="top"
    arrow
    hover
  >
    <p class="paragraph cursor-pointer">Hover me</p>
  </Popover>
</template>
`

export const popoverTrigger = `
<template>
  <Popover
    content="This is a hover popover"
    placement="top"
    arrow
    hover
  >
    <Button>Hover me</Button>
  </Popover>
</template>
`

export const popoverColors = `
<template>
  <Popover
    content="This is a primary popover"
    placement="top"
    hover
    arrow
    color="primary"
  >
    <p class="paragraph cursor-pointer">Primary</p>
  </Popover>

  <Popover
    content="This is a success popover"
    placement="top"
    hover
    arrow
    color="success"
  >
    <p class="paragraph cursor-pointer">Success</p>
  </Popover>
</template>
`

export const popoverCustomIcons = `
<template>
  <Popover custom spacing="medium" arrow hover>
    <template #popover>
      <IconPopover
        icon="ion:skull-outline"
        color="danger"
        heading="Danger ahead"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </template>
    <p class="paragraph cursor-pointer">Hover me</p>
  </Popover>

  <Popover custom spacing="medium" arrow hover>
    <template #popover>
      <IconPopover
        icon="ion:rocket-outline"
        color="info"
        heading="Startup nation"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        rounded
      />
    </template>
    <p class="paragraph cursor-pointer">Hover me</p>
  </Popover>
</template>
`

export const popoverCustomAvatars = `
<template>
  <Popover custom spacing="large" arrow hover>
    <template #popover>
      <AvatarPopover
        avatar="data:image/gif;base64,replace_with_your_image"
        heading="Helen Miller"
        subheading="Software Engineer"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Sed haec omittamus."
      />
    </template>
    <p class="paragraph cursor-pointer">Hover me</p>
  </Popover>

  <Popover custom spacing="large" arrow hover>
    <template #popover>
      <AvatarPopover
        avatar="data:image/gif;base64,replace_with_your_image"
        heading="Chris Wyatt"
        subheading="Frontend Developer"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Sed haec omittamus."
        squared
      />
    </template>
    <p class="paragraph cursor-pointer">Hover me</p>
  </Popover>
</template>
`
