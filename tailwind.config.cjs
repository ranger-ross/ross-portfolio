/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                fadeIn: "fadeIn 2s ease-in forwards"
            },
            keyframes: {
                fadeIn: {
                    "0%": {opacity: 0},
                    "100%": {opacity: 1}
                }
            }
        },
        animation: ["motion-safe"]
    },
    plugins: [],
};
