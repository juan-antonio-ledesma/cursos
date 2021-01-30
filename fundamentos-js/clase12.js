var felipe = {
  nombre: 'Felipe',
  edad: 24,
}

var andrea = {
  nombre: 'Andrea',
  edad: 17,
}

// Constante. Valor inmutable, se escribe de esta manera
const MAYORIA_DE_EDAD = 18

// Asignamos a una variable una función
// const esMayorDeEdad = function (persona) {
//     return persona.edad >= MAYORIA_DE_EDAD;
// }

// Arrow function
// const esMayorDeEdad = (persona) => {
//     return persona.edad >= MAYORIA_DE_EDAD;
// }

// Arrow function: versión simplificada (si solamente le pasamos un parámetro no es necesario poner los paréntesis)
// const esMayorDeEdad = persona => {
//     return persona.edad >= MAYORIA_DE_EDAD;
// }

// Arrow function: versión aún más simplificada (si la función lo único que va a hacer es retornar un valor, podemos eliminar la palabra retun y las {})
// const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD;

// Arrow function + destructuro objeto persona para obtener la edad
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}

function permitirAcceso(persona) {
  if (!esMayorDeEdad(persona)) {
    console.log('ACCESO DENEGADO')
  }
}

imprimirSiEsMayorDeEdad(felipe)
imprimirSiEsMayorDeEdad(andrea)

// Ejercicio (Negación de esMayorDeEdad)
const esMenorDeEdad = ({ edad }) => !esMayorDeEdad({ edad })

console.log(esMenorDeEdad(felipe)) // false
console.log(esMenorDeEdad(andrea)) // true
