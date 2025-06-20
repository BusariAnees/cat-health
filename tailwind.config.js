// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
          'beige-light': '    background: linear-gradient(to right, rgb(209, 189, 164), rgb(166 129 92))',
        },
        keyframes: {
          grow: {
            '0%': { width: '0%' },
            '100%': { width: '100%' },
          },
        },
        animation: {
          grow: 'grow 0.8s ease-out forwards',
        },
      },
    },
    plugins: [],
  }