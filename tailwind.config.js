/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cc-black": "#1B1D1F",
        "cc-dark": "#282B30",
        "cc-blue": "#4E80EE",
        "cc-gray": "#6C727F",
        "cc-light": "#D2D5DA",
      },
      fontSize: {
        "cs-50": "12px",
        "cs-100": "14px",
        "cs-200": "16px",
        "cs-300": "32px",
      },
    },
  },
  corePlugins: {
    fontFamily: false,
  },
  plugins: [],
};
