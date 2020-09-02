const { resolve } = require('path');

const baseUrl = resolve(__dirname, 'src');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,

    alias: {
      '@types': resolve(baseUrl, 'types'),
      '@pages': resolve(baseUrl, 'pages'),
      '@services': resolve(baseUrl, 'services'),
      '@components': resolve(baseUrl, 'components'),
      '@hooks': resolve(baseUrl, 'hooks'),
      '@utils': resolve(baseUrl, 'utils'),
      '@styles': resolve(baseUrl, 'styles'),
    },
  };

  return config;
};
