export const testimonialsBlockEProps = {
  props: [
    {
      name: 'trainees',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['see sample tab for an example data structure'],
    },
    {
      name: 'mentors',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['see sample tab for an example data structure'],
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

export const testimonialsBlockE = `
<script setup lang="ts">
import { mentorTestimonials } from '/@src/data/pages/mentors'
</script>

<template>
  <TestimonialsTabbed
    :trainees="mentorTestimonials.trainees"
    :mentors="mentorTestimonials.mentors"
  />
</template>
`

export const testimonialsBlockESample = `
export const mentorTestimonials = {
  trainees: [
    {
      title:
        'Vulk has given me confidence in my plans and also allowed me to explore new opportunities and ways to increase my income',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit',
      member: {
        name: 'Ousman Abedi',
        role: 'Store Owner',
        picture: 'data:image/gif;base64,replace_with_your_image',
        logo: '/assets/brands/asuna.svg',
      },
    },
    {
      title:
        "Vulk mentors helped me so much strenghtening my company's growth and securing new sources of income ",
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit',
      member: {
        name: 'Dany Bolzcak',
        role: 'Startup Owner',
        picture: 'data:image/gif;base64,replace_with_your_image',
        logo: '/assets/brands/vonmo.svg',
      },
    },
    {
      title:
        'I was so surprised to see all my metrics going up after only a month using Vulk mentors. Astonishing!',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit',
      member: {
        name: 'Christina Chu',
        role: 'Business Owner',
        picture: 'data:image/gif;base64,replace_with_your_image',
        logo: '/assets/brands/bobcot.svg',
      },
    },
    {
      title:
        'My analytics started going nuts after I took four sessions with Henry Miller, a marketing specialist I met here!',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit',
      member: {
        name: 'Helena Firnalts',
        role: 'Shop Owner',
        picture: 'data:image/gif;base64,replace_with_your_image',
        logo: '/assets/brands/tetra.svg',
      },
    },
  ],
  mentors: [
    {
      title:
        'I enjoy my participation to Vulk Mentors every single day. I like to meet new people and to discuss new opportunities ',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit',
      member: {
        name: 'Daryl Keppler',
        role: 'Marketing Specialist',
        picture: 'data:image/gif;base64,replace_with_your_image',
        logo: '/assets/brands/kromo.svg',
      },
    },
    {
      title:
        'As a business owner, I totally understand the struggles one can run into when launching a product or a new service. This is why Ian here',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit',
      member: {
        name: 'Armin Azadian',
        role: 'CEO @Livetalk',
        picture: 'data:image/gif;base64,replace_with_your_image',
        logo: '/assets/brands/livetalk.svg',
      },
    },
    {
      title:
        "I already try to help people in my everyday work. Let's say Vulk mentors only reinforced that desire of mine",
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit',
      member: {
        name: 'Jordan Daniels',
        role: 'Business Developer',
        picture: 'data:image/gif;base64,replace_with_your_image',
        logo: '/assets/brands/tribe.svg',
      },
    },
    {
      title:
        'Iam always interested in helping other people with their businesses. It has proved to be even useful for my own company',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit',
      member: {
        name: 'Bianca Sorelli',
        role: 'Head of Marketing',
        picture: 'data:image/gif;base64,replace_with_your_image',
        logo: '/assets/brands/grubspot.svg',
      },
    },
  ],
}
`
