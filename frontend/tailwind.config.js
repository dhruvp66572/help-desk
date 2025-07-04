/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        extremePink: "#F49097",
        mauve: "#DFB2F4",
        core: "#F5E960",
        cleanWhite: "#F2F5FF",
        turquoise: "#55D6C2",
        velvetCrush: "#963484",
        trueBlue: "#3066BE",
        nexaBlue: "#60AFFF",
        clean: "#28C2FF",
        electricBlue: "#2AFFFF",
      },
    },
  },
  plugins: [],
};
