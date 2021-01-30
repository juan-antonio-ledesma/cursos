const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const options = { crossDomain: true }

const onPeopleResponse = function (person) {
  console.log(`Hola me llamo ${person.name}`)
}

function obtenerPersonaje(id) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  $.get(url, options, onPeopleResponse)
}

obtenerPersonaje(1) // Luke Skywalker
obtenerPersonaje(2) // C-3PO
obtenerPersonaje(3) // R2-D2

// Esto es un claro ejemplo de Asincronismo
// No podemos predecir el orden en que nos llega la respuestas del servidor (en la próxima clase lo vemos).
