// Implementación de una API con XMLHttpRquest.

// Instanciando el request.
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

// Url de la api donde queremos hacer la petición.
let API = 'https://rickandmortyapi.com/api/character/'

function fetchData(url_api, callback) {
  // Referencia al objeto XMLHttpRequest.
  let xhttp = new XMLHttpRequest()

  // Abrimos la petición.
  // parametro1 = método de petición.
  // parametro2 = la url.
  // parametro3 = verificación si es asincrono o no, valor por defecto true.
  xhttp.open('GET', url_api, true)

  //Cuando el estado del objeto cambia, se ejecuta la función:
  xhttp.onreadystatechange = function (event) {
    // Validamos si la conexión a sido exitosa:
    // state 0: inicializado.
    // state 1: cargando.
    // state 2: ya se cargó.
    // state 3: ya hay información.
    // state 4: solicitud completa.
    if (xhttp.readyState === 4) {
      // Validamos si nuestra peticion fue aceptada.
      // status 1xx (100 - 199): Indica que la petición esta siendo procesada.
      // status 2xx (200 - 299): Indica que la petición fue recibida, aceptada y procesada correctamente.
      // status 3xx (300 - 399): Indica que hay que tomar acciones adicionales para completar la solicitud. Por lo general indican redireccionamiento.
      // status 4xx (400 - 499): Errores del lado del cliente. Indica se hizo mal la solicitud de datos.
      // status 5xx (500 - 599): Errores del Servidor. Indica que fallo totalmente la ejecución.
      if (xhttp.status === 200) {
        // primer parámetro = error.
        // segundo parámetro = resultado.
        callback(null, JSON.parse(xhttp.responseText))
      } else {
        // Capturamos el erron si nuestra petición no fue aceptada.
        const error = newError('Error ' + url_api)
        return callback(error, null)
      }
    }
  }
  // Envio de la solicitud.
  xhttp.send()
}

// En la primera petición buscamos el número total de personajes.
fetchData(API, function (error1, data1) {
  // Si hay un error, lo devolvemos.
  if (error1) return console.log(error(error1))
  // Después hacemos una petición para conocer cual es el primer personaje, ya que hemos obtenido el número total de personajes
  fetchData(API + data1.results[0].id, function (error2, data2) {
    // Si hay un error, lo devolvemos.
    if (error2) return console.log(error(error2))
    // Por último hacemos una petición para obtener la dimensión del primer personaje
    fetchData(data2.origin.url, function (error3, data3) {
      // Si hay un error, lo devolvemos.
      if (error3) return console.log(error(error3))
      console.log(data1.info.count) // Obtenemos el número de personajes total
      console.log(data2.name) // Obtenemos el primer personaje
      console.log(data3.dimension) // Obtenemos la dimensión del primer personaje
    })
  })
})
