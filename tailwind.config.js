/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#7C3AED",  // The vibrant Violet from your screenshot
          secondary: "#DDD6FE", // Light purple for backgrounds
          dark: "#1E1B4B",     // Deep Navy/Purple for Headings
          text: "#4B5563",     // Professional Gray for paragraphs
          white: "#FFFFFF",
          bg: "#FDFBFF",       // Slightly tinted white background
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(124, 58, 237, 0.15)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}