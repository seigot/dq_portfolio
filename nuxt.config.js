module.exports = {

  /*
  ** Headers of the page
  */
  mode: 'spa',
  head: {
    title: 'わたなへクエスト',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '渡邊のドラクエ風ポートフォリオ' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-113324501-2'
    }]
 ],
  css:[
  '@/assets/css/dqmenu.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
    server: {
    port: 8000, // デフォルト: 3000
    host: '0.0.0.0', // デフォルト: localhost
  },
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
