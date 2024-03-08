import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: "#003459",
      },
      backgroundColor: {
        primary: "#003459",
        secondary: "#FCEED5",
      },
      borderRadius: {
        "4xl": "2.5rem",
      },
      borderColor: {
        primary: "#003459",
      },
      fontFamily: {
        "svn-gilroy": ["SVN-Gilroy", "sans-serif"],
        "svn-gilroy-bold": ["SVN-Gilroy-Bold", "sans-serif"],
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
