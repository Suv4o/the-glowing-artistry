// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    app: {
        pageTransition: { name: "page", mode: "out-in" },
        head: {
            link: [
                { rel: "stylesheet", href: "https://use.typekit.net/ywp4cwf.css" },
                { rel: "icon", type: "image/svg", href: "/favicon.svg" },
            ],
            script: [{ src: `https://www.google.com/recaptcha/api.js?render=${process.env.RECAPTCHA_SITE_KEY}` }],
            title: "The Glowing Artistry",
        },
    },
    css: ["~/assets/css/main.css"],
    runtimeConfig: {
        RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY,
        public: {
            RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
        },
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    typescript: {
        typeCheck: true,
        strict: true,
    },
});
