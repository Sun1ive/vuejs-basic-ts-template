const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HTML = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

const resolve = file => path.resolve(__dirname, file);

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: {
    app: resolve('../src/main.ts')
  },
  output: {
    path: resolve('../dist'),
    publicPath: '/dist/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /css$/,
        loader: 'css-loader'
      }
    ]
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
  devtool: isProd ? false : '#eval-source-map',
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
