const tsLoader = () => ({
  test: /\.tsx?$/,
  loader: 'ts-loader',
  exclude: /node_modules/,
  options: {
    transpileOnly: true,
    appendTsSuffixTo: [/\.vue$/]
  }
});

const vueLoader = () => ({
  test: /\.vue$/,
  loader: 'vue-loader',
  options: {
    compilerOptions: {
      preserveWhitespace: false
    }
  }
});

const cssLoader = () => ({
  test: /css$/,
  loader: 'css-loader'
});

module.exports = {
  cssLoader,
  vueLoader,
  tsLoader
};
