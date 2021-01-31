## Primeros pasos

- `npm init`: Creamos el archivo de configuración (package.json)
- `npm install webpack --save`: Instalamos webpack
- `npm install webpack --save --save-exact`: Instalamos una versión exacta de webpack, es decir cuando clonen nuestro repositorio utilizarán la misma versión de webpack que nosotros instalamos
- `npm install webpack --save-dev --save-exact`: Lo mismo que lo anterior y además creamos la dependencia de desarrollo
- `npm install webpack-cli --save-dev --save-exact`: Instalación del command line interface de webpack
- `npx webpack --entry ./index.js --output-path ./dist --mode production`: Ejecutamos las dependencias de webpack (abrimos el command line interface). Después de `--entry` indicamos el archivo que vamos a transpilar. Después de `--output-path` indicamos la ubicación del archivo de salida (carpeta). Después de `--mode` indicamos el modo `production` o `development`

## webpack.config.js

- `npx webpack`: Ejecutamos lo que tengamos en el archivo `webpack.config.js`.

## package.json

- Creamos un comando en scripts, algo así: `"build": "webpack"`
- Después para ejecutarlo en la terminal hacemos: `npm run build`

## Crear un comando adicional de webpack de una carpeta externa

- Creamos otro archivo `webpack.config.js` en este caso lo ubicamos en la carpeta `external`
- Volvemos al archvo `package.json` y creamos otro script, algo así: `"build:external": "webpack --config ./external/webpack.config.js"`

## multiples puntos de entrada

- en el archivo de `webpack.config.js` en `entry:` podemos crear un objeto para transpilar varios archivos
- Después en file name mediante `[name]` indicamos que tiene que recorrer el objeto con los distintos archivos
  Ejemplo:

```js
const path = require('path')

module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js'),
    prices: path.resolve(__dirname, 'src/js/prices.js'),
    contact: path.resolve(__dirname, 'src/js/contact.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
  mode: 'production',
}
```

## css-loader

- Instalación: `npm install --save-dev --save-exact css-loader`
- Después instalamos otro loader: `npm install --save-dev --save-exact style-loader` para inyectar una etiqueta style dentro de nuestro html
- Despues nuestro `webpack.config.js` lo dejaríamos algo así:

```js
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

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}
```

## Introducción al uso de plugins

Ejemplos de algunas instalaciones:

- `npm install mini-css-extract-plugin --save-dev --save-exact`
- `npm install html-webpack-plugin --save-dev --save-exact`
  Ejemplo de como instalar una versión en concreto de alguna dependencia:
- `npm install mini-css-extract-plugin@1.3.3 --save-dev --save-exact`
  Ejemplo de como quedaría el archivo `webpack.config.js`:

```js
const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js'),
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
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: 'css/[name].css',
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack | Pluging',
    }),
  ],
}
```

## Servidor de desarrollo

- Instalación: `npm install -D --save-exact webpack-dev-server`
- Después creamos el script en el `package.json`. Ejemplo: `"build:dev": "webpack serve --config ./webpack-dev-server/webpack.config.js"`
- Después ejecutamos: `npm run build`
  Con esto conseguimos que nuestro cambios se vean reflejados en el navegador sin refrescar ni lanzando constantemente los builds. El servidor se queda observando los cambios que estamos realizando para representarlos en cuanto guardamos. Se recomienda poner `mode: 'development'` en el archivo `webpack.config.js` para que el compilado sea más rápido.

## Soporte de Javascript moderno con Babel

- Instalación: `npm install --save-dev --save-exact @babel/core babel-loader @babel/preset-env`
- Después creamos el script en el `package.json`. Ejemplo: `"build:babel": "webpack serve --config ./babel/webpack.config.js"`
- Añadimos en la raiz del proyecto el archivo `.babelrc` e incluimos los presets
- Después ejecutamos: `npm run build:babel`
- Instalación de plugin extra de Babel para transpilación de Javascript moderno: `npm install --save-dev --save-exact @babel/plugin-transform-runtime`
- Instalación de runtime de Babel (no como dependencia de desarrollo): `npm install --save --save-exact @babel/runtime`
- Incluimos el plugin en `.babelrc`

## Estilos con preprocesadores

- Instalación: `npm install sass-loader stylus-loader less-loader postcss-loader --save-dev --save-exact`
- Antes de configurar los preprocesadores en webpack necesitas tenerlos previamente instalado en tu equipo, tenerlos en tus Peer dependencies. Instalación: `npm install sass stylus less --save-dev --save-exact`
- Después creamos el script en el `package.json`. Ejemplo: `"build:prepro": "webpack serve --config ./prepro/webpack.config.js"`
- Despues añadimos nuestros loader al archivo `webpack.config.js`
