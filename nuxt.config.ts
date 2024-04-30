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
            title: "The Glowing Artistry",
        },
    },
    css: ["~/assets/css/main.css"],
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
