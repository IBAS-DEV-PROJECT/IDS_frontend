import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1ED760",
          dark: "#1DB954",
        },
        white: "#FFFFFF",
        black: {
          DEFAULT: "#191414",
          hover: "#2e2e2e",
        },
        gray: {
          light: "#D3D3D3",
          DEFAULT: "#B3B3B3",
          dark: "#535353",
        },
      },
      borderRadius: {
        custom10: "10px",
      },
    },
  },
  plugins: [],
};

export default config;
