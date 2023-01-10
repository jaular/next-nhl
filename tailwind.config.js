/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#F5F5F5",
        black: {
          50: "#DFE4F1",
          100: "#BBC5E2",
          200: "#7A8FC7",
          300: "#435B9E",
          400: "#27365D",
          DEFAULT: "#0B0F1A",
          600: "#090C15",
          700: "#06080E",
          800: "#05060B",
          900: "#020204",
        },
        gray: {
          50: "#F6F7F9",
          100: "#EAEDF1",
          200: "#D4DAE3",
          300: "#BFC8D4",
          400: "#A9B5C6",
          DEFAULT: "#94A3B8",
          600: "#6C809D",
          700: "#4F6078",
          800: "#354050",
          900: "#1A2028",
        },
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
