import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/theme/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    darkMpde:class
    extend: {
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
          'secundary': '#F4F4F4',
          'background': '#FFFFFF',
          'acent': '#646464',
          'complementary': '#303030',
        }
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'montserrat': ['Montserrat']
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
