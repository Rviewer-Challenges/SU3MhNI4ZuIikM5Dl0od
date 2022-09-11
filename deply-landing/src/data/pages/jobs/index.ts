import Atlassian from '/assets/apps/atlassian-light.svg'
import Airbnb from '/assets/apps/airbnb-light.svg'
import Gitlab from '/assets/apps/gitlab-light.svg'
import Github from '/assets/apps/github-light.svg'
import Google from '/assets/apps/google-light.svg'
import Tnw from '/assets/apps/tnw-light.svg'
import Hubspot from '/assets/apps/hubspot-light.svg'
import Dribbble from '/assets/apps/dribbble-light.svg'
import Monday from '/assets/apps/monday-light.svg'

import Vue from '/assets/stacks/vuejs-light.svg'
import React from '/assets/stacks/reactjs-light.svg'
import Sass from '/assets/stacks/sass-light.svg'
import Javascript from '/assets/stacks/js-light.svg'
import NodeJS from '/assets/stacks/nodejs-light.svg'
import Typescript from '/assets/stacks/typescript-light.svg'
import Golang from '/assets/stacks/golang.svg'
import Bulma from '/assets/stacks/bulma-light.svg'
import Html5 from '/assets/stacks/html5-light.svg'
import Illustrator from '/assets/stacks/illustrator-light.svg'
import Photoshop from '/assets/stacks/photoshop-light.svg'
import Sketch from '/assets/stacks/sketch-light.svg'
import STRAPI from '/assets/stacks/strapi-light.svg'

import Kubernetes from '/assets/stacks/kubernetes.svg'
import Docker from '/assets/stacks/docker-light.svg'
import GoogleCloud from '/assets/stacks/google-cloud-light.svg'
import Terraform from '/assets/stacks/terraform-light.svg'
import Ansible from '/assets/stacks/ansible.svg'
import Kafka from '/assets/stacks/kafka.svg'
import Mongodb from '/assets/stacks/mongodb-light.svg'
import Redis from '/assets/stacks/redis.svg'

import type { Job, IconFeature } from '/@src/types'

export const jobs: Job[] = [
  {
    icon: Atlassian,
    slug: 'backend-developer',
    title: 'Backend Developer',
    location: 'San Diego, CA',
    duration: 'Fulltime',
    salary: '$45k - $55k annual',
    contact: 'mailto:careers@vulk.cssninja.io?subject=junior-backend-developer',
    content: {
      description: [
        {
          title: `About us`,
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec augue ac magna mattis venenatis in ac orci. Etiam interdum consectetur auctor. Nulla et est vel eros sodales *euismod nec ut lorem*. Sed scelerisque ante vitae lobortis venenatis.`,
        },
        {
          title: `Our search`,
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec augue ac magna mattis venenatis in ac orci. Etiam interdum consectetur auctor. Nulla et est vel eros sodales *euismod nec ut lorem*. Sed scelerisque ante vitae lobortis venenatis.`,
        },
        {
          title: `Your Profile`,
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec augue ac magna mattis venenatis in ac orci. Etiam interdum consectetur auctor. Nulla et est vel eros sodales *euismod nec ut lorem*. Sed scelerisque ante vitae lobortis venenatis.`,
        },
      ],
      aptitude: [
        {
          title: 'Skills',
          skills: [
            `Bachelor degree in computer programming`,
            `5+ years experience in software engineering`,
            `Felling confident in micro-service environments`,
          ],
        },
        {
          title: 'Bonus Skills',
          skills: [
            `Strong english redaction, tech writer`,
            `Google GCP, Amazon AWS or Azure provider`,
            `A little experience on online game app`,
          ],
        },
        {
          title: 'Soft Skills',
          skills: [
            `Autonomous and self-taught`,
            `Business oriented vision`,
            `Technical teaching skills`,
          ],
        },
      ],
      technologies: [
        {
          title: 'Required stacks',
          tools: [
            {
              icon: Javascript,
              title: 'Javascript',
            },
            {
              icon: Vue,
              title: 'Vue',
            },
            {
              icon: NodeJS,
              title: 'NodeJS',
            },
            {
              icon: Mongodb,
              title: 'MongoDB',
            },
            {
              icon: Kubernetes,
              title: 'Kubernetes',
            },
          ],
        },
        {
          title: 'Optionnal stacks',
          tools: [
            {
              icon: Typescript,
              title: 'Typescript',
            },
            {
              icon: Golang,
              title: 'Golang;',
            },
          ],
        },
      ],
    },
  },
  {
    icon: Airbnb,
    slug: 'senior-frontend-developer',
    title: 'Frontend Developer',
    location: 'Los Angeles, CA',
    duration: 'Fulltime',
    salary: '$45k - $55k annual',
    contact: 'mailto:careers@vulk.cssninja.io?subject=junior-backend-developer',
    content: {
      description: [
        {
          title: `About us`,
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec augue ac magna mattis venenatis in ac orci. Etiam interdum consectetur auctor. Nulla et est vel eros sodales *euismod nec ut lorem*. Sed scelerisque ante vitae lobortis venenatis.`,
        },
        {
          title: `What we're looking for`,
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec augue ac magna mattis venenatis in ac orci. Etiam interdum consectetur auctor. Nulla et est vel eros sodales *euismod nec ut lorem*. Sed scelerisque ante vitae lobortis venenatis.`,
        },
        {
          title: `Your Profile`,
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec augue ac magna mattis venenatis in ac orci. Etiam interdum consectetur auctor. Nulla et est vel eros sodales *euismod nec ut lorem*. Sed scelerisque ante vitae lobortis venenatis.`,
        },
      ],
      aptitude: [
        {
          title: 'Skills',
          skills: [
            `Bachelor degree in computer programming`,
            `5+ years experience in software engineering`,
            `Felling confident in micro-service environments`,
          ],
        },
        {
          title: 'Bonus Skills',
          skills: [
            `Strong english redaction, tech writer`,
            `Google GCP, Amazon AWS or Azure provider`,
            `A little experience on online game app`,
          ],
        },
        {
          title: 'Soft Skills',
          skills: [
            `Autonomous and self-taught`,
            `Business oriented vision`,
            `Technical teaching skills`,
          ],
        },
      ],
      technologies: [
        {
          title: 'Required stacks',
          tools: [
            {
              icon: Vue,
              title: 'VueJS',
            },
            {
              icon: React,
              title: 'ReactJS',
            },
            {
              icon: Sass,
              title: 'Sass',
            },
            {
              icon: Typescript,
              title: 'Typescript',
            },
            {
              icon: Javascript,
              title: 'Javascript',
            },
          ],
        },
        {
          title: 'Optionnal stack',
          tools: [
            {
              icon: Bulma,
              title: 'Bulma',
            },
            {
              icon: Html5,
              title: 'Html5',
            },
          ],
        },
      ],
    },
  },
  {
    icon: Gitlab,
    slug: 'solution-architect',
    title: 'Solution Architect',
    location: 'San Diego, CA',
    duration: 'Fulltime',
    salary: '$55k - $65k annual',
    contact: 'mailto:careers@vulk.cssninja.io?subject=solution-architect',
    content: {
      description: [
        {
          title: `About us`,
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec augue ac magna mattis venenatis in ac orci. Etiam interdum consectetur auctor. Nulla et est vel eros sodales *euismod nec ut lorem*. Sed scelerisque ante vitae lobortis venenatis.`,
        },
        {
          title: `Our search`,
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec augue ac magna mattis venenatis in ac orci. Etiam interdum consectetur auctor. Nulla et est vel eros sodales *euismod nec ut lorem*. Sed scelerisque ante vitae lobortis venenatis.`,
        },
        {
          title: `Your Profile`,
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec augue ac magna mattis venenatis in ac orci. Etiam interdum consectetur auctor. Nulla et est vel eros sodales *euismod nec ut lorem*. Sed scelerisque ante vitae lobortis venenatis.`,
        },
      ],
      aptitude: [
        {
          title: 'Skills',
          skills: [
            `Bachelor degree in computer programming`,
            `5+ years experience in software engineering`,
            `Felling confident in micro-service environments`,
          ],
        },
        {
          title: 'Bonus Skills',
          skills: [
            `Strong english redaction, tech writer`,
            `Google GCP, Amazon AWS or Azure provider`,
            `A little experience on online game app`,
          ],
        },
        {
          title: 'Soft Skills',
          skills: [
            `Autonomous and self-taught`,
            `Business oriented vision`,
            `Technical teaching skills`,
          ],
        },
      ],
      technologies: [
        {
          title: 'Required stacks',
          tools: [
            {
              icon: GoogleCloud,
              title: 'GCP',
            },
            {
              icon: Terraform,
              title: 'Terraform;',
            },
            {
              icon: Mongodb,
              title: 'MongoDB',
            },
            {
              icon: Docker,
              title: 'Docker',
            },
          ],
        },
        {
          title: 'Optionnal stacks',
          tools: [
            {
              icon: Ansible,
              title: 'Ansible',
            },
            {
              icon: Kafka,
              title: 'Kafka',
            },
          ],
        },
      ],
    },
  },
  {
    icon: Google,
    slug: 'ux-designer',
    title: 'UX Designer',
    location: 'New York, NY',
    duration: 'Fulltime',
    salary: '$35k - $45k annual',
    contact: 'mailto:careers@vulk.cssninja.io?subject=ux-designer',
    content: {
      description: [
        {
          title: `About us`,
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec augue ac magna mattis venenatis in ac orci. Etiam interdum consectetur auctor. Nulla et est vel eros sodales *euismod nec ut lorem*. Sed scelerisque ante vitae lobortis venenatis.`,
        },
        {
          title: `Our search`,
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec augue ac magna mattis venenatis in ac orci. Etiam interdum consectetur auctor. Nulla et est vel eros sodales *euismod nec ut lorem*. Sed scelerisque ante vitae lobortis venenatis.`,
        },
        {
          title: `Your Profile`,
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec augue ac magna mattis venenatis in ac orci. Etiam interdum consectetur auctor. Nulla et est vel eros sodales *euismod nec ut lorem*. Sed scelerisque ante vitae lobortis venenatis.`,
        },
      ],
      aptitude: [
        {
          title: 'Skills',
          skills: [
            `Bachelor degree in computer programming`,
            `5+ years experience in software engineering`,
            `Felling confident in micro-service environments`,
          ],
        },
        {
          title: 'Bonus Skills',
          skills: [
            `Strong english redaction, tech writer`,
            `Google GCP, Amazon AWS or Azure provider`,
            `A little experience on online game app`,
          ],
        },
        {
          title: 'Soft Skills',
          skills: [
            `Autonomous and self-taught`,
            `Business oriented vision`,
            `Technical teaching skills`,
          ],
        },
      ],
      technologies: [
        {
          title: 'Required stacks',
          tools: [
            {
              icon: Illustrator,
              title: 'Illustrator',
            },
            {
              icon: Photoshop,
              title: 'Photoshop',
            },
            {
              icon: Sketch,
              title: 'Sketch',
            },
          ],
        },
        {
          title: 'Optionnal stacks',
          tools: [
            {
              icon: Html5,
              title: 'Html5',
            },
          ],
        },
      ],
    },
  },
  {
    icon: Monday,
    slug: 'fullstack-developer',
    title: 'Fullstack Developer',
    location: 'Washington, DC',
    duration: 'Fulltime',
    salary: '$55k - $65k annual',
    contact: 'mailto:careers@vulk.cssninja.io?subject=fullstack-developer',
    content: {
      description: [
        {
          title: `About us`,
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec augue ac magna mattis venenatis in ac orci. Etiam interdum consectetur auctor. Nulla et est vel eros sodales *euismod nec ut lorem*. Sed scelerisque ante vitae lobortis venenatis.`,
        },
        {
          title: `Our search`,
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec augue ac magna mattis venenatis in ac orci. Etiam interdum consectetur auctor. Nulla et est vel eros sodales *euismod nec ut lorem*. Sed scelerisque ante vitae lobortis venenatis.`,
        },
        {
          title: `Your Profile`,
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec augue ac magna mattis venenatis in ac orci. Etiam interdum consectetur auctor. Nulla et est vel eros sodales *euismod nec ut lorem*. Sed scelerisque ante vitae lobortis venenatis.`,
        },
      ],
      aptitude: [
        {
          title: 'Skills',
          skills: [
            `Bachelor degree in computer programming`,
            `5+ years experience in software engineering`,
            `Felling confident in micro-service environments`,
          ],
        },
        {
          title: 'Bonus Skills',
          skills: [
            `Strong english redaction, tech writer`,
            `Google GCP, Amazon AWS or Azure provider`,
            `A little experience on online game app`,
          ],
        },
        {
          title: 'Soft Skills',
          skills: [
            `Autonomous and self-taught`,
            `Business oriented vision`,
            `Technical teaching skills`,
          ],
        },
      ],
      technologies: [
        {
          title: 'Required stack',
          tools: [
            {
              icon: Vue,
              title: 'VueJS',
            },
            {
              icon: React,
              title: 'ReactJS',
            },
            {
              icon: Sass,
              title: 'Sass',
            },
            {
              icon: Mongodb,
              title: 'MongoDB',
            },
            {
              icon: STRAPI,
              title: 'STRAPI',
            },
          ],
        },
        {
          title: 'Optionnal stack',
          tools: [
            {
              icon: Sass,
              title: 'Sass',
            },
            {
              icon: Bulma,
              title: 'Bulma;',
            },
          ],
        },
      ],
    },
  },
  {
    icon: Tnw,
    slug: 'ui-ux-designer',
    title: 'UI/UX Designer',
    location: 'San Francisco, CA',
    duration: 'Fulltime',
    salary: '$45k - $55k annual',
    contact: 'mailto:careers@vulk.cssninja.io?subject=ui-ux-designer',
    content: {
      description: [
        {
          title: `About us`,
          text: `Lorem ipsum dolor sit **amet**, consectetur adipiscing elit. Aliquam nec augue ac magna mattis venenatis in ac orci. Etiam interdum consectetur auctor. Nulla et est vel eros sodales *euismod nec ut lorem*. Sed scelerisque ante vitae lobortis venenatis.`,
        },
        {
          title: `Our search`,
          text: `Lorem ipsum dolor sit **amet**, consectetur adipiscing elit. Aliquam nec augue ac magna mattis venenatis in ac orci. Etiam interdum consectetur auctor. Nulla et est vel eros sodales *euismod nec ut lorem*. Sed scelerisque ante vitae lobortis venenatis.`,
        },
        {
          title: `Your Profile`,
          text: `Lorem ipsum dolor sit **amet**, consectetur adipiscing elit. Aliquam nec augue ac magna mattis venenatis in ac orci. Etiam interdum consectetur auctor. Nulla et est vel eros sodales *euismod nec ut lorem*. Sed scelerisque ante vitae lobortis venenatis.`,
        },
      ],
      aptitude: [
        {
          title: 'Skills',
          skills: [
            `Bachelor degree in computer programming`,
            `5+ years experience in software engineering`,
            `Felling confident in micro-service environments`,
          ],
        },
        {
          title: 'Bonus Skills',
          skills: [
            `Strong english redaction, tech writer`,
            `Google GCP, Amazon AWS or Azure provider`,
            `A little experience on online game app`,
          ],
        },
        {
          title: 'Soft Skills',
          skills: [
            `Autonomous and self-taught`,
            `Business oriented vision`,
            `Technical teaching skills`,
          ],
        },
      ],
      technologies: [
        {
          title: 'Required stack',
          tools: [
            {
              icon: Illustrator,
              title: 'Illustrator',
            },
            {
              icon: Photoshop,
              title: 'Photoshop',
            },
            {
              icon: Sketch,
              title: 'Sketch',
            },
            {
              icon: Html5,
              title: 'Html5',
            },
          ],
        },
        {
          title: 'Optionnal stack',
          tools: [
            {
              icon: Sass,
              title: 'Sass',
            },
            {
              icon: Bulma,
              title: 'Bulma;',
            },
          ],
        },
      ],
    },
  },
  {
    icon: Hubspot,
    slug: 'senior-solution-architect',
    title: 'Solution Architect',
    location: 'San Diego, CA',
    duration: 'Fulltime',
    salary: '$55k - $65k annual',
    contact:
      'mailto:careers@vulk.cssninja.io?subject=senior-solution-architect',
    content: {
      description: [
        {
          title: `About us`,
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec augue ac magna mattis venenatis in ac orci. Etiam interdum consectetur auctor. Nulla et est vel eros sodales *euismod nec ut lorem*. Sed scelerisque ante vitae lobortis venenatis.`,
        },
        {
          title: `Our search`,
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec augue ac magna mattis venenatis in ac orci. Etiam interdum consectetur auctor. Nulla et est vel eros sodales *euismod nec ut lorem*. Sed scelerisque ante vitae lobortis venenatis.`,
        },
        {
          title: `Your Profile`,
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec augue ac magna mattis venenatis in ac orci. Etiam interdum consectetur auctor. Nulla et est vel eros sodales *euismod nec ut lorem*. Sed scelerisque ante vitae lobortis venenatis.`,
        },
      ],
      aptitude: [
        {
          title: 'Skills',
          skills: [
            `Bachelor degree in computer programming`,
            `5+ years experience in software engineering`,
            `Felling confident in micro-service environments`,
          ],
        },
        {
          title: 'Bonus Skills',
          skills: [
            `Strong english redaction, tech writer`,
            `Google GCP, Amazon AWS or Azure provider`,
            `A little experience on online game app`,
          ],
        },
        {
          title: 'Soft Skills',
          skills: [
            `Autonomous and self-taught`,
            `Business oriented vision`,
            `Technical teaching skills`,
          ],
        },
      ],
      technologies: [
        {
          title: 'Required stack',
          tools: [
            {
              icon: Mongodb,
              title: 'Mongodb',
            },
            {
              icon: Terraform,
              title: 'Terraform',
            },
            {
              icon: GoogleCloud,
              title: 'GCP',
            },
            {
              icon: NodeJS,
              title: 'NodeJS',
            },
            {
              icon: Docker,
              title: 'Docker',
            },
          ],
        },
        {
          title: 'Optionnal stack',
          tools: [
            {
              icon: Ansible,
              title: 'Ansible',
            },
            {
              icon: Kafka,
              title: 'Kafka',
            },
            {
              icon: Redis,
              title: 'Redis',
            },
          ],
        },
      ],
    },
  },
  {
    icon: Dribbble,
    slug: 'ui-designer',
    title: 'UI Designer',
    location: 'San Diego, CA',
    duration: 'Fulltime',
    salary: '$45k - $55k annual',
    contact: 'mailto:careers@vulk.cssninja.io?subject=ui-designer',
    content: {
      description: [
        {
          title: `About us`,
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec augue ac magna mattis venenatis in ac orci. Etiam interdum consectetur auctor. Nulla et est vel eros sodales *euismod nec ut lorem*. Sed scelerisque ante vitae lobortis venenatis.`,
        },
        {
          title: `Our search`,
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec augue ac magna mattis venenatis in ac orci. Etiam interdum consectetur auctor. Nulla et est vel eros sodales *euismod nec ut lorem*. Sed scelerisque ante vitae lobortis venenatis.`,
        },
        {
          title: `Your Profile`,
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec augue ac magna mattis venenatis in ac orci. Etiam interdum consectetur auctor. Nulla et est vel eros sodales *euismod nec ut lorem*. Sed scelerisque ante vitae lobortis venenatis.`,
        },
      ],
      aptitude: [
        {
          title: 'Skills',
          skills: [
            `Bachelor degree in computer programming`,
            `5+ years experience in software engineering`,
            `Felling confident in micro-service environments`,
          ],
        },
        {
          title: 'Bonus Skills',
          skills: [
            `Strong english redaction, tech writer`,
            `Google GCP, Amazon AWS or Azure provider`,
            `A little experience on online game app`,
          ],
        },
        {
          title: 'Soft Skills',
          skills: [
            `Autonomous and self-taught`,
            `Business oriented vision`,
            `Technical teaching skills`,
          ],
        },
      ],
      technologies: [
        {
          title: 'Required stack',
          tools: [
            {
              icon: Illustrator,
              title: 'Illustrator',
            },
            {
              icon: Photoshop,
              title: 'Photoshop',
            },
            {
              icon: Sketch,
              title: 'Sketch',
            },
            {
              icon: Html5,
              title: 'Html5',
            },
          ],
        },
        {
          title: 'Optionnal stack',
          tools: [
            {
              icon: Sass,
              title: 'Sass',
            },
            {
              icon: Bulma,
              title: 'Bulma;',
            },
          ],
        },
      ],
    },
  },
  {
    icon: Github,
    slug: 'senior-fullstack-developer',
    title: 'Fullstack Developer',
    location: 'New York, NY',
    duration: 'Fulltime',
    salary: '$45k - $55k annual',
    contact:
      'mailto:careers@vulk.cssninja.io?subject=senior-fullstack-developer',
    content: {
      description: [
        {
          title: `About us`,
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec augue ac magna mattis venenatis in ac orci. Etiam interdum consectetur auctor. Nulla et est vel eros sodales *euismod nec ut lorem*. Sed scelerisque ante vitae lobortis venenatis.`,
        },
        {
          title: `Our search`,
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec augue ac magna mattis venenatis in ac orci. Etiam interdum consectetur auctor. Nulla et est vel eros sodales *euismod nec ut lorem*. Sed scelerisque ante vitae lobortis venenatis.`,
        },
        {
          title: `Your Profile`,
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec augue ac magna mattis venenatis in ac orci. Etiam interdum consectetur auctor. Nulla et est vel eros sodales *euismod nec ut lorem*. Sed scelerisque ante vitae lobortis venenatis.`,
        },
      ],
      aptitude: [
        {
          title: 'Skills',
          skills: [
            `Bachelor degree in computer programming`,
            `5+ years experience in software engineering`,
            `Felling confident in micro-service environments`,
          ],
        },
        {
          title: 'Bonus Skills',
          skills: [
            `Strong english redaction, tech writer`,
            `Google GCP, Amazon AWS or Azure provider`,
            `A little experience on online game app`,
          ],
        },
        {
          title: 'Soft Skills',
          skills: [
            `Autonomous and self-taught`,
            `Business oriented vision`,
            `Technical teaching skills`,
          ],
        },
      ],
      technologies: [
        {
          title: 'Required stack',
          tools: [
            {
              icon: Vue,
              title: 'VueJS',
            },
            {
              icon: React,
              title: 'ReactJS',
            },
            {
              icon: Sass,
              title: 'Sass',
            },
            {
              icon: Mongodb,
              title: 'MongoDB',
            },
            {
              icon: STRAPI,
              title: 'STRAPI',
            },
          ],
        },
        {
          title: 'Optionnal stack',
          tools: [
            {
              icon: Sass,
              title: 'Sass',
            },
            {
              icon: Bulma,
              title: 'Bulma;',
            },
          ],
        },
      ],
    },
  },
]

export const jobTopics = [
  {
    name: 'Vue 3',
    text: 'Frontend framework',
    icon: 'logos:vue',
    link: '/',
  },
  {
    name: 'Python',
    text: 'Backend language',
    icon: 'logos:python',
    link: '/',
  },
  {
    name: 'Angular',
    text: 'Frontend framework',
    icon: 'logos:angular-icon',
    link: '/',
  },
  {
    name: 'Android',
    text: 'Mobile framework',
    icon: 'logos:android-icon',
    link: '/',
  },
  {
    name: 'React',
    text: 'Frontend framework',
    icon: 'logos:react',
    link: '/',
  },
  {
    name: 'Flutter',
    text: 'Mobile framework',
    icon: 'logos:flutter',
    link: '/',
  },
  {
    name: 'Node JS',
    text: 'Server side javascript',
    icon: 'logos:nodejs-icon',
    link: '/',
  },
  {
    name: 'Laravel',
    text: 'Php framework',
    icon: 'logos:laravel',
    link: '/',
  },
  {
    name: 'STRAPI',
    text: 'Headless CMS',
    icon: 'logos:strapi-icon',
    link: '/',
  },
  {
    name: 'Tailwind CSS',
    text: 'CSS framework',
    icon: 'logos:tailwindcss-icon',
    link: '/',
  },
  {
    name: 'Bootstrap',
    text: 'CSS framework',
    icon: 'logos:bootstrap',
    link: '/',
  },
  {
    name: 'Bulma',
    text: 'CSS framework',
    icon: 'logos:bulma',
    link: '/',
  },
]

export const jobCategories: IconFeature[] = [
  {
    title: 'Marketing',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'primary',
    icon: 'ph:megaphone-simple-duotone',
    link: '/',
  },
  {
    title: 'UX Design',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'success',
    icon: 'ph:figma-logo-duotone',
    link: '/',
  },
  {
    title: 'UI Design',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'info',
    icon: 'ph:desktop-duotone',
    link: '/',
  },
  {
    title: 'Mobile Development',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'purple',
    icon: 'ph:device-mobile-duotone',
    link: '/',
  },
  {
    title: 'Backend Development',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'yellow',
    icon: 'ph:codesandbox-logo-duotone',
    link: '/',
  },
  {
    title: 'Frontend Development',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'red',
    icon: 'ph:circles-four-duotone',
    link: '/',
  },
  {
    title: 'System Administration',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'success',
    icon: 'ph:heartbeat-duotone',
    link: '/',
  },
  {
    title: 'Product Management',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'orange',
    icon: 'ph:crown-duotone',
    link: '/',
  },
]

export const candidates = [
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Daniel Abikzer',
    position: 'CEO',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Basile Olembe',
    position: 'General Manager',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Irina Smirkova',
    position: 'Sales Director',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'Facebook',
        icon: 'feather:facebook',
        url: 'https://facebook.com',
      },
    ],
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Aymeric Boulard',
    position: 'Technical Lead',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Matt Henriks',
    position: 'UX Design Lead',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Kim Li Seung',
    position: 'Software Architect',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Gianni Collaro',
    position: 'Fullstack Developer',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    image: 'data:image/gif;base64,replace_with_your_image',
    name: 'Hakeem Elba',
    position: 'Fullstack Developer',
    socialLinks: [
      {
        name: 'Linkedin',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'Twitter',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'GitHub',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
]

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
