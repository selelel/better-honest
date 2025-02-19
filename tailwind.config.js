/** @type {import('tailwindcss').Config} */
module.exports = {
  purge:  ['./src/**/*.{js,jsx,ts,tsx}'],
  content: [
    "./src/pages/*.{js,jsx,ts,tsx}",
+   "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [],
}

