/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#ebeef0',
        'background': '#0b0d0e',
        'primary': '#0096d2',
        'secondary': '#424959',
        'accent': '#8486a3',
      },
    },
  },
  plugins: [],
}

