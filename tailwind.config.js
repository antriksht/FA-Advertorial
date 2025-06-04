/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0eefe',
          200: '#b9ddfe',
          300: '#7cc3fc',
          400: '#36a9f8',
          500: '#0c90e6',
          600: '#0073c4',
          700: '#015b9e',
          800: '#054d83',
          900: '#0a416e',
          950: '#062a4b',
        },
        secondary: {
          50: '#f6f8f8',
          100: '#e2eaed',
          200: '#c6d5dc',
          300: '#a1b8c4',
          400: '#7695a7',
          500: '#5b788d',
          600: '#4a6276',
          700: '#3f5161',
          800: '#374553',
          900: '#323c47',
          950: '#1d242c',
        },
        accent: {
          50: '#fffaeb',
          100: '#fff0c6',
          200: '#ffe087',
          300: '#ffc947',
          400: '#ffb81b',
          500: '#f29700',
          600: '#dc7100',
          700: '#b74d00',
          800: '#943c06',
          900: '#7a330a',
          950: '#461800',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};