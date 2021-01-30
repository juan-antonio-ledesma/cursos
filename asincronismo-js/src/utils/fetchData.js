// Implementación de una API con XMLHttpRquest.

// Instanciando el request.
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

const fetchData = url_api => {
  // Creamos nuestra promesa
  return new Promise((resolve, reject) => {
    // Referencia al objeto XMLHttpRequest.
    const xhttp = new XMLHttpRequest()

    // Abrimos la petición.
    // parametro1 = método de petición.
    // parametro2 = la url.
    // parametro3 = verificación si es asincrono o no, valor por defecto true.
    xhttp.open('GET', url_api, true)

    //Cuando el estado del objeto cambia, se ejecuta la función:
    xhttp.onreadystatechange = () => {
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
        xhttp.status === 200
          ? // La petición fue aceptada, resolvemos la promesa.
            resolve(JSON.parse(xhttp.responseText))
          : // La petición fue rechazada, devolvemos un error.
            reject(newError('Error ' + url_api))
      }
    }
    // Envio de la solicitud.
    xhttp.send()
  })
}

// Exportamos la función.
module.exports = fetchData
