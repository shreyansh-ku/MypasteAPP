/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // custom shadow
      boxShadow: {
        'blue-glow': '0 10px 40px rgba(59, 130, 246, 0.9)',   // deeper, more opaque
        'purple-glow': '0 10px 40px rgba(139, 92, 246, 0.9)', // stronger purple
        'black-strong': '0 10px 40px rgba(0, 0, 0, 0.9)',     // heavy dark shadow
      },

    },
  },
  plugins: [],
}