/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5fbff',
          100: '#e6f5ff',
          300: '#8ad0ff',
          500: '#1ea7ff',
          700: '#006bb3'
        },
        sentiment: {
          neg: '#ef4444',      // red
          midneg: '#fb923c',   // orange
          neutral: '#f59e0b',  // amber
          midpos: '#86efac',   // light green
          pos: '#16a34a'       // green
        },
        glass: {
          light: 'rgba(255,255,255,0.65)',
          dark: 'rgba(16,24,40,0.55)'
        }
      },

      // UPDATED FONTS — Premium UI look
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial'
        ],
        display: [
          'Poppins',
          'Inter',
          'sans-serif'
        ]
      },

      boxShadow: {
        'soft-lg': '0 8px 30px rgba(2,6,23,0.12)',
        'glass': '0 6px 20px rgba(2,6,23,0.08)'
      },

      keyframes: {
        floaty: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
          '100%': { transform: 'translateY(0px)' }
        },
        shine: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },

      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shine: 'shine 1.6s linear infinite'
      }
    }
  },
  plugins: []
};
