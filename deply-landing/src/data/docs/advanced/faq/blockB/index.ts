export const faqBlockBProps = `
<script setup lang="ts">
export interface FaqCollapseItem {
  title: string
  content: string
}

export interface FaqCollapseProps {
  items: FaqCollapseItem[]
  chevrons?: boolean
}
</script>
`

export const faqBlockB = `
<script setup lang="ts">
import { mentorsFaq } from '/@src/data/pages/mentors'
</script>

<template>
  <FaqList :items="mentorsFaq" />
</template>
`

export const faqBlockBSample = `
export const mentorsFaq = [
  {
    title: 'How does it work?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
  },
  {
    title: "What's included with membership?",
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
  },
  {
    title: 'All the free calls with mentors really unlimited?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
  },
  {
    title: 'Do mentors do calls for free?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
  },
  {
    title: "What's the catch? Will mentors simply pitch me?",
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
  },
  {
    title: 'How do I become a Vulk mentor?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
  },
]
`
