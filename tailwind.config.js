/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  daisyui: {
    themes: [
      {
        ligth: {

          "primary": "#3b82f6",
          "secondary": "#c7d2fb",
          "accent": "#f6b6d1",
          "neutral": "#f5f5f5",
          "base-100": "#e6e6e6",
          "info": "#b0cfff",
          "success": "#80ffff",
          "warning": "#fff580",
          "error": "#ff8080",
        },
      },
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
  plugins: [require("daisyui")],
}

