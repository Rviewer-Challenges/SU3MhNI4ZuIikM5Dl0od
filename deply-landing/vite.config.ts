import { defineConfig } from 'vite'
import path from 'path'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import generateSitemap from 'vite-plugin-pages-sitemap'
import PurgeIcons from 'vite-plugin-purge-icons'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { imagetools } from 'vite-imagetools'
import ViteRadar from 'vite-plugin-radar'
import Components from 'unplugin-vue-components/vite'
import ImageMin from 'vite-plugin-imagemin'
import ViteFonts from 'vite-plugin-fonts'
import { vueI18n } from '@intlify/vite-plugin-vue-i18n'
import { VitePWA } from 'vite-plugin-pwa'

const SILENT = process.env.SILENT === 'true'
const SITEMAP_HOST = process.env.SITEMAP_HOST || 'http://localhost:3000/'

const plugins = [
  // https://github.com/vitejs/vite/tree/main/packages/plugin-vue
  Vue({
    include: [/\.vue$/],
    template: {
      ssr: true,
    },
  }),

  /**
   * vite-plugin-vue-i18n plugin does i18n resources pre-compilation / optimizations
   *
   * @see https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
   */
  vueI18n({
    include: path.resolve(__dirname, './src/locales/**'),
  }),

  /**
   * vite-plugin-pages plugin generate routes based on file system
   *
   * @see https://github.com/hannoeru/vite-plugin-pages
   */
  Pages({
    pagesDir: [
      {
        dir: 'src/pages',
        baseRoute: '',
      },
    ],
    onRoutesGenerated: (routes) =>
      generateSitemap({
        routes,
        hostname: SITEMAP_HOST,
      }),
  }),

  /**
   * unplugin-vue-components plugin is responsible of autoloading components
   * documentation and md file are loaded for elements and components sections
   *
   * @see https://github.com/antfu/unplugin-vue-components
   */
  Components({
    directoryAsNamespace: false,
    dirs: ['src/components', 'src/layouts'],
    extensions: ['vue'],
    dts: true,
    include: [/\.vue$/, /\.vue\?vue/],
    resolvers: [IconsResolver()],
  }),

  /**
   * vite-plugin-fonts plugin inject webfonts from differents providers
   *
   * @see https://github.com/stafyniaksacha/vite-plugin-fonts
   */
  ViteFonts({
    google: {
      families: [
        /*{
          name: 'Poppins',
          styles: 'ital,wght@0,300;0,400;1,500',
        },*/
        {
          name: 'Roboto',
          styles: 'ital,wght@0,100;0,300;0,400;0,500;0,700;1,300;1,400',
        },
        {
          name: 'Montserrat',
          styles: 'ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;1,300;1,400',
        },
      ],
    },
  }),

  /**
   * unplugin-icons plugin injects icons from differents providers
   *
   * @see https://github.com/antfu/unplugin-icons
   */
  Icons({ compiler: 'vue3' }),

  /**
   * vite-plugin-purge-icons plugin is responsible of autoloading icones from multiples providers
   *
   * @see https://icones.netlify.app/
   * @see https://github.com/antfu/purge-icons/tree/main/packages/vite-plugin-purge-icons
   */
  PurgeIcons(),

  /**
   * vite-plugin-radar plugin inject snippets from analytics providers
   *
   * @see https://github.com/stafyniaksacha/vite-plugin-radar
   */
  ViteRadar({
    enableDev: true,
    gtm: {
      id: 'GTM-P4BKNDB',
    },
  }),

  /**
   * vite-plugin-pwa generate manifest.json and register services worker to enable PWA
   *
   * @see https://github.com/antfu/vite-plugin-pwa
   */
  VitePWA({
    base: '/',
    includeAssets: [
      'favicon.svg',
      'favicon.ico',
      'robots.txt',
      'apple-touch-icon.png',
    ],
    manifest: {
      name: 'Deply - Una nueva forma de almacenamiento',
      short_name: 'Deply',
      start_url: '/?utm_source=pwa',
      display: 'standalone',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
  }),

  /**
   * vite-imagetools plugin allow to perform transformation (blur, resize, crop, etc)
   * on images at build time
   *
   * @see https://github.com/JonasKruckenberg/vite-imagetools
   */
  imagetools({
    silent: SILENT,
  }),
]

if (process.env.OPTIMIZE_IMG !== 'false') {
  plugins.push(
    /**
     * vite-plugin-imagemin optimize all images sizes from public or asset folder
     *
     * @see https://github.com/anncwb/vite-plugin-imagemin
     */
    ImageMin({
      verbose: !SILENT,
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 60,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
            active: false,
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    })
  )
}

export default defineConfig({
  // Project root directory (where index.html is located).
  root: process.cwd(),
  // Base public path when served in development or production.
  base: '/',
  // Directory to serve as plain static assets.
  publicDir: 'public',
  // Adjust console output verbosity.
  logLevel: 'info',
  // Will be passed to @rollup/plugin-alias as its entries option.
  resolve: {
    alias: [
      {
        find: '/@src/',
        replacement: `/src/`,
      },
    ],
  },
  optimizeDeps: {
    exclude: ['@vueuse/core', '@vueuse/components'],
    include: [
      'h3',
      'plyr',
      'vue-scrollto',
      'vue-marquee-text-component',
      'cobe',
      'vue3-carousel',
      'vue3-popper',
      'vue-my-photos',
      'vue3-markdown-it',
      'vue-accessible-color-picker',
      'prismjs',
      'vue-prism-component',
      '@iconify/iconify',
    ],
  },
  build: {
    chunkSizeWarningLimit: Infinity,

    /**
     * Uncomment this section to build the demo with missing images
     * Don't forget to remove this section when you replaced assets with yours
     */
    rollupOptions: {
      external: [/\/assets\/demo\/.*/],
    },
  },
  plugins,
})
