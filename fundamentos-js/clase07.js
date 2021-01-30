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

function imprimirNombreEnMayusculas(persona) {
  // var nombre = persona.nombre
  var { nombre } = persona
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(juan)
imprimirNombreEnMayusculas(luisa)

// Ejercicio
function imprimirNombreYEdad(persona) {
  // var {nombre} = persona;
  // var {edad} = persona;
  var { nombre, edad } = persona

  console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`)
}

imprimirNombreYEdad(juan)
imprimirNombreYEdad(luisa)
