const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HTML = require('html-webpack-plugin');

const loaders = require('./loaders');

const isProd = process.env.NODE_ENV === 'production';

const resolve = file => path.resolve(__dirname, file);

module.exports = {
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? false : '#eval-source-map',
  entry: {
    app: resolve('../src/main.ts')
  },
  output: {
    path: resolve('../dist'),
    publicPath: '/dist/',
    filename: '[name].js'
  },
  module: {
    rules: [loaders.vueLoader(), loaders.tsLoader(), loaders.cssLoader()]
  },
  resolve: {
    extensions: ['.js', '.vue', '.scss', '.css', '.ts', '.tsx'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  performance: {
    hints: false
  },
  plugins: [
    new VueLoaderPlugin(),
    new HTML({
      template: resolve('../index.html')
    })
  ],
  optimization: {
    minimizer: isProd
      ? [
          new UglifyJsPlugin({
            cache: true,
            parallel: true
          })
        ]
      : []
  }
};
