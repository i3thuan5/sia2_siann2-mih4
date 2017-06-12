var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      tensuConfig: "tensuConfig",
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      tensuConfig: path.join(path.resolve(), "taupahji.config.js"),
    },
  },
  module: {
    loaders: [{
      test: /\.jsx?/,
      loaders: ['babel', 'strict'],
      include: path.join(__dirname, 'src'),
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader!postcss-loader',
    },
    {
      test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)$/,
      loader: 'url-loader?limit=1',
    },
    {
      test: /\.json$/,
      loader: 'json-loader',
    },
    {
      test: /\.html$/,
      loader: 'html-loader',
    },
    ],
  },
};
