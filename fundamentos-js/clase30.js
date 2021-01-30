const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const options = { crossDomain: true }

// Añadimos el parámetro callback que es una función que vuelve a llamar obtenerPersonaje
function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

  $.get(url, options, function (person) {
    console.log(`Hola me llamo ${person.name}`)

    // Hacemos la llamada del callback para así conseguir que nos devuelva en orden el nombre de los personajes
    if (callback) {
      callback()
    }
  })
}

// Esto es lo que se denomina, Callback hell (más adelante veremos como resolver esto)
obtenerPersonaje(1, function () {
  obtenerPersonaje(2, function () {
    obtenerPersonaje(3, function () {
      obtenerPersonaje(4, function () {
        obtenerPersonaje(5)
      })
    })
  })
})

// No podemos hacer esto: obtenerPersonaje(1, obtenerPersonaje(2))
// De esta forma estamos llamando inmediatamente a obtenerPersonaje(2), y no conseguiríamos que nos diese en orden el nombre de los personajes
// Todo lo que se ejecuta de forma asícrona pasa al Call Stack, y se resulve primero lo ultimo que entra, es decir el proceso en este caso sería: obtenerPersonaje(2), después obtenerPersonaje(1)
