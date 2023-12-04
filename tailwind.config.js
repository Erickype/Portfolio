/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  daisyui: {
    themes: [
      {
        dark: {
          "primary": "#3b82f6",
          "secondary": "#8296af",
          "accent": "#f6b6d1",
          "neutral": "#e4e4e4",
          "base-100": "#1f2937",
          "info": "#a8c4f4",
          "success": "#6fffe8",
          "warning": "#fff580",
          "error": "#ff7e7e"
        },
      },      
    ],
    darkTheme: "dark",
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}

