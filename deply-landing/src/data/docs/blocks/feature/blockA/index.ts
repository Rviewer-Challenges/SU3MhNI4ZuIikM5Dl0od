export const featureBlockAProps = {
  props: [
    {
      name: 'alignment',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['centered'],
    },
    {
      name: 'features',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['see sample tab for an example data structure'],
    },
    {
      name: 'columns',
      type: 'number',
      required: 'false',
      default: '4',
      values: ['3', '4', '6'],
    },
    {
      name: 'limit',
      type: 'number',
      required: 'false',
      default: '6',
      values: ['number'],
    },
    {
      name: 'size',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['small', 'medium'],
    },
    {
      name: 'rounded',
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

export const featureBlockA = `
<script setup lang="ts">
import { features } from '/@src/data/blocks/features'
</script>

<template>
  <FeatureBlockA
    alignment="centered"
    :features="features"
    :columns="4"
    :limit="6"
    size="medium"
    inverted
  />
</template>
`

export const featureBlockASample = `
export const features: IconFeature[] = [
  {
    title: 'Campaigns',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'primary',
    icon: 'feather:mail',
    link: '/',
  },
  {
    title: 'Task Management',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'green',
    icon: 'feather:briefcase',
    link: '/',
  },
  {
    title: 'Personal Dashboard',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'info',
    icon: 'feather:grid',
    link: '/',
  },
  {
    title: 'Payment Gateways',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'purple',
    icon: 'feather:credit-card',
    link: '/',
  },
  {
    title: 'Time Management',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'yellow',
    icon: 'feather:clock',
    link: '/',
  },
  {
    title: 'Notifications',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'red',
    icon: 'feather:bell',
    link: '/',
  },
  {
    title: 'Social Integrations',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'success',
    icon: 'feather:facebook',
    link: '/',
  },
  {
    title: 'Instant Messaging',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'orange',
    icon: 'feather:message-circle',
    link: '/',
  },
]
`
