var nombre = 'Juan'

function imprimirNombreEnMayusculas(n) {
  n = nombre.toUpperCase()
  console.log(n)
}

imprimirNombreEnMayusculas(nombre)

// Devuelve 'JUAN' dentro de la función
// Devuelve 'Juan' en el alcance global (window.nombre)
