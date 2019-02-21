const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');


const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = withSass({
  webpack(config, options) {

    return config;
  }
});

console.log('env.source', process.env.SOURCE);

const nextConfig = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    runtime: {
      isServer: true,
      isClient: false,
      mode: process.env.NODE_ENV,
      production: process.env.NODE_ENV === "production",
      development: process.env.NODE_ENV === "development",
    },
    telega: {
      dialogID: "-277088332",
      APIKey: "529302293:AAF8ldx4bS1iK7XIPncirnK2dYFxgSgnK0M",
    }
  },
  publicRuntimeConfig: {
    // Available on client
    runtime: {
      isServer: false,
      isClient: true,
      mode: process.env.NODE_ENV,
      production: process.env.NODE_ENV === "production",
      development: process.env.NODE_ENV === "development",
      testing: process.env.TESTING === "testing",
    },
    analytics: {
      gaID: 'UA-119183335-1',
      yaID: 132186,
      fbpID: '196710264445109',
      source: process.env.SOURCE,
      recaptcha: process.env.RECAPTCHA
    },
    testing: {
      recaptcha: process.env.TESTING === 'testing'
    }
  },
  ///assetPrefix: process.env.NODE_ENV === "production" ? 'https://cdn.cloudflare.com' : null,
  webpack: (config, options) => {
    /* Aliases to use same path in imports everywhere, i.e. import DatePicker from "bsm-shared/components/common/DatePicker"; */
    config.resolve.alias.shared = __dirname + '/bsm-shared/';
    config.resolve.alias.static = __dirname + '/bsm-shared/static/';
    config.resolve.alias.components = __dirname + '/bsm-shared/components/';
    config.resolve.alias.utils = __dirname + '/bsm-shared/utils/';
    config.resolve.alias.data = __dirname + '/bsm-shared/data/';

    /* compression-webpack-plugin creates precompressed *.gz files for nginx gzip_static */
    //const CompressionPlugin = require('compression-webpack-plugin');
    //config.plugins.push(new CompressionPlugin());

    /* minify css*/
    config.module.rules.push({
      test: /\.(raw)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: 'raw-loader',
    });
    if (config.mode === 'production') {
      if (Array.isArray(config.optimization.minimizer)) {
        config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));
      }
    }

    config.resolve.symlinks = false;

    /* done */
    return config
  },
};


module.exports = withPlugins([
  withCSS,
  withSass,
  withImages,
], nextConfig);
