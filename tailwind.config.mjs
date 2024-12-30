/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['"JetBrains Mono"', 'Inter', 'sans-serif'],
      serif: ['"JetBrains Mono"', 'Merriweather', 'serif'],
      mono: ['"JetBrains Mono"', 'monospace'],
    },
    colors: {
      primary: '#1c1917',
      secondary: '#4B5563',
    }
  },
  plugins: [],
};
