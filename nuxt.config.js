import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: "Fadzil Jusri",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Wedding Invitation Website (Wedvite)" },
      { name: 'keywords', content: 'Fadzil Jusri, fadziljusri, software developer, freelancer, portfolio, Universiti Teknologi PETRONAS, ' + pkg.description },
      { name: 'author', content: 'Fadzil Jusri' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/pwa',
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faInfo', 'faBars', 'faFileAlt', 'faCode', 'faEnvelope', 'faExternalLinkAlt', 'faMapMarkerAlt', 'faPhone'] // fas
        },
        {
          set:'@fortawesome/free-brands-svg-icons',
          icons: ['faBloggerB' , 'faGithub', 'faLinkedin', 'faTwitter'] // fab
        },
        {
          set:'@fortawesome/free-regular-svg-icons',
          icons: ['faMeh'] // far
        }
      ]
    }]
  ],

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
