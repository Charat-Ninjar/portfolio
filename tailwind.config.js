/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'favBlue' : '#1437B1'
      }
    },
  },
  plugins: [require("daisyui")],
}

