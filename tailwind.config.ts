import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '600': '600px',
      },
      colors: {
        themeBlue: '#006284',
        themeLightBlue: '#99DCFF',
        themeWhite: '#F1F1E6',
        themeOrange: '#ED982A',
        themeGray: '#374955',
      },
    },
  },
  plugins: [],
};
export default config;
