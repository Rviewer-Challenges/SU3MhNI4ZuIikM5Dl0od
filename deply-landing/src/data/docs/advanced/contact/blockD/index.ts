export const contactBlockDProps = {
  props: [
    {
      name: 'infos',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['see sample tab for an example data structure'],
    },
    {
      name: 'columns',
      type: 'number',
      required: 'false',
      default: '3',
      values: ['2', '3', '4'],
    },
    {
      name: 'limit',
      type: 'number',
      required: 'false',
      default: 'undefined',
      values: ['number'],
    },
    {
      name: 'polkaDots',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
  ],
  slots: [],
}

export const contactBlockD = `
<script setup lang="ts">
import { contactInfo } from '/@src/data/pages/contact'
</script>

<template>
  <ContactInfo :infos="contactInfo" />
</template>
`

export const contactBlockDSample = `
export const contactInfo = [
  {
    icon: 'ph:envelope-duotone',
    title: 'Email',
    info: 'contact@vulk.io',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille pellit, qui permulcet sensum voluptate.',
    color: 'primary',
  },
  {
    icon: 'ph:phone-duotone',
    title: 'Phone',
    info: '+1 44 598-5598',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille pellit, qui permulcet sensum voluptate.',
    color: 'success',
  },
  {
    icon: 'ph:map-pin-duotone',
    title: 'Location',
    info: '28, Baker Street, Los Angeles, CA',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille pellit, qui permulcet sensum voluptate.',
    color: 'yellow',
  },
  {
    icon: 'ph:chat-circle-text-duotone',
    title: 'Live Chat',
    info: 'https://support.vulk.io',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille pellit, qui permulcet sensum voluptate.',
    color: 'orange',
  },
]
`
