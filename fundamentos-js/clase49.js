// El punto y coma es opcional en JavaScript, excepto en algunos casos:

// Al comenzar la próxima línea con un array
// Al comenzar la próxima línea con un template string

// Casos en los que si son necesarios:

// Caso 1 (Al comenzar la próxima línea con un array)
console.log('hola')
;[1, 2, 3, 4].forEach(n => console.log(n * 2))

// Caso 2 (Al comenzar la próxima línea con un template string)
const nombre = 'Juan'
;`Hola mi nombre es ${nombre}`

// Después de un return no se puede poner un enter ya que es como si hubiese un punto y coma, y arrojará error.
function calcularDoble(numero) {
  return {
    original: numero,
    doble: numero * 2,
  }
}
