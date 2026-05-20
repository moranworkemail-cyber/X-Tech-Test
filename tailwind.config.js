/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdf9f3',
          100: '#f9f0e1',
          200: '#f2dfc0',
          300: '#e8c98a',
        },
        xela: {
          brown: '#3d1f0a',
          dark: '#2a1305',
          gold: '#c8902a',
          light: '#e8c98a',
          warm: '#f5ede0',
          red: '#c0392b',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        'fade-in': 'fadeIn 0.25s ease-out',
      },
    },
  },
  plugins: [],
};
