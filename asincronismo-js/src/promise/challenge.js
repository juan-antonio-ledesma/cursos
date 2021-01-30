// Importamos la función.
const fetchData = require('./../utils/fetchData')

// Declaramos la ruta de la API.
const API = 'https://rickandmortyapi.com/api/character/'

fetchData(API)
  .then(data => {
    // Obtenemos el número de personajes.
    console.log(data.info.count)

    // Realizamos de nuevo la promesa y devolvemos el personaje nº 1.
    return fetchData(`${API}${data.results[0].id}`)
  })
  .then(data => {
    // Esperamos la promesa anterior y obtenemos el personaje nº 1.
    console.log(data.name)

    // Realizamos de nuevo la promesa y devolvemos la dimensión del personaje nº 1.
    return fetchData(data.origin.url)
  })
  .then(data => {
    // Esperamos la promesa anterior y obtenemos la dimensión del personaje nº 1.
    console.log(data.dimension)
  })
  // Capturamos el error si la petición a la API fue rechazada.
  .catch(err => {
    console.log(err)
  })
