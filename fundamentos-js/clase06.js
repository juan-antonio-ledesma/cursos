var juan = {
  nombre: 'Juan',
  apellido: 'Ledesma',
  edad: 33,
}

var luisa = {
  nombre: 'Luisa',
  apellido: 'Cárdenas',
  edad: 35,
}

// Versión clásica
// function imprimirNombreEnMayusculas(persona) {
//   console.log(persona.nombre.toUpperCase())
// }

// Versión moderna (obtengo el valor de la clave del objeto que me interesa, en este caso nombre)
function imprimirNombreEnMayusculas({ nombre }) {
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(juan)
imprimirNombreEnMayusculas(luisa)
imprimirNombreEnMayusculas({ nombre: 'Pepito' })
