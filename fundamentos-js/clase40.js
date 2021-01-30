// Un closure, básicamente, es una función que recuerda el estado de las variables al momento de ser invocada,
// y conserva este estado a través de reiteradas ejecuciones.
// Un aspecto fundamental de los closures es que son funciones que retornan otras funciones.

function crearSaludo(finalDeFrase) {
  return function (nombre) {
    console.log(`${nombre}, que pasa ${finalDeFrase}!`)
  }
}

const saludoMadrilenio = crearSaludo('tronco')
const saludoSevillano = crearSaludo('illo')

saludoMadrilenio('Juan')
saludoSevillano('Juan')

// Otro ejemplo más simple:
// https://medium.com/desk-of-mart%C3%ADn-varela/qu%C3%A9-son-los-closures-en-javascript-y-para-qu%C3%A9-sirven-5be10d48a30e

function inicia() {
  var nombre = 'Andrés' // 'nombre' es una variable local creada por la function 'inicia'
  function muestraNombre() {
    // 'muestraNombre' es una function interna (un closure)
    console.log(nombre) // dentro de esta function usamos una variable declarada en la function padre
  }
  muestraNombre()
}
inicia()

// Más info aquí: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
