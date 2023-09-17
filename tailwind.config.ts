import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    colors: {
      main: "#ff8906",
      dark: "#0f0e17",
      light: "#fffffe",
      heading: {
        100: "#fffffe",
        200: "#0f0e17",
      },
      paragraph: {
        100: "#a7a9be",
        200: "#2e2f3e",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {},

  plugins: [require("daisyui"), require("flowbite/plugin")],
};
export default config;
