/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'top-[-100px]',
    'bottom-[-80px]',
    'left-[20%]',
    'right-[15%]',
    'w-[500px]',
    'h-[500px]',
    'blur-3xl',
    'blur-2xl',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'sans-serif'],
        header: ['Be Vietnam Pro', 'sans-serif'], // Add Be Vietnam Pro for headers
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'body': '1rem', // 16px
        'small': '0.875rem', // 14px
        'large': '1.125rem', // 18px
        'nav': '0.9375rem', // 15px
        'h1': '3rem', // 48px
        'h2': '2rem', // 32px
        'h3': '1.5rem', // 24px
        'h4': '1.25rem', // 20px
        'btn': '0.9375rem', // 15px
        'footer': '0.8125rem', // 13px
      },
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        theme: {
          main: '#4b236b',
          dark: '#3a1b54',
          light: '#5c2f7e',
          gray: 'hsl(270, 5%, 40%)',
        },
        langchain: {
          green: '#10A37F',
          darkgreen: '#0A8F6C',
          light: '#E5F5F1',
          dark: '#1A202C',
          gray: '#4A5568',
        },
      },
      blur: {
        '3xl': '64px',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'zoom-slow': 'zoomSlow 15s ease-in-out infinite alternate',
        'bounce': 'bounce 1s infinite',
        'pulse-slow': 'pulse 8s ease-in-out infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        zoomSlow: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25%)' },
        },
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%)',
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light"],
  },
};