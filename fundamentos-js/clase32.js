const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const options = { crossDomain: true }

// Promesas

// Estados:
// pending (cuando se inicializa)
// fulfiled (cuando se resuelve exitosamente) --> para obtener el valor cuando se resuelve exitosamente llamamos a .then(val => ...)
// rejected (cuando fracasa) --> para obtener el tipo de error que ha provocado cuando no se ha podido resolver llamamos a .catch(err => ...)

// Para crear una promesa hacemos lo siguiente:
// new Promise(function(resolve,reject){
//      ...
// }).then(valor => {
//      ...
// }).catch(err => {
//      ...
// })

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $.get(url, options, function (data) {
      // Esto no se va a ejecutar hasta que no se halla resuelto exitosamete la promesa
      // Nos va a devolver el valor que estemos solicitando, en este caso el nombre del personaje de Star Wars
      resolve(data)
    }).fail(() => {
      // Esto se va ejecutar cuando no se pueda resolver
      // En este caso le estamos pidiendo que nos de el id del personaje de Star Wars
      reject(id)
    })
  })
}

function onError(id) {
  console.log(`Sucedió un error al obtener el personaje número ${id}`)
}

obtenerPersonaje(1)
  .then(function (personaje) {
    console.log(`El personaje 1 es ${personaje.name}`)
  })
  .catch(onError)
//   .catch(function (id) {
//     onError(id)
//   })
