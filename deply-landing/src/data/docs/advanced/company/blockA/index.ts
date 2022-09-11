export const companyBlockAProps = {
  props: [
    {
      name: 'numbers',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['see sample tab for an example data structure'],
    },
    {
      name: 'title',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'subtitle',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'content',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
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

export const companyBlockA = `
<script setup lang="ts">
import { stats } from '/@src/data/pages/stats'
</script>

<template>
  <NumbersSection
    inverted
    subtitle="AI Technology"
    title="Our data scale powers your success"
    content="Our immense data scale feeds our machine learning and
            algorithms, so you can rest assured that every decision our AI
            makes is a smart one."
    :numbers="stats"
    animated
  />
</template>
`

export const companyBlockASample = `
export const stats = [
  {
    id: 0,
    prefix: '',
    suffix: 'TB',
    value: 40,
    text: 'Of annual data processed',
  },
  {
    id: 1,
    prefix: '$',
    suffix: 'B',
    value: 7,
    text: 'Amazon & Walmart.com sales optimized annually',
  },
  {
    id: 2,
    prefix: '',
    suffix: 'M',
    value: 750,
    text: 'Monthly bid changes executed',
  },
  {
    id: 3,
    prefix: '$',
    suffix: 'M',
    value: 450,
    text: 'Managed ad spend annually on automated campaigns',
  },
]
`
