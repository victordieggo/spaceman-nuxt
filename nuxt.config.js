export default {
  mode: 'universal',

  head: {
    title: 'Spaceman Nuxt',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  env: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000'
  },

  loading: {
    color: '#fff'
  },

  css: [
    '@/assets/sass/main.scss'
  ],

  plugins: [
  ],

  devModules: [
  ],

  modules: [
  ],

  build: {
    extend(config, ctx) {
    }
  },

  router: {
    base: '/spaceman-nuxt/'
  }
}
