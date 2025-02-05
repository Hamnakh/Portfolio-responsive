import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkgrey: "#909090",
        textheader: "#FFFFFF",
        myblack: "#000000",
        mygrey: "#C4C4C4",
        footerBackground: "#1A1A1A",
        textcolour: "#FFFFFF",
        background: "#C4C4C4",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
