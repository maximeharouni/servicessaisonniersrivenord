var webpack = require('webpack')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './client/app.jsx',
  output: {
    path: './app/assets/javascripts',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react', 'stage-0'],
        plugins: ['transform-decorators-legacy', ["babel-root-slash-import", {"rootPathSuffix": "client"}]]
      }
    },
    {
      test: /\.scss?$/,
      exclude: /(node_modules|bower_components)/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
    },
    {
      test: /\.json?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'json-loader'
    }]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3001
    }),
    new ExtractTextPlugin('../stylesheets/bundle.css')
  ],
  postcss: function plugins (bundler) {
    return [
      require('postcss-import')({ addDependencyTo: bundler }),
      require('precss')(),
      require('autoprefixer')({
        browsers: [
          'Android 2.3',
          'Android >= 4',
          'Chrome >= 35',
          'Firefox >= 31',
          'Explorer >= 9',
          'iOS >= 7',
          'Opera >= 12',
          'Safari >= 7.1'
        ]
      })
    ]
  }
}
