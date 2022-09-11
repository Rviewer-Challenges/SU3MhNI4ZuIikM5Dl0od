import type { IconFeature, CompleteFeature, ImageFeature } from '/@src/types'

export const heroScreenshots = [
  {
    image: '/assets/screenshots/landing-1.png',
    darkImage: '/assets/screenshots/landing-1-dark.png',
  },
  {
    image: '/assets/screenshots/landing-1.png',
    darkImage: '/assets/screenshots/landing-1-dark.png',
  },
  {
    image: '/assets/screenshots/landing-4.png',
    darkImage: '/assets/screenshots/landing-4-dark.png',
  },
  {
    image: '/assets/screenshots/landing-7.png',
    darkImage: '/assets/screenshots/landing-7-dark.png',
  },
  {
    image: '/assets/screenshots/landing-19.png',
    darkImage: '/assets/screenshots/landing-19-dark.png',
  },
  {
    image: '/assets/screenshots/landing-5.png',
    darkImage: '/assets/screenshots/landing-5-dark.png',
  },
  {
    image: '/assets/screenshots/landing-4.png',
    darkImage: '/assets/screenshots/landing-4-dark.png',
  },
  {
    image: '/assets/screenshots/landing-6.png',
    darkImage: '/assets/screenshots/landing-6-dark.png',
  },
  {
    image: '/assets/screenshots/blog-1.png',
    darkImage: '/assets/screenshots/blog-1-dark.png',
  },
  {
    image: '/assets/screenshots/post-1.png',
    darkImage: '/assets/screenshots/post-1-dark.png',
  },
  {
    image: '/assets/screenshots/about-1.png',
    darkImage: '/assets/screenshots/about-1-dark.png',
  },
]

export const productStacks = {
  title: 'The Utimate Web UI Kit',
  subtitle: 'Beautiful, Powerful, Reliable',
  text: [
    {
      paragraph:
        'Vulk is built on top of Vue 3 and its new Composition API. One of the most significant changes is that this new API allows function-based ways of writing your components, inspired by React Hooks. It makes it easy to create components in a matter of minutes.',
    },
    {
      paragraph:
        "Vulk's philosophy is ultra modular and optimized for better performance. It also provides other quality standards such as web accessibility. Although it is built with Sass, all used variables are native CSS variables, which makes it a lot easier to theme.",
    },
  ],
  images: [
    {
      url: '/assets/stacks/vuejs-light.svg',
      name: 'Vue 3',
      position: 'Frontend framework',
      description: 'Vue 3 is a robust and overpowered rewrite of Vue 2.',
    },
    {
      url: '/assets/stacks/vite-light.svg',
      name: 'Vite JS',
      position: 'Compiler / Bundler',
      description:
        'Vite is a brand new compiler that is 100x faster than Webpack.',
    },
    {
      url: '/assets/stacks/typescript-light.svg',
      name: 'Typescript',
      position: 'Javascript framework',
      description: 'TypeScript is a strongly typed language that builds on JS.',
    },
    {
      url: '/assets/stacks/sass-light.svg',
      name: 'Sass',
      position: 'CSS Preprocessor',
      description: 'Sass is a compiler that builds SCSS and SASS to CSS.',
    },
    {
      url: '/assets/stacks/bulma-light.svg',
      name: 'Bulma',
      position: 'CSS Framework',
      description: 'Bulma is a mobile-first CSS framework based on Flexbox.',
    },
  ],
}

export const vulkFeatures = [
  {
    icon: 'uit:vuejs-alt',
    title: '600+ Components',
    text: 'Ready to go building blocks with dark mode support.',
  },
  {
    icon: 'iconoir:layout-right',
    title: '100+ Demos',
    text: 'Vulk ships with a lot of beautiful demos to start from.',
  },
  {
    icon: 'ph:moon',
    title: 'Native Dark Mode',
    text: 'Every single piece of UI is natively dark mode ready.',
  },
  {
    icon: 'ph:lifebuoy-light',
    title: 'Active Support',
    text: 'Our support helps you solve any issues you have.',
  },
  {
    icon: 'iconoir:terminal-outline',
    title: 'Clean Code',
    text: "Vulk's codebase is huge, but structured and robust.",
  },
  {
    icon: 'teenyicons:plug-outline',
    title: '100 000 Icons',
    text: 'Vulk ships with more than 100000 icons purged at build.',
  },
  {
    icon: 'simple-line-icons:screen-smartphone',
    title: 'Fully Responsive',
    text: 'Vulk is built with Bulma 0.9, a mobile first framework.',
  },
  {
    icon: 'teenyicons:text-document-outline',
    title: 'Extensive Docs',
    text: 'A complete documentation to help you get started fast.',
  },
]

export const vulkExperience: ImageFeature[] = [
  {
    title: 'Vue 3',
    text: 'Vue 3 and its powerful composition API makes your experience pleasant along with killer features.',
    image: '/assets/stacks/vuejs-light.svg',
    darkImage: '/assets/stacks/vuejs-light.svg',
    link: '/',
  },
  {
    title: 'Typescript',
    text: 'Typescript makes things much more simpler but remains optional. A good occasion to learn about it!',
    image: '/assets/stacks/typescript-light.svg',
    darkImage: '/assets/stacks/typescript-light.svg',
    link: '/',
  },
  {
    title: 'Vite JS',
    text: 'Vite 2 is blazing fast, does HOT reloading and parses all your components. 100x faster than Webpack.',
    image: '/assets/stacks/vite-light.svg',
    darkImage: '/assets/stacks/vite-light.svg',
    link: '/',
  },
  {
    title: 'VS Code Integration',
    text: 'Vulk is fully integrated with VS Code to help you produce quality checked code. Supports Typescript.',
    image: '/assets/stacks/vscode-light.svg',
    darkImage: '/assets/stacks/vscode-light.svg',
    link: '/',
  },
  {
    title: 'ES Lint',
    text: 'ES Lint watches your javascript code and makes sure it matches the best standards. Code with standards.',
    image: '/assets/stacks/eslint-light.svg',
    darkImage: '/assets/stacks/eslint-light.svg',
    link: '/',
  },
  {
    title: 'Prettier',
    text: 'Prettier tidies your code and makes it look much more cleaner and easier to read. Read code easily.',
    image: '/assets/stacks/prettier-light.svg',
    darkImage: '/assets/stacks/prettier-light.svg',
    link: '/',
  },
  {
    title: 'Stylelint',
    text: 'Stylelint looks for poorly formatted styles and fixes everything for you. Learn to write valid CSS.',
    image: '/assets/stacks/stylelint-light.svg',
    darkImage: '/assets/stacks/stylelint-light.svg',
    link: '/',
  },
  {
    title: 'Docker',
    text: 'Vulk ships with a Docker file to make your test deployments faster and easier. Get started fast!',
    image: '/assets/stacks/docker-light.svg',
    darkImage: '/assets/stacks/docker-light.svg',
    link: '/',
  },
]

export const vulkBenefits: CompleteFeature[] = [
  {
    title: 'Vue 3',
    subtitle: 'Modern Framework',
    text: 'Vulk is built with Vue 3 and its brand new Composition API. It also features loads of high quality component that have been prebuilt for you. Vulk also relies on the best coding practices from the Vue core team.',
    icon: 'uit:vuejs-alt',
  },
  {
    title: 'Vite JS',
    subtitle: 'Easy Partials',
    text: 'Vulk is powered by Vite JS. Vite is a no bundler DEV environment for Vue.js, created by Evan You. Vite serves your code via native ES Module imports during development, allowing you to develop Vue.js single file components without a bundle step. ',
    icon: 'file-icons:vite',
  },
  {
    title: 'Modular CSS',
    subtitle: 'Bulma Framework',
    text: "Vulk uses Dart-Sass, which is the latest Sass compilation standard. Vulk's styles are written in Sass and lazy-loaded at the component level. However, all variable are written using native CSS variables.",
    icon: 'iconoir:css3',
  },
  {
    title: 'SSR Ready',
    subtitle: 'Custom SSR',
    text: 'Since the new Vue 3 release is very recent, the entire ecosystem migration will likely take some time. For example, Nuxt 3 is still quite far from bein prime-ready. This is why we implemented our own cusom SSR setup.',
    icon: 'ph:browsers-thin',
  },
  {
    title: '600+ Components',
    subtitle: 'Solid structure',
    text: 'Vulk ships with more than 600 fully implemented vue 3  components using the Composition API. Most components are configured to waith for static or dynamic data sources.',
    icon: 'ph:code-simple-light',
  },
  {
    title: '100+ Prebuilt pages',
    subtitle: 'Quickstart',
    text: 'Vulk ships with a lot of prebuilt pages to help you build your project as fast as possible, without losing quality. You can also easily copy and paste components from different pages to create original layouts.',
    icon: 'ph:layout-light',
  },
  {
    title: 'Multipurpose',
    subtitle: 'For Everything',
    text: 'Vulk is a multipurpose landing UI kit. It is also made for any type of modern website or web application. Featured content will of course continue to grow with future updates.',
    icon: 'ph:magic-wand-light',
  },
  {
    title: 'Ultra Responsive',
    subtitle: 'Mobile First',
    text: 'Vulk is built on top of the very popular Bulma CSS Framework. Bulma is a free, open source framework that provides ready-to-use frontend components that you can easily combine to build responsive web interfaces.',
    icon: 'ph:device-mobile-light',
  },
  {
    title: 'Cool Vectors',
    subtitle: 'All Inclusive',
    text: "At Css Ninja, we've always made our best to build high quality products. We believe that illustrations and graphic assets are part of a high quality visual and this is why we include all the graphics in our templates.",
    icon: 'cil:vector',
  },
  {
    title: 'Easy Theming',
    subtitle: 'Customization',
    text: "With the power of Sass and CSS vars, Vulk customization is very easy. You can implement your branding litteraly in a matter of minutes simply by changing the color variables implemented by Vulk. Change the var(--primary) color variable, and that's it.",
    icon: 'ph:paint-brush-broad-light',
  },
  {
    title: 'Active Support',
    subtitle: 'Updates & Support',
    text: 'Vulk includes an extensive documentation that covers all the basic things you need to know before running the template and starting to work with it. You can also contact us anytime and open a ticket on our Support Portal.',
    icon: 'ph:lifebuoy-light',
  },
]

export const base = [
  {
    id: 1,
    link: 'blocks-avatars',
    name: 'Avatar Component',
    media: {
      light: '/assets/icons/documentation/avatar.svg',
      dark: '/assets/icons/documentation/avatar-dark.svg',
    },
  },
  {
    id: 2,
    link: 'blocks-buttons',
    name: 'Button Component',
    media: {
      light: '/assets/icons/documentation/button.svg',
      dark: '/assets/icons/documentation/button-dark.svg',
    },
  },
  {
    id: 3,
    link: 'blocks-cards',
    name: 'Card Component',
    media: {
      light: '/assets/icons/documentation/card.svg',
      dark: '/assets/icons/documentation/card-dark.svg',
    },
  },
  {
    id: 4,
    link: 'blocks-counters',
    name: 'Counter Component',
    media: {
      light: '/assets/icons/documentation/counter.svg',
      dark: '/assets/icons/documentation/counter-dark.svg',
    },
  },
  {
    id: 5,
    link: 'blocks-forms',
    name: 'Form Components',
    media: {
      light: '/assets/icons/documentation/form.svg',
      dark: '/assets/icons/documentation/form-dark.svg',
    },
  },
  {
    id: 6,
    link: 'blocks-icons',
    name: 'Icon Component',
    media: {
      light: '/assets/icons/documentation/icon.svg',
      dark: '/assets/icons/documentation/icon-dark.svg',
    },
  },
  {
    id: 7,
    link: 'blocks-images',
    name: 'Image Component',
    media: {
      light: '/assets/icons/documentation/image.svg',
      dark: '/assets/icons/documentation/image-dark.svg',
    },
  },
  {
    id: 8,
    link: 'blocks-typography',
    name: 'Typography',
    media: {
      light: '/assets/icons/documentation/typography.svg',
      dark: '/assets/icons/documentation/typography-dark.svg',
    },
  },
  {
    id: 9,
    link: 'blocks-tags',
    name: 'Tag Component',
    media: {
      light: '/assets/icons/documentation/tags.svg',
      dark: '/assets/icons/documentation/tags-dark.svg',
    },
  },
]

export const intermediate = [
  {
    id: 1,
    link: 'blocks-modals',
    name: 'Modal Component',
    media: {
      light: '/assets/icons/documentation/modal.svg',
      dark: '/assets/icons/documentation/modal-dark.svg',
    },
  },
  {
    id: 2,
    link: 'blocks-placeholder',
    name: 'Placeholder Component',
    media: {
      light: '/assets/icons/documentation/placeholder.svg',
      dark: '/assets/icons/documentation/placeholder-dark.svg',
    },
  },
  {
    id: 3,
    link: 'blocks-table',
    name: 'Table Component',
    media: {
      light: '/assets/icons/documentation/table.svg',
      dark: '/assets/icons/documentation/table-dark.svg',
    },
  },
  {
    id: 4,
    link: 'blocks-navtabs',
    name: 'Tab Component',
    media: {
      light: '/assets/icons/documentation/tabs.svg',
      dark: '/assets/icons/documentation/tabs-dark.svg',
    },
  },
  {
    id: 5,
    link: 'blocks-video',
    name: 'Video Component',
    media: {
      light: '/assets/icons/documentation/video.svg',
      dark: '/assets/icons/documentation/video-dark.svg',
    },
  },
  {
    id: 6,
    link: 'blocks-sections',
    name: 'Section Component',
    media: {
      light: '/assets/icons/documentation/section.svg',
      dark: '/assets/icons/documentation/section-dark.svg',
    },
  },
]

export const blocks = [
  {
    id: 1,
    link: 'blocks-navbar',
    name: 'Navbar Blocks',
    media: {
      light: '/assets/icons/documentation/block-navbar.svg',
      dark: '/assets/icons/documentation/block-navbar-dark.svg',
    },
  },
  {
    id: 2,
    link: 'blocks-footer',
    name: 'Footer Blocks',
    media: {
      light: '/assets/icons/documentation/block-footer.svg',
      dark: '/assets/icons/documentation/block-footer-dark.svg',
    },
  },
  {
    id: 3,
    link: 'blocks-features',
    name: 'Feature Blocks',
    media: {
      light: '/assets/icons/documentation/block-features.svg',
      dark: '/assets/icons/documentation/block-features-dark.svg',
    },
  },
  {
    id: 4,
    link: 'blocks-content',
    name: 'Content Blocks',
    media: {
      light: '/assets/icons/documentation/block-content.svg',
      dark: '/assets/icons/documentation/block-content-dark.svg',
    },
  },
  {
    id: 5,
    link: 'blocks-call',
    name: 'CTA Blocks',
    media: {
      light: '/assets/icons/documentation/block-cta.svg',
      dark: '/assets/icons/documentation/block-cta-dark.svg',
    },
  },
  {
    id: 6,
    link: 'blocks-gallery',
    name: 'Gallery Blocks',
    media: {
      light: '/assets/icons/documentation/block-gallery.svg',
      dark: '/assets/icons/documentation/block-gallery-dark.svg',
    },
  },
  {
    id: 7,
    link: 'blocks-team',
    name: 'Team Blocks',
    media: {
      light: '/assets/icons/documentation/block-team.svg',
      dark: '/assets/icons/documentation/block-team-dark.svg',
    },
  },
  {
    id: 8,
    link: 'blocks-testimonials',
    name: 'Testimonial Blocks',
    media: {
      light: '/assets/icons/documentation/block-testimonials.svg',
      dark: '/assets/icons/documentation/block-testimonials-dark.svg',
    },
  },
]

export const advanced = [
  {
    id: 1,
    link: 'blocks-advanced-features',
    name: 'Advanced Features',
    media: {
      light: '/assets/icons/documentation/features.svg',
      dark: '/assets/icons/documentation/features-dark.svg',
    },
  },
  {
    id: 2,
    link: 'blocks-advanced-content',
    name: 'Advanced Content',
    media: {
      light: '/assets/icons/documentation/block-content.svg',
      dark: '/assets/icons/documentation/block-content-dark.svg',
    },
  },
  {
    id: 3,
    link: 'blocks-advanced-company',
    name: 'Advanced Company',
    media: {
      light: '/assets/icons/documentation/company.svg',
      dark: '/assets/icons/documentation/company-dark.svg',
    },
  },
  {
    id: 4,
    link: 'blocks-advanced-clients',
    name: 'Advanced Clients',
    media: {
      light: '/assets/icons/documentation/clients.svg',
      dark: '/assets/icons/documentation/clients-dark.svg',
    },
  },
  {
    id: 5,
    link: 'blocks-advanced-testimonials',
    name: 'Advanced Testimonials',
    media: {
      light: '/assets/icons/documentation/testimonials.svg',
      dark: '/assets/icons/documentation/testimonials-dark.svg',
    },
  },
  {
    id: 6,
    link: 'blocks-advanced-blog',
    name: 'Advanced Blog',
    media: {
      light: '/assets/icons/documentation/blog.svg',
      dark: '/assets/icons/documentation/blog-dark.svg',
    },
  },
  {
    id: 7,
    link: 'blocks-advanced-contact',
    name: 'Advanced Contact',
    media: {
      light: '/assets/icons/documentation/contact.svg',
      dark: '/assets/icons/documentation/contact-dark.svg',
    },
  },
  {
    id: 8,
    link: 'blocks-advanced-faq',
    name: 'Advanced FAQ',
    media: {
      light: '/assets/icons/documentation/faq.svg',
      dark: '/assets/icons/documentation/faq-dark.svg',
    },
  },
]

export const utilities = [
  {
    id: 1,
    link: 'blocks-colors',
    name: 'Theme Colors',
    media: {
      light: '/assets/icons/documentation/colors.svg',
      dark: '/assets/icons/documentation/colors-dark.svg',
    },
  },
  {
    id: 2,
    link: 'blocks-utilities',
    name: 'Theme Utilities',
    media: {
      light: '/assets/icons/documentation/utilities.svg',
      dark: '/assets/icons/documentation/utilities-dark.svg',
    },
  },
  {
    id: 3,
    link: 'blocks-plugins',
    name: 'Theme Plugins',
    media: {
      light: '/assets/icons/documentation/plugins.svg',
      dark: '/assets/icons/documentation/plugins-dark.svg',
    },
  },
]

export const componentFeatures: IconFeature[] = [
  {
    title: 'Reusable Components',
    text: 'Vulk ships with a ton of ready to use and reusable components. You can use them as is or duplicate to create your own variations and styles.',
    color: 'primary',
    icon: 'ion:rocket-outline',
    link: '/',
  },
  {
    title: 'Modular Code',
    text: "Vulk's code is very modular and very versatile. The template only loads what you need as every component is bundled with its own styles.",
    color: 'green',
    icon: 'ion:apps-outline',
    link: '/',
  },
  {
    title: 'Easy Theming',
    text: 'Although it is built with Sass, Vulk leverages the power of native CSS variables, giving you the power to create any theme in a few minutes.',
    color: 'info',
    icon: 'ion:color-palette-outline',
    link: '/',
  },
]
