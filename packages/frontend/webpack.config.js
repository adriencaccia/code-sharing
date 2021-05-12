const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
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
  mainFields: ['main'],
  mode: 'development',
  optimization: {
    usedExports: true,
    innerGraph: true,
    sideEffects: true
  },
  devtool: false,
};
