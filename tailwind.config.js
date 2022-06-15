module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
      Nunito: ["Nunito", "sans-serif"],
    },

    extend: {
      colors: {
        note: {
          100: "#C2DED1",
          200: "#ECE5C7",
          300: "#CDC2AE",
          400: "#354259",
        },
      },
    },
  },
  plugins: [],
};
