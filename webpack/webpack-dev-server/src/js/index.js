import '../css/index.css'

import text from './text'

text()

if (module.hot) {
  // Si cambia algo dentro de texj.js aplica los cambios en caliente
  module.hot.accept('./text.js', function () {
    console.log('he recargado en caliente')
    text()
  })
}
