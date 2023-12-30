/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // for using darkModde via class based props
  darkMode:"class" 
  ,theme: {
    extend: {},
  },
  plugins: [],
}

  