export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'nuxt-project',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" }
            // { rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.3.1/css/all.css" }
        ],
        script: [
            { src: 'jquery.min.js' },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        // "~/static/font-awesome.min.css"
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ['bootstrap-vue/nuxt'],
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}