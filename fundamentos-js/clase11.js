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

// Funciones que retornan valores
function esMayorDeEdad(persona) {
  return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}

imprimirSiEsMayorDeEdad(felipe)
imprimirSiEsMayorDeEdad(andrea)
