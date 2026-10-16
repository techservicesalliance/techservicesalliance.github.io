/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        navy: '#1b1a1a',
        sky: '#d65b55',
        mist: '#F7F8FB',
        lime: '#d65b55',
      },
      spacing: {
        18: '4.5rem',
      },
      fontFamily: {
        sans: ['Onest', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Tomato Grotesk', 'Onest', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(7, 27, 45, 0.10)',
      },
    },
  },
  plugins: [],
}
