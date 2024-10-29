/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navBarText: "#ffffff",
        vibrantPink: "#D32FB4",
        brightPurple: "#9B4DF8",
        skyBlue: "#4AB9FF",
        cyanBlue: "#3bfdf8",
        limeGreen: "#A5E340",
        deepOrange: "#FF7D2C",
        softYellow: "#FFF76A",
        backgroundBlack: "#000000",
        customBlack: "#000d16",
        whiteText: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
