/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
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
          800: "#4a8c83",
        },
        "accent-yellow": {
          DEFAULT: "#FFDF38",
          300: "#FFF09F",
          800: "#EECB15",
        },
      },
      backgroundImage: {
        'hero-bg': "url('/hero-bg.jpg')"
      },
      dropShadow: {
        "md" : "0 0 5px rgb(163,251,239)"
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(255, 255, 255, 0.3)',
        'innerV2' : 'inset 0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
      },
    },
  },
  plugins: [],
};
