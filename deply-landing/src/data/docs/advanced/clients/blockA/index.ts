export const clientsBlockAProps = {
  props: [
    {
      name: 'logos',
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
      name: 'inverted',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
  ],
  slots: [],
}

export const clientsBlockA = `
<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
</script>

<template>
  <LogoSection
    title="WE DRIVE RESULTS FOR ENTREPRENEURS TO THE FORTUNE 500"
    :logos="customerLogos"
  />
</template>
`

export const clientsBlockASample = `
export const customerLogos = [
  {
    id: 0,
    logo: '/assets/brands/asuna.svg',
  },
  {
    id: 1,
    logo: '/assets/brands/vonmo.svg',
  },
  {
    id: 2,
    logo: '/assets/brands/covenant.svg',
  },
  {
    id: 3,
    logo: '/assets/brands/grubspot.svg',
  },
  {
    id: 4,
    logo: '/assets/brands/infinite.svg',
  },
  {
    id: 5,
    logo: '/assets/brands/kromo.svg',
  },
  {
    id: 6,
    logo: '/assets/brands/phasekit.svg',
  },
  {
    id: 7,
    logo: '/assets/brands/hewitt.svg',
  },
  {
    id: 8,
    logo: '/assets/brands/natchpay.svg',
  },
  {
    id: 9,
    logo: '/assets/brands/proactive.svg',
  },
  {
    id: 10,
    logo: '/assets/brands/tribe.svg',
  },
  {
    id: 11,
    logo: '/assets/brands/bobcot.svg',
  },
  {
    id: 12,
    logo: '/assets/brands/gutwork.svg',
  },
  {
    id: 13,
    logo: '/assets/brands/apollo.svg',
  },
  {
    id: 14,
    logo: '/assets/brands/tetra.svg',
  },
]
`
