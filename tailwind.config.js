/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit_reg: '"Outfit", sans-serif',
        outfit_thin: '"Outfit", sans-serif',
        neue: '"Neue Aachen Pro", sans-serif',
      },
    },
  },
  plugins: [],
};
