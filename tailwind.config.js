/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./lib/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFA500",
      }
    },
  },
  plugins: [],
};
