export const faqBlockCProps = `
<script setup lang="ts">
export interface FaqStaticItem {
  title: string
  content: string
  icon: string
  color: IconBoxColor
}

export interface FaqStaticProps {
  items: FaqStaticItem[]
}
</script>
`

export const faqBlockC = `
<script setup lang="ts">
import { staticFaq } from '/@src/data/blocks/faq'
</script>

<template>
  <FaqStatic :items="staticFaq" />
</template>
`

export const faqBlockCSample = `
import type { FaqStaticItem } from '/@src/components/advanced/faq/FaqStatic.vue'

export const staticFaq: FaqStaticItem[] = [
  {
    icon: 'ph:gear-six-duotone',
    color: 'primary',
    title: 'How does it work?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
  },
  {
    icon: 'ph:crown-duotone',
    color: 'success',
    title: "What's included with membership?",
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam.',
  },
  {
    icon: 'ph:phone-duotone',
    color: 'yellow',
    title: 'All the free calls with mentors really unlimited?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo.',
  },
  {
    icon: 'ph:confetti-duotone',
    color: 'info',
    title: 'Do mentors do calls for free?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
  },
  {
    icon: 'ph:lightbulb-filament-duotone',
    color: 'orange',
    title: "What's the catch? Will mentors simply pitch me?",
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur.',
  },
  {
    icon: 'ph:trophy-duotone',
    color: 'green',
    title: 'How do I become a Vulk mentor?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo.',
  },
]
`
