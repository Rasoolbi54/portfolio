import { plugin } from 'postcss';

// @type {@import('tailwindcss').Config}

// tailwind.config.js
module.exports = {
  darkMode: 'class', // ← this is the key!
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
