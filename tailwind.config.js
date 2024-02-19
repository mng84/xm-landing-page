/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "sm": "570px",
      "md": "769px",
      "lg": "1200px",
    },
    extend: {},
  },
  plugins: [],
}

