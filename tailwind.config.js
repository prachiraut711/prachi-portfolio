/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        studio: {
          bg: '#0D0917',
          deep: '#090510',
          secondary: '#140D22',
          surface: '#1A122B',
          card: '#1F1635',
          elevated: '#281D45',
          border: 'rgba(167, 139, 250, 0.14)',
          'border-subtle': 'rgba(255, 255, 255, 0.06)',
          'border-focus': 'rgba(167, 139, 250, 0.35)',
        },
        brand: {
          purple: '#7C3AED',
          violet: '#8B5CF6',
          lavender: '#A78BFA',
          soft: '#C4B5FD',
          glow: 'rgba(139, 92, 246, 0.25)',
          pink: '#EC4899',
        },
        ink: {
          primary: '#F5F3FF',
          secondary: '#A8A3B8',
          muted: '#7A758D',
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'monospace'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-glow': 'pulseGlow 6s ease-in-out infinite',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'float-reverse': 'floatReverse 8s ease-in-out infinite',
        'spin-very-slow': 'spin 35s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(10px) rotate(-2deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.65', transform: 'scale(1.08)' },
        }
      }
    },
  },
  plugins: [],
}
