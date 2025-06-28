/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        heading: ["Montserrat", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: "#2563eb",
        secondary: "#64748b",
        accent: "#f59e42",
      },
    },
  },
  plugins: [],
};
