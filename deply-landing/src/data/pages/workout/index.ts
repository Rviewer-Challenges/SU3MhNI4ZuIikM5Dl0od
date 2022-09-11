import type { SimpleIconFeature, IconFeature, BaseFeature } from '/@src/types'

export const mobileAppFeatures: IconFeature[] = [
  {
    title: 'Track Distance',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'primary',
    icon: 'ph:paw-print-duotone',
    link: '/',
  },
  {
    title: 'Track Performance',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'green',
    icon: 'ph:lightning-duotone',
    link: '/',
  },
  {
    title: 'Personal Coaching',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'info',
    icon: 'ph:chats-circle-duotone',
    link: '/',
  },
  {
    title: 'Daily Advice',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'purple',
    icon: 'ph:crown-duotone',
    link: '/',
  },
  {
    title: 'Calory Management',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'yellow',
    icon: 'ph:cake-duotone',
    link: '/',
  },
  {
    title: 'Track Heartrate',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'red',
    icon: 'ph:heartbeat-duotone',
    link: '/',
  },
  {
    title: 'Social Sharing',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'success',
    icon: 'ph:messenger-logo-duotone',
    link: '/',
  },
  {
    title: 'Desktop Dashboard',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.',
    color: 'orange',
    icon: 'ph:circles-four-duotone',
    link: '/',
  },
]

export const runningFeature: SimpleIconFeature[] = [
  {
    title: 'Daily challenges',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus.',
    icon: 'ph:sparkle-duotone',
  },
  {
    title: 'Food tips',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus.',
    icon: 'ph:hamburger-duotone',
  },
  {
    title: 'Live performance',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus.',
    icon: 'ph:lightning-duotone',
  },
  {
    title: 'Auto-suggestions',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus.',
    icon: 'ph:chat-teardrop-text-duotone',
  },
]

export const reportFeature: SimpleIconFeature[] = [
  {
    title: 'Custom reports',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus.',
    icon: 'ph:chart-bar-duotone',
  },
  {
    title: 'Lifetime history',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus.',
    icon: 'ph:clock-duotone',
  },
  {
    title: 'Rewards',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus.',
    icon: 'ph:crown-duotone',
  },
  {
    title: 'Achievements',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus.',
    icon: 'ph:star-duotone',
  },
]

export const dashboardFeature: BaseFeature[] = [
  {
    title: 'Intuitive',
    text: 'Our app is very intuitive and simple to use, even for tech-savy users.',
  },
  {
    title: 'Powerful',
    text: 'We agregate everything that matters in calculating your optimal lifestyle.',
  },
  {
    title: 'Healthy',
    text: 'Our app focuses on keeping you healthy, whatever lifestyle you have.',
  },
]

export const workoutTimeline = [
  {
    icon: 'ph:device-mobile-camera-duotone',
    title: 'Install the app',
    text: 'Lorem ipsum dolor sit amet, clita laoreet ne cum. His cu harum inermis iudicabit.',
  },
  {
    icon: 'ph:user-circle-plus-duotone',
    title: 'Build your profile',
    text: 'Lorem ipsum dolor sit amet, clita laoreet ne cum. His cu harum inermis iudicabit.',
  },
  {
    icon: 'ph:circles-three-duotone',
    title: 'Choose a program',
    text: 'Lorem ipsum dolor sit amet, clita laoreet ne cum. His cu harum inermis iudicabit.',
  },
  {
    icon: 'ph:confetti-duotone',
    title: 'Reach success',
    text: 'Lorem ipsum dolor sit amet, clita laoreet ne cum. His cu harum inermis iudicabit.',
  },
]

export const workoutPricingPlans = [
  {
    name: 'Standard',
    icon: 'ph:parachute-duotone',
    price: {
      monthly: 19,
      yearly: 210,
    },
    features: [
      'Premium programs',
      'Social integration',
      'Social network',
      '2h of coaching /month',
      'Live Events',
    ],
    featured: false,
  },
  {
    name: 'Premium',
    icon: 'ph:rocket-duotone',
    price: {
      monthly: 39,
      yearly: 420,
    },
    features: [
      'Custom programs',
      'Live streaming',
      'Personal page',
      '10h of coaching /month',
      'VIP invites',
    ],
    featured: false,
  },
]

export const workoutTestimonials = [
  {
    id: 0,
    name: 'Greg Norton',
    picture: 'data:image/gif;base64,replace_with_your_image',
    cover: 'data:image/gif;base64,replace_with_your_image',
    quote: 'This app changed my life',
    subquote: 'Greg lost 35lbs using our app daily',
  },
  {
    id: 1,
    name: 'Jane Smith',
    picture: 'data:image/gif;base64,replace_with_your_image',
    cover: 'data:image/gif;base64,replace_with_your_image',
    quote: 'It feel so much better now',
    subquote: 'Jane lost 10lbs using our app daily',
  },
  {
    id: 2,
    name: 'Andres Cabeza',
    picture: 'data:image/gif;base64,replace_with_your_image',
    cover: 'data:image/gif;base64,replace_with_your_image',
    quote: 'I simply love my new lifestyle',
    subquote: 'Jane lost 5lbs using our app daily',
  },
  {
    id: 3,
    name: 'Yuko Maeba',
    picture: 'data:image/gif;base64,replace_with_your_image',
    cover: 'data:image/gif;base64,replace_with_your_image',
    quote: 'It is a pleasure to use this service',
    subquote: 'Jane lost 3lbs using our app daily',
  },
]

export const workoutFaq = {
  left: [
    {
      title: 'How much does it cost?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
    },
    {
      title: 'Does it really work anywhere?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
    },
    {
      title: 'How does it differ from other tools?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
    },
  ],
  right: [
    {
      title: 'Can I add friends?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
    },
    {
      title: 'Can I try it for free?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
    },
    {
      title: 'Who are your coaches?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
    },
  ],
}
