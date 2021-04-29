const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/webpack'),
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'babel-loader',
      exclude: [[path.resolve(__dirname, 'node_modules')]],
    }]
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  mode: 'development',
  optimization: {
    usedExports: true,
    innerGraph: true,
    sideEffects: true
  },
  devtool: false,
};
