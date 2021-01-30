var juan = {
  nombre: 'Juan',
  apellido: 'Ledesma',
  altura: 1.86,
  cantidadDeLibros: 123,
}

var mariano = {
  nombre: 'Mariano',
  apellido: 'Ledesma',
  altura: 1.76,
  cantidadDeLibros: 203,
}

var luisa = {
  nombre: 'Luisa',
  apellido: 'Cárdenas',
  altura: 1.7,
  cantidadDeLibros: 137,
}

var estefania = {
  nombre: 'Estefanía',
  apellido: 'Salcedo',
  altura: 1.72,
  cantidadDeLibros: 289,
}

var michael = {
  nombre: 'Michael',
  apellido: 'Jordan',
  altura: 1.98,
  cantidadDeLibros: 102,
}

var personas = [juan, mariano, luisa, estefania, michael]

// var totalDelibros = 0;

// for (var i = 0; i < personas.length; i++) {
//     totalDelibros += personas[i].cantidadDeLibros;
// }

// Se le pasa a la función el valor inicial del contador y la persona, equivaldría a esto personas[i].cantidadDeLibros si hiciesemos un bucle for y lo iterasemos.
const reducir = (contador, { cantidadDeLibros }) => contador + cantidadDeLibros

// Ha reduce se le pasa dos parámetros, el primero una función y el segundo el valor inicial del contador.
var totalDeLibros = personas.reduce(reducir, 0)

console.log(`En total todos tienes ${totalDeLibros} libros`)

// El método reduce() nos permite reducir, mediante una función que se aplica a cada uno de los elemento del array, todos los elementos de dicho array, a un valor único.
