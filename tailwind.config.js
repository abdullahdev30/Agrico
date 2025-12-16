/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg-color)",
        text: "var(--text-color)",
        "text-light": "var(--text-light-color)",
        primary: "var(--btn-bg)",
        "primary-text": "var(--btn-text)",
        border: "var(--border-color)",
        card: "var(--card-bg)",
      },
    },
  },
  plugins: [],
};
