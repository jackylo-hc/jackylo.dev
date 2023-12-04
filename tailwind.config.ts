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
        primary: '#006284',
        secondary: '#99DCFF',
        white: '#F1F1E6',
        orange: '#ED982A',
      },
    },
  },
  plugins: [],
};
export default config;
