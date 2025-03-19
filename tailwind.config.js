module.exports = {
  content: ["./*.html"],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "Poppins",
      secondary: "Open Sans",
    },
    backgroundImage: {
      hero: "url(/assets/hero/hero-1.png)",
      grid: "url(/assets/grid.png)",
      services: "url(/assets/Services.jpg)",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#292f36",
          hover: "#343e4a",
        },
        secondary: "#4d5053",
        accent: {
          DEFAULT: "#00a3b0",
          secondary: "#b4cdd6",
          hover: "#29b2bd",
        },
      },
    },
  },
  plugins: [],
};
