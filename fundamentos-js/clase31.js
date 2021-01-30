const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const options = { crossDomain: true }

function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

  // El método fail se va a ejecutar cuando haya un error (sin conexión a internet, etc...)
  $.get(url, options, callback).fail(() => {
    // Arrow function anónima
    console.log(`Sucedio un error, No se pudo obtener el personaje ${id}`)
  })
}

obtenerPersonaje(1, function (personaje) {
  console.log(`Hola me llamo ${personaje.name}`)

  obtenerPersonaje(2, function (personaje) {
    console.log(`Hola me llamo ${personaje.name}`)

    obtenerPersonaje(3, function (personaje) {
      console.log(`Hola me llamo ${personaje.name}`)

      obtenerPersonaje(4, function (personaje) {
        console.log(`Hola me llamo ${personaje.name}`)

        obtenerPersonaje(5, function (personaje) {
          console.log(`Hola me llamo ${personaje.name}`)
        })
      })
    })
  })
})
