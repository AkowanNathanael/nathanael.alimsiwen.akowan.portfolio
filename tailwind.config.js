/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // For Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // For Next.js Pages Router
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Add other directories if you have components or files using Tailwind classes
  ],
  theme: {
    extend: {
      // Customize your theme here (e.g., colors, fonts, spacing, breakpoints)
      colors: {
        primary: "#ff6347",
        secondary: "#4682b4",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      screens: {
        widescreen: { raw: "(min-aspect-ratio: 3/2)" },
        tallscreen: { raw: "(min-aspect-ratio: 13/20)" },
      },
    },
  },
  plugins: [
    // Add any Tailwind plugins here (e.g., @tailwindcss/typography)
  ],
};
