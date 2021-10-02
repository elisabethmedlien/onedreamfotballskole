const { resolve } = require('path');

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  srcDir: resolve('./src'),
  head: {
    htmlAttrs: { lang: 'no' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      { name: "robots", content: "index, follow" },
      { hid: 'description', name: 'description', content: 'OneDream Fotballskole er et gratis tilbud for å jevne ut sosiale ulikheter, og for å skape en fremtidig økning i aktivitet blant barn i et trygt og utviklende miljø"' },
      { name: 'format-detection', content: 'telephone=yes' },

      // twitter meta
      { hid: 'twitter:title', name: "twitter:title", content: "OneDream Fotballskole" },
      { hid: 'twitter:description', name: "twitter:description", content: "OneDream Fotballskole er et gratis tilbud for å jevne ut sosiale ulikheter, og for å skape en fremtidig økning i aktivitet blant barn i et trygt og utviklende miljø" },
      { name: "twitter:image", content: "https://i.postimg.cc/VL9TkXQH/logo3.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image:alt", content: "OneDream Fotballskole logo" },

      // open graph -> facebook
      { hid: 'og:title', property: "og:title", content: "OneDream Fotballskole" },
      { hid: 'og:description', property: "og:description", content: "OneDream Fotballskole er et gratis tilbud for å jevne ut sosiale ulikheter, og for å skape en fremtidig økning i aktivitet blant barn i et trygt og utviklende miljø" },
      { hid: 'og:url', property: "og:url", content: "https://onedreamfotballskole.no" },
      { property: "og:site_name", content: "OneDream Fotballskole" },
      { property: "og:image", content: "http://i.postimg.cc/VL9TkXQH/logo3.png" },

      { property: "og:image:secure_url", content: "https://i.postimg.cc/VL9TkXQH/logo3.png" },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:alt", content:"OneDream Fotballskole logo" },
      { property: "og:image:width", content:"1200" },
      { property: "og:image:height", content:"630" },
    ],
    title: 'onedreamfotballskole',
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon_io/favicon.ico' }, 
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap' },
      { rel: "apple-touch-icon", href: "/favicon_io/apple-touch-icon.png" }

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
