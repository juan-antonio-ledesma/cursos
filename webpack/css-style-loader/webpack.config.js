const path = require('path')

module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
  mode: 'production',

  // En la clave 'module' empezamos a incluir los loaders
  module: {
    // rules nos permite meter los loaders dentro de un array
    rules: [
      {
        test: /\.css$/, // Expresión regular que reconoce cualquier archivo que tenga la extensión .css
        use: [
          // Comenzamos a manipular los archivos .css
          'style-loader', // Inyecta una etiqueta style dentro de nuestro html
          'css-loader', // Este loader nos permite poner un .css dentro de un archivo .js
        ],
      },
    ],
  },
}
