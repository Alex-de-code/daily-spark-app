/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "360",
      sm: "640px", // Small screens like smartphones in portrait mode
      md: "768px", // Medium screens like tablets in portrait mode
      lg: "1024px", // Large screens like tablets in landscape mode
      xl: "1280px", // Extra-large screens like laptops and desktops
    },
    extend: {
      textShadow: {
        default: "0 2px 4px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};