/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        vibrantPink: '#D32FB4',
        brightPurple: '#9B4DF8',
        skyBlue: '#4AB9FF',
        limeGreen: '#A5E340',
        deepOrange: '#FF7D2C',
        softYellow: '#FFF76A',
        backgroundBlack: '#000000',
        whiteText: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
