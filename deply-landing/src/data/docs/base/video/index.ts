export const videoAProps = {
  props: [
    {
      name: 'title',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'features',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['see sample tab for an example data structure'],
    },
    {
      name: 'source',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'poster',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'links',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['string'],
    },
  ],
  slots: [],
}

export const videoA = `
<script setup lang="ts">
import { features4 } from '/@src/data/blocks/features'
</script>

<template>
  <VideoBlockA
    title="On point delivery."
    source="/assets/video/meeting.mp4"
    poster="data:image/gif;base64,replace_with_your_image"
    :features="features4"
  />
</template>
`

export const videoASample = `
export const features4: SimpleFeature[] = [
  {
    title: 'Fast delivery',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Tracking app',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Saved orders',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Private sales',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
]
`

export const videoBProps = {
  props: [
    {
      name: 'title',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'features',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['see sample tab for an example data structure'],
    },
    {
      name: 'source',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'poster',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'links',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['string'],
    },
  ],
  slots: [],
}

export const videoB = `
<script setup lang="ts">
import { features5 } from '/@src/data/blocks/features'
</script>

<template>
  <VideoBlockB
    title="Our Product"
    :features="features5"
    source="/assets/video/meeting.mp4"
    poster="data:image/gif;base64,replace_with_your_image"
  />
</template>
`

export const videoBSample = `
export const features5: IconFeature[] = [
  {
    title: 'Stay Relaxed',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus.',
    color: 'primary',
    icon: 'feather:coffee',
    link: '/',
  },
  {
    title: 'Save Time',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus.',
    color: 'green',
    icon: 'feather:clock',
    link: '/',
  },
  {
    title: 'Earn More',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus.',
    color: 'info',
    icon: 'feather:zap',
    link: '/',
  },
]
`

export const videoCProps = {
  props: [
    {
      name: 'title',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'features',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['see sample tab for an example data structure'],
    },
    {
      name: 'source',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'poster',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'links',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['string'],
    },
  ],
  slots: [],
}

export const videoC = `
<script setup lang="ts">
import { features4 } from '/@src/data/blocks/features'
</script>

<template>
  <VideoBlockC
    title="Our Product"
    :features="features4"
    source="/assets/video/meeting.mp4"
    poster="data:image/gif;base64,replace_with_your_image"
  />
</template>
`

export const videoCSample = `
export const features4: SimpleFeature[] = [
  {
    title: 'Fast delivery',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Tracking app',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Saved orders',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Private sales',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
]
`
