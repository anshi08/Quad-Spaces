/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-green': '#0F6764', 
        'my-white':'#DBF1F3',
      },
    },
  },
  plugins: [],
}

