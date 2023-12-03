/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#fff",
        gray: {
          "100": "#0d0d0d",
          "200": "#030406",
          "300": "rgba(0, 0, 0, 0.3)",
          "400": "rgba(0, 0, 0, 0.04)",
        },
        text: "#fafafa",
        button2: "#db4444",
        secondary: "#f5f5f5",
        text2: "#000",
        button1: "#00ff66",
        "hover-button": "#e07575",
        gainsboro: "#d9d9d9",
      },
      spacing: {},
      fontFamily: {
        "title-12px-medium": "Poppins",
        "heading-48px-semibold": "Inter",
      },
      borderRadius: {
        "28xl": "47px",
        "11xs-4": "1.4px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      base: "16px",
      "5xl": "24px",
      "29xl": "48px",
      xl: "20px",
      "17xl": "36px",
      "13xl": "32px",
      "2xs": "11px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
