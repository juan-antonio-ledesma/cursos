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

var personas = [juan, mariano, luisa, estefania]
// Esto:personas[0].altura; y esto: personas[0]["altura"]; es lo mismo.

for (i = 0; i < personas.length; i++) {
  var persona = personas[i]
  console.log(`${persona.nombre} mide ${persona.altura}mts`)
}
