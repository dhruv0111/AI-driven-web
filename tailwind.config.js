/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f5ff',
          100: '#e0ebff',
          200: '#c7d7fe',
          300: '#a5bcfd',
          400: '#819afc',
          500: '#6378f8',
          600: '#4c55eb',
          700: '#4042d2',
          800: '#3639a9',
          900: '#2f3285',
        },
        secondary: {
          50: '#eefbfa',
          100: '#d5f6f4',
          200: '#aeebe8',
          300: '#7bdad6',
          400: '#49c1be',
          500: '#26a5a3',
          600: '#178385',
          700: '#14686a',
          800: '#145355',
          900: '#144547',
        },
        accent: {
          50: '#fff4ed',
          100: '#ffe8d4',
          200: '#ffcea9',
          300: '#fdac71',
          400: '#fc8138',
          500: '#f95f15',
          600: '#ea480c',
          700: '#c1340c',
          800: '#9a2b12',
          900: '#7c2612',
        },
        success: {
          50: '#ecfdf5',
          500: '#10b981',
          900: '#064e3b',
        },
        warning: {
          50: '#fffbeb',
          500: '#f59e0b',
          900: '#78350f',
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
          900: '#7f1d1d',
        },
      },
    },
  },
  plugins: [],
};