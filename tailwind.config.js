/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                CardShadow: "0 0 8px 4px rgba(140,140,140,1) ",
            },
        },
    },
    plugins: [],
};
