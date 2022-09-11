export const testimonialsBlockCProps = {
  props: [
    {
      name: 'items',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['see sample tab for an example data structure'],
    },
    {
      name: 'pulled',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
  ],
  slots: [],
}

export const testimonialsBlockC = `
<script setup lang="ts">
import { vehicleTestimonials } from '/@src/data/pages/vehicle'
</script>

<template>
  <TestimonialCards :items="vehicleTestimonials" />
</template>
`

export const testimonialsBlockCSample = `
export const testimonials = [
  {
    id: 0,
    customer: {
      name: 'Mike Williams',
      photo: 'data:image/gif;base64,replace_with_your_image',
      position: 'Founder @Covenant',
    },
    logo: '/assets/brands/covenant.svg',
    content:
      'Vulk software is notably robust, and their analysts have helped us both maximize profitability and truly understand the incremental value of our web Ads.',
  },
  {
    id: 1,
    customer: {
      name: 'Tara Reed',
      photo: 'data:image/gif;base64,replace_with_your_image',
      position: 'CFO @Kromo',
    },
    logo: '/assets/brands/kromo.svg',
    content:
      'Not only are our metrics and performance up and exceeding expectations, but I’ve been really impressed with the way that they manage our business.',
  },
  {
    id: 2,
    customer: {
      name: 'Nelly Olsen',
      photo: 'data:image/gif;base64,replace_with_your_image',
      position: 'Founder @Infinite',
    },
    logo: '/assets/brands/infinite.svg',
    content:
      'Vulk has definitely made the management of our web advertising better. By combining the convenience of managing keywords and bids, along with being able to track our ongoing results, Vulk has given us more control over our web advertising than we’ve ever had before.',
  },
  {
    id: 3,
    customer: {
      name: 'Adrian Felks',
      photo: 'data:image/gif;base64,replace_with_your_image',
      position: 'Founder @Grubspot',
    },
    logo: '/assets/brands/grubspot.svg',
    content:
      'Bringing on Vulk has been a tremendous asset to our web business. NatureWise’s sales velocity has increased substantially, and we’re excited to continue on that path with web DSP.',
  },
  {
    id: 4,
    customer: {
      name: 'Barry Wilks',
      photo: 'data:image/gif;base64,replace_with_your_image',
      position: 'CEO @Phasekit',
    },
    logo: '/assets/brands/phasekit.svg',
    content:
      'Within three months of starting with Vulk, we had our best month ever in terms of both profits and sales.',
  },
  {
    id: 5,
    customer: {
      name: 'Emma Spencer',
      photo: 'data:image/gif;base64,replace_with_your_image',
      position: 'Marketing Associate @Tribe',
    },
    logo: '/assets/brands/tribe.svg',
    content:
      'Not only are our metrics and performance up and exceeding expectations, but I’ve been really impressed with the way that they manage our business.',
  },
  {
    id: 6,
    customer: {
      name: 'Alan Smith',
      photo: 'data:image/gif;base64,replace_with_your_image',
      position: 'Manager @Proactive',
    },
    logo: '/assets/brands/proactive.svg',
    content:
      'Once you see the algorithm in action, you see how awesome Vulk and their technology really are!',
  },
  {
    id: 7,
    customer: {
      name: 'Lana Henriks',
      photo: 'data:image/gif;base64,replace_with_your_image',
      position: 'Founder @Live Talk',
    },
    logo: '/assets/brands/livetalk.svg',
    content:
      'Vulk has definitely made the management of our web advertising better. By combining the convenience of managing keywords and bids, along with being able to track our ongoing results, Vulk has given us more control over our web advertising than we’ve ever had before.',
  },
  {
    id: 8,
    customer: {
      name: 'Helen Watts',
      photo: 'data:image/gif;base64,replace_with_your_image',
      position: 'Founder @Gutwork',
    },
    logo: '/assets/brands/gutwork.svg',
    content:
      'Vulk came in with a very clear perspective on how to drive brand growth on web, powerful AI systems and a strong managed services team.',
  },
  {
    id: 9,
    customer: {
      name: 'John Bigsby',
      photo: 'data:image/gif;base64,replace_with_your_image',
      position: 'Founder @Bitbreaker',
    },
    logo: '/assets/brands/bitbreaker.svg',
    content:
      'Within three months of starting with Vulk, we had our best month ever in terms of both profits and sales.',
  },
]
`
