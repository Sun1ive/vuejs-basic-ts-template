const merge = require('webpack-merge');
const path = require('path');

const baseConf = require('./webpack.config.js');

const resolve = file => path.resolve(__dirname, file);

module.exports = merge.smart(baseConf, {
  devServer: {
    port: 8080,
    contentBase: resolve('../dist'),
    overlay: true,
    stats: 'errors-only'
  },
  plugins: []
});
