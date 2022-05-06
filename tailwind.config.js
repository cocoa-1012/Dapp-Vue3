module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: "#00032a",
      secondary: "#080a3e",
      cyan: "#06b6d4",
      gray: "#c7c7ce",
      grayshadow: "#d1d5db",
      white: "#ffffff",
      placeholder: "#080a32",
      graybackground: "#f3f3f3",
      inputbackground: "#aaaab6",
      pinks: "#e20267",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
