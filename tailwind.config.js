/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Fonts
      fontFamily: {
        sans: ['Satoshi', 'sans-serif'],
        header: ['Be Vietnam Pro', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },

      // Font Sizes
      fontSize: {
        body: '1rem',
        small: '0.875rem',
        large: '1.125rem',
        nav: '0.9375rem',
        h1: '3rem',
        h2: '2rem',
        h3: '1.5rem',
        h4: '1.25rem',
        btn: '1rem',
        footer: '0.875rem',
      },

      // Colors: Override Tailwind's defaults
      colors: {
        white: '#f5f5f7', // softened white
        black: '#0f0f1a', // near-black with a tint
        gray: {
          50: '#f0edf7',
          100: '#d7d1e2',
          200: '#bfb5cd',
          300: '#a799b8',
          400: '#8f7ea3',
          500: '#77638e',
          600: '#5f4b74',
          700: '#48355b',
          800: '#311f42',
          900: '#1a1124',
        },

        // Brand theme
        theme: {
          main: '#260a40',
          dark: '#1a1124',
          darker: '#0f0f1a',
          alt: '#2d1a45',
          light: '#e9e6f2',

          text: {
            base: '#eae6f2',
            muted: '#b8a7cc',
            accent: '#ae80ff',
          },

          accent: {
            primary: '#ae80ff',
            secondary: '#29ffc6',
            error: '#ff4e67',
            success: '#3cf58f',
          },
        },
      },

      // Backgrounds
      backgroundImage: {
        'gradient-theme': 'linear-gradient(135deg, #260a40 0%, #502c7a 100%)',
      },

      // Shadow styles
      boxShadow: {
        soft: '0 8px 30px rgba(0,0,0,0.25)',
        inner: 'inset 0 0 1px rgba(255, 255, 255, 0.1)',
        glow: '0 0 10px #ae80ff',
      },

      // Blur
      blur: {
        '3xl': '64px',
      },

      // Animations
      animation: {
        fade: 'fadeIn 0.8s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        pulse: 'pulse 2s ease-in-out infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },

  // Safelist: Keep if you're using runtime rendering
  safelist: [
    'top-[-100px]',
    'bottom-[-80px]',
    'left-[20%]',
    'right-[15%]',
    'w-[500px]',
    'h-[500px]',
    'blur-3xl',
  ],

  plugins: [require('daisyui')],

  daisyui: {
    themes: ['light'], // optional, or add your custom
  },
};
