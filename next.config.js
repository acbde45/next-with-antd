const withLess = require('@zeit/next-less');
const withImages = require('next-images');
const withOffline = require('next-offline')

module.exports = {
  webpack: (config, options) => {
    withLess().webpack(config, options);
    withImages().webpack(config, options);
    withOffline({
      workboxOpts: {
        swDest: 'static/service-worker.js',
        runtimeCaching: [
          {
            urlPattern: /[.](png|jpg|ico|css)/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'assets-cache',
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /^https:\/\/code\.getmdl\.io.*/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'lib-cache'
            }
          },
          {
            urlPattern: /^http.*/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'http-cache'
            }
          }
        ]
      },
    }).webpack(config, options);

    return config
  },
};
