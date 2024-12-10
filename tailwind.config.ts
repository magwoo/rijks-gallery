import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{vue,ts}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#2F5349",
          600: "#2B4A41",
        },
        neutral: "#4C4845",
        accent: "#1B1D1A",
        background: "#F7F6F4",
      },
      screens: {
        default: "1248px",
      },
      fontFamily: {
        inter: "Inter",
        playfair: "Playfair",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
} satisfies Config;
