var juan = {
  nombre: 'Juan',
  apellido: 'Ledesma',
  edad: 33,
  ingeniero: false,
  cocinero: true,
  cantante: false,
  publicista: true,
  futbolista: false,
  camionero: false,
}

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`)

  // if(persona.publicista === true){ // esto ya es igual a true mejor expresarlo como a continuación:
  if (persona.ingeniero) {
    console.log('Ingeniero')
  }

  if (persona.cocinero) {
    console.log('Cocinero')
  }

  if (persona.cantante) {
    console.log('Cantante')
  }

  if (persona.publicista) {
    console.log('Publicista')
  }

  if (persona.futbolista) {
    console.log('Futbolista')
  }

  if (persona.camionero) {
    console.log('Camionero')
  } else {
    console.log('No es camionero')
  }
}

imprimirProfesiones(juan)

// Ejercicio
var felipe = {
  nombre: 'Felipe',
  edad: 24,
}

var andrea = {
  nombre: 'Andrea',
  edad: 17,
}

function imprimirSiEsMayorDeEdad(persona) {
  var { nombre, edad } = persona

  if (edad < 18) {
    console.log(`${nombre} es menor de edad`)
  } else {
    console.log(`${nombre} es mayor de edad`)
  }
}

imprimirSiEsMayorDeEdad(felipe)
imprimirSiEsMayorDeEdad(andrea)
