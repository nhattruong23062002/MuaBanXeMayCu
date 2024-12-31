/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Kích hoạt dark mode theo class
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        DEFAULT: "#000000", // Mặc định text luôn là màu đen
      },
    },
  },
  plugins: [],
};
