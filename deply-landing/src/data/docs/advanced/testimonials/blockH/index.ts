export const testimonialsBlockHProps = {
  props: [
    {
      name: 'slides',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['see sample tab for an example data structure'],
    },
  ],
  slots: [],
}

export const testimonialsBlockH = `
<script setup lang="ts">
import { testimonials } from '/@src/data/pages/jobs'
</script>

<template>
  <TestimonialsCarouselSingle :slides="testimonials" />
</template>
`

export const testimonialsBlockHSample = `
export const testimonials = [
  {
    logo: '/assets/brands/vonmo.svg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Invidiosum nomen est, infame, suspectum. Utilitatis causa amicitia est quaesita. Non laboro, inquit, de nomine. Duo Reges: constructio interrete. Aliter homines, aliter philosophos loqui putas oportere?',
    sales: 90,
    conversions: 45,
    testifier: {
      name: 'Danny Stokes',
      picture: 'data:image/gif;base64,replace_with_your_image',
      role: 'Founder @Vonmo',
    },
  },
  {
    logo: '/assets/brands/infinite.svg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Invidiosum nomen est, infame, suspectum. Utilitatis causa amicitia est quaesita. Non laboro, inquit, de nomine. Duo Reges: constructio interrete. Aliter homines, aliter philosophos loqui putas oportere?',
    sales: 75,
    conversions: 52,
    testifier: {
      name: 'Bella Walid',
      picture: 'data:image/gif;base64,replace_with_your_image',
      role: 'Founder @Infinite',
    },
  },
  {
    logo: '/assets/brands/tribe.svg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Invidiosum nomen est, infame, suspectum. Utilitatis causa amicitia est quaesita. Non laboro, inquit, de nomine. Duo Reges: constructio interrete. Aliter homines, aliter philosophos loqui putas oportere?',
    sales: 84,
    conversions: 65,
    testifier: {
      name: 'Johanna Miller',
      picture: 'data:image/gif;base64,replace_with_your_image',
      role: 'Founder @Tribe',
    },
  },
]
`
