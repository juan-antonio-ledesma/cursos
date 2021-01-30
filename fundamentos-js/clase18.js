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

// const esAlta = persona => {
//   return persona.altura > 1.8
// }

// const esAlta = persona => persona.altura > 1.8;

const esAlta = ({ altura }) => altura > 1.8

var personas = [juan, mariano, luisa, estefania, michael]

// var personasAltas = personas.filter(function (personas){
//     return personas.altura > 1.8;
// })

var personasAltas = personas.filter(esAlta)
// Filter itera por nosotros el array que le demos. En este caso evaluamos la altura de cada una de las personas.
// Filter devuelve un array nuevo.
// Recuerda que si no hay elementos que pasen la prueba, filter devuelve un array vacío.

console.log(personasAltas)

// Ejercicio (filtrado de personas bajas)
var laura = {
  nombre: 'Laura',
  altura: 1.77,
}

var martin = {
  nombre: 'Martín',
  altura: 1.59,
}

var adela = {
  nombre: 'Adela',
  altura: 1.52,
}

var javier = {
  nombre: 'Javier',
  altura: 1.99,
}

var personasEjercicio = [laura, martin, adela, javier]

const esBaja = persona => persona.altura < 1.65

var personasBajas = personasEjercicio.filter(esBaja)

console.log(personasBajas)
