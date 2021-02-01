const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js'),
    contact: path.resolve(__dirname, 'src/js/contact.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader'],
      },
    ],
  },
  devServer: {
    hot: true,
    open: true,
    port: 9000,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Home',
      template: path.resolve(__dirname, 'index.html'),
    }),
    new HtmlWebpackPlugin({
      title: 'Contact',
      filename: 'contact.html',
      template: path.resolve(__dirname, 'contact.html'),
    }),
  ],
  optimization: {
    splitChunks: {
      // Permite dividir el peso en diferentes archivos para evitar duplicación
      chunks: 'all',
      minSize: 0,
      name: 'commons',
    },
  },
}
