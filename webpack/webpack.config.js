const path = require('path')

module.exports = {
  entry: './index.js', // nombre del archivo que queremos transpilar
  output: {
    //path: path.resolve(__dirname, 'dist'), --> __dirname sirve para indicar la raiz, 'dist' sería la carpeta donde queremos meter el output
    path: path.resolve(__dirname),
    filename: 'bundle.js', // nombre del archivo de salida
  },
  //mode: 'production' --> compilado de desarrollo o compilado de producción
}
