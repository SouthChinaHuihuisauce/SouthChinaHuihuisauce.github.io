// https://nuxt.com/docs/api/configuration/nuxt-config
// import eslintPlugin from 'vite-plugin-eslint';
import languages from './lang/languages'
import theme from './config/theme'
import brand from './assets/text/brand'

export default defineNuxtConfig({
  app: {
    baseURL:'/SouthChinaHuihuisauce.github.io/',
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: brand.starter.name,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: brand.starter.desc },
        { name: 'msapplication-TileColor', content: '#FFFFFF' },
        { name: 'msapplication-TileImage', content: '/favicons/ms-icon-144x144.png' },
        // PWA primary color
        { name: 'theme-color', content: theme.primary},
      ],
      link: [
        // Favicon
        { rel: 'shortcut icon', href: '/favicons/favicon.ico' },
      ]
    },
  },
  components: false,
  css: [
    'aos/dist/aos.css',
    'vuetify/lib/styles/main.sass',
    '@splidejs/vue-splide/css',
    '@/assets/scss/vuetify-overide.scss',
    '@/assets/scss/transition.scss',
    '@/assets/scss/vendors/animate.css',
    '@/assets/scss/vendors/animate-extends.css',
    '@/assets/scss/vendors/hamburger-menu.css',
    '@/assets/scss/vendors/slick-carousel/slick.css',
    '@/assets/scss/vendors/slick-carousel/slick-theme.css'
  ],
  modules: [
    '@nuxtjs/i18n',
    'vite-plugin-eslint'
  ],
  i18n: {
    locales: languages,
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'en',
    strategy: 'prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    },
    // vueI18n: './config/i18n.js', // use this options for next vueI18n version
    vueI18n: {
      legacy: false,
      locale: 'en',
      fallbackLocale: 'en',
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: { additionalData: `@import "@/assets/scss/styles.scss";` } // eslint-disable-line
      }
    },
  
  },
  build: {
    transpile: ['vuetify'],
    extend(config) {
      config.performance.hints = false
    },
  },
  devServer: {
    port: 8000
  }
})
