// La memoización es una técnica de programación que nos permite ahorrar cómputo o procesamiento en JavaScript,
// al ir almacenando el resultado invariable de una función para que no sea necesario volver a ejecutar todas las instrucciones de nuevo,
// cuando se vuelva a llamar con los mismos parámetros. Es similar a usar memoria cache.

// Ejemplo de memoización (vamos a utilizar un ejemplo de recursividad para explicarlo)

// Calculo factorial de un número, ejemplo:

// !6 = 6 * 5 * 4 * 3 * 2 * 1 = 720
// !12 = 12 * 11 * 10 * 9 * 8 * 7 * !6

function factorial(n) {
  if (!this.cache) {
    // preguntamos si la cache de la función está definida
    this.cache = {} // si no está definida, la creamos y la igualamos a un objeto vacio
  }

  debugger
  if (this.cache[n]) {
    // Aquí lo que estamos haciendo, es preguntar si ya se ha hecho un cálculo, si se ha guardado algún valor en cache, en this.cache[n]
    // En caso afirmativo, recuperamos de la cache ese valor, para no tener que volver a operar, lo que se haya guardado ya.
    // Entrará por aquí la segunda vez que llamemos a factorial(n)
    return this.cache[n]
  }

  if (n === 1) {
    // Caso base
    return 1
  }

  //return n * factorial(n - 1) // Llamada recursiva
  this.cache[n] = n * factorial(n - 1) // nos guardamos en cache los números para hacer la llamada recursiva
  debugger
  return this.cache[n] // retornamos el calculo final
}

//factorial(6)
//factorial(12)
