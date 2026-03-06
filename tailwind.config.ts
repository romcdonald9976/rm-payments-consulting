import colors from "tailwindcss/colors";

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        zinc: colors.zinc,
      },
    },
  },
  plugins: [],
};

export default config;
