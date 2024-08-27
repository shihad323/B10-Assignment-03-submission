// tailwind.config.js
module.exports = {
    mode: 'jit',
    content: [
      './src/**/*.{html,js}',
    ],
    theme: {
      extend: {
        colors: {
          'off-white': '#f8f9fa',
          'custom-rgb': 'rgb(10, 10, 10)',
        },
      },
    },
    plugins: [],
  };
  