/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
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
      animation: {
        'pulse-scale': 'pulseScale 3s infinite ease-in-out',
      },
      keyframes: {
        pulseScale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};
