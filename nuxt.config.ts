// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.scss'],
    modules: [
        [
            '@nuxtjs/google-fonts',
            {
                families: {
                    Inter: [400, 500, 600],
                    Archivo: [400, 500, 600, 700, 800],
                }
            }
        ],
    ]
})
