const withLess = require('@zeit/next-less');
const withImages = require('next-images');

module.exports = {
  webpack: (config, options) => {
    withLess().webpack(config, options);
    withImages().webpack(config, options);

    return config
  },
};
