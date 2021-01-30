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

// Estos requests se están haciendo en serie, no en paralelo (lo vemos en la próxima clase)
obtenerPersonaje(1)
  .then(personaje => {
    console.log(`El personaje 1 es ${personaje.name}`)
    return obtenerPersonaje(2)
  })
  .then(personaje2 => {
    console.log(`El personaje 2 es ${personaje2.name}`)
    return obtenerPersonaje(3)
  })
  .then(personaje3 => {
    console.log(`El personaje 3 es ${personaje3.name}`)
    return obtenerPersonaje(4)
  })
  .then(personaje4 => {
    console.log(`El personaje 4 es ${personaje4.name}`)
    return obtenerPersonaje(5)
  })
  .then(personaje5 => {
    console.log(`El personaje 5 es ${personaje5.name}`)
  })
  .catch(onError)
// .catch(function (id) {
//     onError(id)
// })
