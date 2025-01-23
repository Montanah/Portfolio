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
        'max-sm': { max: '480px' }, // Defines a max-width breakpoint
        'max-md': { max: '768px' }, // Defines a min-width breakpoint
        'max-lg': { max: '1024px' }, // Defines a min-width breakpoint
        'max-xl': { max: '1280px' }, // Defines a min-width breakpoint
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
