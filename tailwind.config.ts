// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
       colors: {
        gareen: '#31C137', // replace with your custom green
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        ubuntu: ['var(--font-ubuntu)'],
        poppins: ['var(--font-poppins)'],
        quicksand: ['var(--font-quicksand)'],
      },
    },
  },
  plugins: [],
};

export default config;
