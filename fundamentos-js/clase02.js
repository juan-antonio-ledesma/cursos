var nombre = 'Sacha',
  apellido = 'Lifszyc'

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

var str = nombre.substr(1, 2)

/// Ejercicio (Obtener la última letra del nombre);
var ultimaLetraDelNombre = nombre.charAt(cantidadDeLetrasDelNombre - 1)
