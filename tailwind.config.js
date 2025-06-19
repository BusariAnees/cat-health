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
        animation: {
          grow: 'growWidth 0.8s ease-out forwards',
        },
        keyframes: {
          grow: {
            '0%': { width: '0%' },
            '100%': { width: '100%' },
          },
          scaleIn: {
            '0%': { transform: 'scale(0)' },
            '100%': { transform: 'scale(1)' },
          },
          fadeUp: {
            '0%': { opacity: 0, transform: 'translateY(10px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
        },
        animation: {
          grow: 'grow 0.8s ease-out forwards',
          scaleIn: 'scaleIn 0.5s ease-out forwards',
          fadeUp: 'fadeUp 0.5s ease-out forwards',
        },
      },
    },
    plugins: [],
  }