/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            red: "#FF3E54",
            blue: "#0E1F51",
          },
          container: {
            contain: "1440px"
          }
      },
    },
    plugins: [],
  }