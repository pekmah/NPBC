/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'c-blue': "#092A59",
                'c-blue-dark': "#061E40",
                'c-red': "#A22531",
                'c-red-pale': "#A2253121",
                'c-red-glassy': "#A22531E8",
                'c-black': "#000000",
                'c-white': "#ffffff",
                'c-gray': "#7D7C7C",
                'line-gray': "#D9D9D9",
                'bg-blue': "#092A5914"
            },
        },
    },
    plugins: [],
}
