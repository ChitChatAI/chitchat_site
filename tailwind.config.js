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
        header: ['Be Vietnam Pro', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'body': '1rem',
        'small': '0.875rem',
        'large': '1.125rem',
        'nav': '0.9375rem',
        'h1': '3rem',
        'h2': '2rem',
        'h3': '1.5rem',
        'h4': '1.25rem',
        'btn': '0.9375rem',
        'footer': '0.8125rem',
        'fs-1': '24px',
        'fs-2': '18px',
        'fs-3': '17px',
        'fs-4': '16px',
        'fs-5': '15px',
        'fs-6': '14px',
        'fs-7': '13px',
        'fs-8': '11px',
      },
      fontWeight: {
        300: '300',
        400: '400',
        500: '500',
        600: '600',
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
        'orange-yellow-crayola': 'hsl(0, 0%, 70%)', // ✅ Custom color added here
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
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 6s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
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
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%)',
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      boxShadow: {
        '1': '-4px 8px 24px hsla(0, 0%, 0%, 0.25)',
        '2': '0 16px 30px hsla(0, 0%, 0%, 0.25)',
        '3': '0 16px 40px hsla(0, 0%, 0%, 0.25)',
        '4': '0 25px 50px hsla(0, 0%, 0%, 0.15)',
        '5': '0 24px 80px hsla(0, 0%, 0%, 0.25)',
      },
      transitionProperty: {
        '1': 'all',
        '2': 'all',
      },
      transitionDuration: {
        '1': '250ms',
        '2': '500ms',
      },
      transitionTimingFunction: {
        '1': 'ease',
        '2': 'ease-in-out',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light'],
  },
};
