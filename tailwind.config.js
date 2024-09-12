/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'pale-cyan': 'var(--pale-cyan)',
        'dark-cyan': 'var(--dark-cyan)',
        'grayish-blue': 'var(--grayish-blue)',
      },
    },
  },
  plugins: [],
}
