/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        borderGrow: {
          '0%': { width: '0%' },
          '50%': { width: '100%' },
        },
        borderShrink: {
          '0%': { width: '100%' },
          '50%': { width: '0%' },
        },
        wiggle: {
          '0%': { transform: 'translatex(-1200px)' },
          '100%': { transform: 'translatex(0px)' },
        },
        wiggle2: {
          '0%': { transform: 'translatex(1200px)' },
          '100%': { transform: 'translatex(0px)' },
        }
      },
      animation: {
        borderGrow: 'borderGrow 0.3s ease-in-out forwards',
        borderShrink: 'borderShrink 0.3s ease-in-out forwards',
        wiggle: 'wiggle 2s linear 1',
        wiggle2: 'wiggle2 2s linear 1',
      },
      colors: {
        'callto-action': '#44C6AC', // Define custom color
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      backgroundImage:{
        'location':"url('/images/c8d2696d-c173-48c9-8849-17b5d187e217.jpg')"
      },
    },
  },
  plugins: [],
}