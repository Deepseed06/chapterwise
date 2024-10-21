import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'bg-login',
    'bg-signup',
    
  ],
  theme: {
    extend: {
      colors: {
        signup:"#435E93",
        login: "#735D00",
      },
      backgroundImage: {
        // "bg-image":"url('./public/assets/image-bg.png')"
      },
     
    },
  },
  plugins: [],
};
export default config;
