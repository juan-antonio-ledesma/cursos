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

function cumpleanos(persona) {
  //persona.edad += 1; Aquí estamos manipulando el objeto persona (en este caso juan), y le estamos diciendo que que aumente su edad en un año;
  return {
    ...persona, // obtengo el objeto pesona (es un objeto nuevo)
    edad: persona.edad + 1, // le añado un año más a su edad
  }
}

var juanMasViejo = cumpleanos(juan)
