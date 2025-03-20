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
        red: {
          DEFAULT: "#F87171",
        },
        kakao: {
          DEFAULT: "#FEE500",
        },
      },
      borderRadius: {
        custom10: "10px",
      },
      backgroundImage: {
        "gradient-action": `linear-gradient(
          to right,
          #4F5BD5 0%,
          #BF4D8F 25%,
          #E96B60 50%,
          #FCAC4A 75%,
          #FEDA75 100%
        )`,
      },
    },
  },
  plugins: [],
};

export default config;
