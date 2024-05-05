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
        FIREBASE_TYPE: process.env.FIREBASE_TYPE,
        FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
        FIREBASE_PRIVATE_KEY_ID: process.env.FIREBASE_PRIVATE_KEY_ID,
        FIREBASE_PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY,
        FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL,
        FIREBASE_CLIENT_ID: process.env.FIREBASE_CLIENT_ID,
        FIREBASE_AUTH_URI: process.env.FIREBASE_AUTH_URI,
        FIREBASE_TOKEN_URI: process.env.FIREBASE_TOKEN_URI,
        FIREBASE_AUTH_PROVIDER_X509_CERT_URL: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
        FIREBASE_CLIENT_X509_CERT_URL: process.env.FIREBASE_CLIENT_X509_CERT_URL,
        FIREBASE_UNIVERSE_DOMAIN: process.env.FIREBASE_UNIVERSE_DOMAIN,
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
