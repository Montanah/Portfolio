tailwind.config = {
  theme: {
      extend: {
          animation: {
              'shimmer': 'shimmer 1.5s infinite',
              'slideUp': 'slideUp 0.5s ease-out'
          },
          keyframes: {
              shimmer: {
                  '0%': { 'background-position': '-200% 0' },
                  '100%': { 'background-position': '200% 0' }
              },
              slideUp: {
                  '0%': { transform: 'translateY(20px)', opacity: '0' },
                  '100%': { transform: 'translateY(0)', opacity: '1' }
              }
          },
          backgroundImage: {
              'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          }
      }
  }
}