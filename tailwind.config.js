module.exports = {
  content: [
    './index.html',
    'css/style.css',
    './js/script.js',
  ],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        // Default min-width breakpoints
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',

        // Custom max-width breakpoints
        'max-sm': { max: '480px' },
        'max-md': { max: '768px' },
        'max-lg': { max: '1024px' },
        'max-xl': { max: '1280px' },
      },
      fontFamily: {
        'cookie-regular': ['Cookie', 'cursive'],
      },
      fontSize: {
        '7xl': ['1.4rem', { lineHeight: '1' }],
        '8xl': ['2.5rem', { lineHeight: '1' }],
        'sm-7xl': ['4.5rem', { lineHeight: '1' }],
        'sm-8xl': ['6rem', { lineHeight: '1' }],
      },
    },
    keyframes: {
      slideUp: {
        from: {
          transform: 'translateY(-100%)',
          opacity: 0,
        },
        to: {
          transform: 'translateY(0)',
          opacity: 1,
        },
      },
    },
    animation: {
      slideUp: 'slideUp 1s ease-in-out',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
