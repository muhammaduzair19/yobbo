/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                pixelify: ["Pixelify Sans"],
                roboto: ["Roboto"],
            },
        },
    },
    plugins: [],
};
