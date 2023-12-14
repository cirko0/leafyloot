/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      customDisabled: {
        "&:disabled": {
          pointerEvents: "none",
          cursor: "not-allowed",
          opacity: "40%",
        },
      },
      colors: {
        white: "#fff",
        black: "#000",
        mediumseagreen: "#41bf75",
        lightgray: "#d2d2d2",
        slategray: "#71737e",
        whitesmoke: "#eee",
        aliceblue: "#edf0f8",
        linen: "#fbf3ea",
        peru: "#d48d3b",
        lavenderblush: "#fff0f0",
        lightcoral: "#d46f77",
        silver: "#c5c5c5",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "41xl": "60px",
        mini: "15px",
        "51xl": "70px",
        "8xs": "5px",
        xl: "20px",
        "3xs": "10px",
      },
    },
    fontSize: {
      "13xl": "2rem",
      "5xl": "1.5rem",
      "29xl": "3rem",
      xl: "1.25rem",
      "45xl": "4rem",
      inherit: "inherit",
    },
    screens: {
      xxl: {
        max: "2560px",
      },
      xl: {
        max: "1920px",
      },
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "425px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
