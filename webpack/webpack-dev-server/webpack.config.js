const path = require('path')
// const MiniCSSExtractPlugin = require('mini-css-extract-plugin') // No se va a utilizar en el entorno de desarrollo
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack') // Importamos webpack

module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // Suprimimos este loader cuando estamos en modo desarrollo
          // {
          //     loader: MiniCSSExtractPlugin.loader
          // },
          'style-loader', // Inyectamos los estilos cuando estamos en modo desarrollo
          'css-loader',
        ],
      },
    ],
  },
  devServer: {
    hot: true, // configuramos el devServer para que coja los cambios en caliente
    open: true, // abrimos una pesataña en el navegador
    port: 9000, // elegimos el puerto donde se va a abrir
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Instanciamos HotModuleReplacementPlugin
    // Suprmimos este plugin cuando estamos en modo desarrollo
    // new MiniCSSExtractPlugin({
    //     filename: 'css/[name].css'
    // }),
    new HtmlWebpackPlugin({
      title: 'Webpack dev Server',
    }),
  ],
}
