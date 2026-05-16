/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#fdfbfb',
          100: '#f8f4f4',
          200: '#f6dfe3',
          300: '#e9cad3',
          400: '#d9b8c4',
          500: '#c49aab',
          muted: '#5c5560',
          ink: '#3a3540',
        },
      },
      fontFamily: {
        script: ['"Great Vibes"', 'cursive'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 60px rgba(217, 184, 196, 0.35)',
        card: '0 24px 48px rgba(58, 53, 64, 0.08)',
        lift: '0 18px 40px rgba(58, 53, 64, 0.12)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      backgroundImage: {
        'lux-gradient':
          'linear-gradient(165deg, #ffffff 0%, #f8f4f4 42%, #f6dfe3 100%)',
      },
      animation: {
        shimmer: 'shimmer 8s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
