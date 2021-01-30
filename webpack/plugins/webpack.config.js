const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin') // Importación del plugin una vez instalado
const HtmlWebpackPlugin = require('html-webpack-plugin') // Importación del plugin una vez instalado

module.exports = {
    entry: {
        home: path.resolve(__dirname,'src/js/index.js'),
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'js/[name].js',
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { // Importamos un loader como un objeto
                        loader: MiniCSSExtractPlugin.loader // esto nos devuelve una cadena de texto que indica donde está el loeader
                    },
                    'css-loader',
                ]
            }
        ]
    },
    // En esta clave empezamos a meter los plugins
    plugins: [
        new MiniCSSExtractPlugin({ // Instanciamos la clase del plugin
            filename: 'css/[name].css' // Indicamos la ruta donde aplicar el plugin
        }),
        new HtmlWebpackPlugin({ // Este plugin genera un html de forma dinámica
            title:'Webpack | Pluging' // Aquí le indicamos el título que va a tener
        }),
    ]
}
