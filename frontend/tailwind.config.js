/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: '#007BFF', // Electric Blue
        dark: '#000000', // Black
        lightDark: "#1E1E1E",
        light: '#FFFFFF', // White
        hoverLight: '#66B2FF',
        hoverDark: '#0056B3',
      },
    },
  },
  plugins: [],
}

