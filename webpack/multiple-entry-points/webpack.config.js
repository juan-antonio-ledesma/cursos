const path = require('path')

module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js'),
    prices: path.resolve(__dirname, 'src/js/prices.js'),
    contact: path.resolve(__dirname, 'src/js/contact.js'),

    // Otra forma de indicar las rutas:
    // home: path.resolve(__dirname,'src','js','index.js'),
    // prices: path.resolve(__dirname,'src','js','prices.js'),
    // contact: path.resolve(__dirname,'src','js','contact.js'),

    // El módulo “path” de npm el que transpila la dirección que le pasamos por parámetro al método “resolve”
    // a los diferentes sistemas operativos, ya que algunos utilizan “/”, otros “”, otros “//” y así.
    // Ese es el sentido de separar las carpetas por comas.
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
  mode: 'production',
}
