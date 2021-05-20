/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
  style: {
    postcss: {
      plugins: [
        // eslint-disable-next-line import/no-extraneous-dependencies
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
};
