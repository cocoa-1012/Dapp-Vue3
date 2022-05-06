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
      nc_secondary: "#080a3e",
      nc_shadow: "#1fb6ff",
      nc_input: "#1fb6ff",
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
