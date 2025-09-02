/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#e1e9ff',
          200: '#c3d3ff',
          300: '#a5bdff',
          400: '#87a7ff',
          500: '#6b34d9',
          600: '#5a2bb8',
          700: '#492297',
          800: '#381976',
          900: '#271055',
        },
        darkBlue: {
          50: '#f0f2ff',
          100: '#e1e5ff',
          200: '#c3cbff',
          300: '#a5b1ff',
          400: '#8797ff',
          500: '#343c92',
          600: '#2a3075',
          700: '#202458',
          800: '#16183b',
          900: '#0c0c1e',
        },
        neonYellow: {
          50: '#fdffe6',
          100: '#fbffcc',
          200: '#f7ff99',
          300: '#f3ff66',
          400: '#efff33',
          500: '#e6ff3f',
          600: '#b8cc32',
          700: '#8a9926',
          800: '#5c6619',
          900: '#2e330d',
        },
        pink: {
          50: '#ffe6f7',
          100: '#ffccef',
          200: '#ff99df',
          300: '#ff66cf',
          400: '#ff33bf',
          500: '#ff76c9',
          600: '#cc5ea1',
          700: '#994679',
          800: '#662e51',
          900: '#331629',
        },
        gradient: {
          from: '#343c92',
          to: '#6b34d9',
        }
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'Montserrat', 'system-ui', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-up': 'scaleUp 0.3s ease-out',
        'count-up': 'countUp 2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        countUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
