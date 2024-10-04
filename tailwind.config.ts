import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './styles/**/*.{css,scss}',
  ],
  theme: {
    extend: {
      colors: {
        'carrousel-rose': '#d58495',
        'carrousel-bleu': '#00466b',
        'carrousel-or': '#cda333'
      },
      fontFamily: {
        gala: ['"Gala"', "sans-serif"],
        n27regular: ['"N27regular"', "sans-serif"]
      },
    },
  },
  plugins: [],
};
export default config;