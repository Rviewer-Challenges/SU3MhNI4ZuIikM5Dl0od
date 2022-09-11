/// <reference types="vite/client" />

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_MAPBOX_ACCESS_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// extends window object
declare interface Window {
  __vulk__: {
    pinia: any
  }
  // dataLayer is injected via vite-plugin-radar
  dataLayer?: any[]
}

// declare untyped js modules
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@intlify/vite-plugin-vue-i18n/messages'
declare module '@vueform/slider'
declare module 'vue3-popper'
declare module 'vue-prism-component'
declare module 'vue3-carousel'
declare module 'vue3-markdown-it'
declare module 'vue-accessible-color-picker'
declare module 'cobe'
