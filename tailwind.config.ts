import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/theme/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/common/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'press-button': 'inset 2px 2px 6px #b5bfc6',
        'dark-press-button': 'inset 2px 2px 6px #000000',
        'button': '2px 2px 6px #b5bfc6',
        'dark-button': '2px 2px 6px #000000',

        'current-button': 'inset 1px 1px 3px #b5bfc6',
        'dark-current-button': 'inset 1px 1px 3px  #000000',

        'bar': '1px 0px 14px #b5bfc6',
        'dark-bar': '1px 0px 14px #000000',

        'card': '5px 5px 8px #b5bfc6',
        'dark-card': '5px 5px 8px #000000',

        'subMenu': 'inset 1px 1px 1px #b5bfc6',
        'dark-subMenu': 'inset 1px 1px 1px  #000000'

      },
      colors: {
        light: {
          'primary': '#FE624C',
          'secondary': '#FFFFFF',
          'background': '#F4F4F4',
          'acent': '#303030',
          'complementary': '#646464',
        },
        dark: {
          'primary': '#FE624C',
          'secondary': '#FFFFFF',
          'background': '#F4F4F4',
          'acent': '#F4F4F4',
          'complementary': '#646464',
        }
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'montserrat': ['Montserrat']
      },
    },
  },
  plugins: [],
};
export default config;
