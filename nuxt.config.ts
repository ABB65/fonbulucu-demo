
// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ['remixicon/fonts/remixicon.css', '~/assets/css/tailwind.css'],
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  // https://content.nuxtjs.org
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'Contentrain fonbulucu demo duyuru sitesi.',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'Contentrain fonbulucu demo site.' }
      ]
    }
  },
  content: {
    // navigation: {
    //   fields: ['navTitle']
    // },
    // highlight: {
    //   // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
    //   theme: 'dracula'
    // }
  },
  typescript: {
    shim: false
  }
})
