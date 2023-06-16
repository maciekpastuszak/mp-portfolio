/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Poppins", "sans-serif"],
      },
      colors: {
        "primary-dark": {
          DEFAULT: "#0E1234",
          300: "#262942",
          800: "#02051F",
        },
        "secondary-blue": {
          DEFAULT: "#81E6D9",
          300: "#A3FBEF",
          800: "#72B9B0",
        },
        "accent-yellow": {
          DEFAULT: "#FFDF38",
          300: "#FFF09F",
          800: "#E1BD00",
        },
      },
      backgroundImage: {
        'hero-bg': "url('/hero-bg.jpg')"
      }
    },
  },
  plugins: [],
};
