// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Karla:wght@400;500;600&display=swap',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/chinchilla.png',
        },
      ],
      title: 'Mi Portafolio | Alan Ortega',
    },
  },
  image: {
    dir: 'assets/images',
  },
  modules: ['@nuxt/image', '@nuxtjs/tailwindcss', 'nuxt-swiper', 'nuxt-icon'],
  devtools: { enabled: true },
});
