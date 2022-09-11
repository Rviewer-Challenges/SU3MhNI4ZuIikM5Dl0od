export const featureBlockLProps = {
  props: [
    {
      name: 'features',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['see sample tab for an example data structure'],
    },
    {
      name: 'blob',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
    {
      name: 'dots',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
    {
      name: 'links',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
    {
      name: 'inverted',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
  ],
  slots: [],
}

export const featureBlockL = `
<script setup lang="ts">
import { features9 } from '/@src/data/blocks/features'
</script>

<template>
  <FeatureBlockL :features="features9" blob dots links />
</template>
`

export const featureBlockLSample = `
export const features9: BlobFeature[] = [
  {
    subtitle: 'Teamwork',
    title: 'Collaborate easily',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonum patria: miserum exilium. Duo Reges: constructio interrete. Vitiosum est enim in dividendo partem in genere numerare. Restinguet citius, si ardentem acceperit. Invidiosum nomen est, infame, suspectum.',
    image: 'data:image/gif;base64,replace_with_your_image',
    link: '/',
  },
  {
    subtitle: 'Efficiency',
    title: 'Save tons of time',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonum patria: miserum exilium. Duo Reges: constructio interrete. Vitiosum est enim in dividendo partem in genere numerare. Restinguet citius, si ardentem acceperit. Invidiosum nomen est, infame, suspectum.',
    image: 'data:image/gif;base64,replace_with_your_image',
    link: '/',
  },
  {
    subtitle: 'Satisfaction',
    title: 'Get the job done',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonum patria: miserum exilium. Duo Reges: constructio interrete. Vitiosum est enim in dividendo partem in genere numerare. Restinguet citius, si ardentem acceperit. Invidiosum nomen est, infame, suspectum.',
    image: 'data:image/gif;base64,replace_with_your_image',
    link: '/',
  },
]
`
