/** @type {import('tailwindcss').Config} */
export default {
    content: ["**/*.vue"],
    theme: {
        extend: {
            colors: {
                "light-olive": "#9DA77D",
                "dark-olive": "#39412C",
                beige: "#D89C77",
                "dark-beige": "#BF785E",
                "dark-brown": "#743A2E",
                "dark-blush": "#A6514B",
            },
            fontFamily: {
                sans: ['"itc-avant-garde-gothic-pro"', "sans-serif"],
                serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
                mono: ["Menlo", "Monaco", "Consolas", '"Liberation Mono"', '"Courier New"', "monospace"],
                "miller-display": ['"miller-display"', "serif"],
            },
            fontWeight: {
                300: "300",
                400: "400",
                500: "500",
                700: "700",
            },
            fontStyle: {
                normal: "normal",
                italic: "italic",
            },
        },
    },
    plugins: [],
};

// font-family: "itc-avant-garde-gothic-pro", sans-serif;
// font-weight: 300;
// font-style: normal;

// font-family: "itc-avant-garde-gothic-pro", sans-serif;
// font-weight: 500;
// font-style: normal;

// font-family: "itc-avant-garde-gothic-pro", sans-serif;
// font-weight: 700;
// font-style: normal;

// font-family: "miller-display", serif;
// font-weight: 300;
// font-style: normal;

// font-family: "miller-display", serif;
// font-weight: 300;
// font-style: italic;

// font-family: "miller-display", serif;
// font-weight: 400;
// font-style: normal;

// font-family: "miller-display", serif;
// font-weight: 400;
// font-style: italic;
