/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./scripts/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0F172A',
        'bg-surface': '#1E293B',
        'bg-elevated': '#334155',
        'accent': '#F59E0B',
        'accent-light': '#FBBF24',
        'text-pri': '#E2E8F0',
        'text-sub': '#94A3B8',
        'text-muted': '#64748B',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
