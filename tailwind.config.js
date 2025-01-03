module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'sm': '480px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      // fontFamily: {
      //   'cookie-regular': ['Cookie', 'cursive'],
      // },
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
