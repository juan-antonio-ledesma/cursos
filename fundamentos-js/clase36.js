// “var” es la manera más antigua de declarar variables.
// No es muy estricta en cuanto al alcance, ya que al declarar variables de esta forma,
// dichas variables podrán ser accedidas, e incluso modificaddas, tanto dentro como fuera de los bloques internos en una función.

// Con “let” por otra parte, el alcance se reduce al bloque (las llaves) en el cual la variable fue declarada.
// Fuera de este bloque la variable no existe. Una vez declarada la variable con let, no se puede volver a declarar con en ninguna
// otra parte de la función.

// “const” al igual que ““let”” se define en el contexto o alcance de un bloque, a diferencia de let y var,
// las varibles definidas como constantes (const), ya no podrán ser modificadas ni declaradas nuevamente,
// en ninguna otra parte de la función o el contexto en el que ya existen.

// La recomendación es reducir siempre al mínimo el alcance de nuestras variables,
// por lo que se debe usar let en lugar de var mientras sea posible.

// Ejemplos:
var juan = {
  nombre: 'Juan',
  apellido: 'Ledesma',
  edad: 33,
}

// Ejemplo 01 (var):
function esMayorDeEdadVar(persona) {
  if (persona.edad >= 18) {
    var mensaje = 'Es mayor de edad'
  } else {
    var mensaje = 'Es menor de edad'
  }
  console.log(mensaje)
}

// esto es igual a hacer esto:
function esMayorDeEdadVar(persona) {
  var mensaje = '' // Con var siempre conviene declararlas arriba del todo
  if (persona.edad >= 18) {
    mensaje = 'Es mayor de edad'
  } else {
    mensaje = 'Es menor de edad'
    var mensaje2 = 'Otro mensaje' // Por aquí no está pasando (Juan es mayor de edad), observar que ocurre en el console.log de mensaje2
  }
  console.log(mensaje)
  console.log(mensaje2) // Devuelve undefined pero realmente si que exite la variable. Javascript la declara por nosotros arriba del todo (acontinuación de donde pone: var mensaje = '')
}
esMayorDeEdadVar(juan)

// Ejemplo 02 (let)
function esMayorDeEdadLet(persona) {
  if (persona.edad >= 18) {
    let mensaje = 'Es mayor de edad' // Con let el alcance se reduce a lo que está puesto entre las llaves
  } else {
    let mensaje = 'Es menor de edad' // Con let el alcance se reduce a lo que está puesto entre las llaves
  }
  console.log(mensaje) // Devuelve un error: 'mensaje is not defined'
}

// Para que funcione tenemos que declarar el let arriba y después hacer la asignación
function esMayorDeEdadLet(persona) {
  let mensaje = ''
  if (persona.edad >= 18) {
    mensaje = 'Es mayor de edad' // Con let el alcance se reduce a lo que está puesto entre las llaves
  } else {
    mensaje = 'Es menor de edad' // Con let el alcance se reduce a lo que está puesto entre las llaves
  }
  console.log(mensaje)
}
esMayorDeEdadLet(juan)

// Ejemplo 03 (const)
function esMayorDeEdadConst(persona) {
  let mensaje = ''
  const MAYORIA_EDAD = 18 // const no se puede volver a asignar el valor

  // MAYORIA_EDAD = 21 Si tratamos de asignarle otro valor nos va a dar el siguiente error: 'Assignment to constant variable'
  if (persona.edad >= MAYORIA_EDAD) {
    mensaje = 'Es mayor de edad'
  } else {
    mensaje = 'Es menor de edad'
  }
  console.log(mensaje)
}
esMayorDeEdadConst(juan)

// Ejemplo 04 (const) // No se puede reasignar pero ser puede moficar una constante
const numeros = [1, 2, 3, 4, 5, 6]
numeros.push(7)
console.log(numeros)

// Ejemplo 05 (ciclos for con var)
for (var i = 0; i < 10; i++) {
  console.log(i) // Devuelve 0 - 9
}

console.log(i) // Devuelve 10. Podemos acceder al valor de i porque es como si i se declarase fuera del ciclo for

// Ejemplo 06 (ciclos for con let)
for (let j = 0; j < 10; j++) {
  console.log(j) // Devuelve 0 - 9
}

console.log(j) // Devuelve error: 'j is not defined'. No podemos acceder a j ya que el alcance de j se reduce al ciclo for
