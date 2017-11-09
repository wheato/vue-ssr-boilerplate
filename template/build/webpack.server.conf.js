var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var nodeExternals = require('webpack-node-externals')
var VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
var isProd = process.env.NODE_ENV === 'production'
var env = isProd
  ? config.build.env
  : config.dev.env

var webpackConfig = merge(baseWebpackConfig, {
  entry: './src/entry-server.js',
  module: {
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  target: 'node',
  output: {
    path: config.build.assetsRoot,
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2'
  },
  externals: nodeExternals({
    // do not externalize CSS files in case we need to import it from a dep
    whitelist: /\.css$/
  }),
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env,
      'process.env.VUE_ENV': 'server'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    }),
    // extract css into its own file
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].[contenthash].css')
    }),
    new VueSSRServerPlugin()
  ]
})

if (config.build.bundleAnalyzerReport) {
  var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
