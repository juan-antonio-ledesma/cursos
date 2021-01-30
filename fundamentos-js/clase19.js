var juan = {
  nombre: 'Juan',
  apellido: 'Ledesma',
  altura: 1.86,
}

var mariano = {
  nombre: 'Mariano',
  apellido: 'Ledesma',
  altura: 1.76,
}

var luisa = {
  nombre: 'Luisa',
  apellido: 'Cárdenas',
  altura: 1.7,
}

var estefania = {
  nombre: 'Estefanía',
  apellido: 'Salcedo',
  altura: 1.72,
}

var michael = {
  nombre: 'Michael',
  apellido: 'Jordan',
  altura: 1.98,
}

var personas = [juan, mariano, luisa, estefania, michael]

// Map itera por nosotros el array que le demos. En este caso modificamos la altura de cada una de las personas, y la pasamos a cms.
// Map devuelve una copia de personas (un array distinto) con las alturas expresadas en cms.

// const pasarAlturaCms = persona => {
//   return {
//     ...persona,
//     altura: persona.altura * 100,
//   }
// }

const pasarAlturaCms = persona => ({
  ...persona,
  altura: persona.altura * 100,
})

var personasCms = personas.map(pasarAlturaCms)

console.log(personasCms)

// El método map() itera sobre los elementos de un array en el orden de inserción y devuelve array nuevo con los elementos modificados.
