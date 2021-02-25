import colors from 'vuetify/es5/util/colors'


export default {
  env: {
    BASE_URL: process.env.BASE_URL
  },
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: 'Portfolio of Carlos Henrique Reis',
    title: 'Portfolio of Carlos Henrique Reis',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Hi, I\'m Carlos. I\'m currently working with web development and studying various things related to computing such as Artificial Intelligence and Optimization of Hyperparameters. Below is a resumé about me.' },
      { hid: 'og:title',  property: 'og:title', content: 'Portfolio of Carlos Henrique Reis'},
      { hid: 'og:site_name',  property: 'og:site_name', content: 'Portfolio of Carlos Henrique Reis'},
      { hid: 'og:url',  property: 'og:url', content: process.env.BASE_URL},
      { hid: 'og:image',  property: 'og:image', content: process.env.BASE_URL + '/images/profile.png'},
      { hid: 'og:description', property: 'og:description', content: 'Hi, I\'m Carlos. I\'m currently working with web development and studying various things related to computing such as Artificial Intelligence and Optimization of Hyperparameters. Below is a resumé about me.' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  script: [
    { src: '/d3.js' },
    { src: '/figlet.js'}
  ],

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/axios'],

  axios: {
    // proxy: true
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend (config, ctx) {
      config.node = {
          fs: "empty"
      };
    }
  },
}

