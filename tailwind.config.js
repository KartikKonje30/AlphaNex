/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Aeonik: ["Aeonik","sans-serif"],
      },
      dropShadow: {
        'md': ['0 4px 3px rgb(79 70 229 / 0.07)','0 2px 2px rgb(79 70 229 / 0.06)'],
        'lg': ['0 20px 13px rgb(79 70 229 / 0.03)','0 8px 5px rgb(79 70 229 / 0.08)'],
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },
  plugins: [],
}

