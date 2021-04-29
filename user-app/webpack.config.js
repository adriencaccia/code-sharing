const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // module: {
  //   rules: [{
  //     use: {
  //       loader: 'babel-loader',
  //       options: {
  //         plugins: ['lodash'],
  //         presets: [['@babel/preset-env', {'modules': false}]]
  //       }
  //     },
  //     test: /\.js$/,
  //     exclude: /node_modules/,
  //   }]
  // },
  mode: 'development',
  optimization: {
    usedExports: true,
    innerGraph: true,
    sideEffects: true
  },
  devtool: false,
  // plugins: [
  //   new BundleAnalyzerPlugin(),
  //   // new LodashModuleReplacementPlugin(),
  //   // new DuplicatePackageCheckerPlugin()
  // ]
};
