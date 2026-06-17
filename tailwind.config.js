/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        moro: {
          50: "#eefcf4",
          100: "#d8f7e6",
          200: "#b5edcf",
          300: "#83ddb0",
          400: "#48c587",
          500: "#22a96a",
          600: "#148954",
          700: "#0f6f45",
          800: "#075f37",
          900: "#064b2e"
        }
      },
      boxShadow: {
        soft: "0 18px 50px rgba(6, 75, 46, 0.10)"
      },
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui"],
        respect: ["Georgia", "serif"],
        discipline: ["Arial", "ui-sans-serif"],
        responsibility: ["Verdana", "ui-sans-serif"],
        fellowship: ["Trebuchet MS", "ui-sans-serif"],
        honesty: ["Courier New", "monospace"]
      }
    }
  },
  plugins: []
};
