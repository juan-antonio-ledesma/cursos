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

// Async-await: lo último en asincronismo

// Async-await es la manera más simple y clara de realizar tareas asíncronas.
// Await detiene la ejecución del programa hasta que todas las promesas sean resueltas.
// Para poder utilizar esta forma, hay que colocar async antes de la definición de la función,
// y encerrar el llamado a Promises.all() dentro de un bloque try … catch.

async function obtenerPersonajes() {
  // Para poder utilizar await hay que colocar async antes de la definición de la función

  // Creamos un array con los ids de los personajes que queremos obtener
  var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // Vamos a generar un nuevo array con multiples promesas a partir del array ids
  // .map() toma un array (hace una copia) y modifica cada uno de los elementos, en este caso le estamos añadiendo una promesa
  var promesas = ids.map(id => obtenerPersonaje(id))

  try {
    // Para utilizar la parte asíncrona hay que meterla dentro del try ... catch
    // Nos creamos una variable para guardar a los personajes que vamos a asignar a el valor de una tarea asíncrona

    // La clase Promise tiene un metodo .all que hay que pasarle un array de promesas
    var personajes = await Promise.all(promesas) // await detiene la ejecución del programa hasta que todas las promesas sean resueltas.
    console.log(personajes)
  } catch (id) {
    onError(id)
  }
}

obtenerPersonajes()
