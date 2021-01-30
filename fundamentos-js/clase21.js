function Persona(nombre, apellido) {
  this.nombre = nombre
  this.apellido = apellido
  // return this; (no hace falte retornar this, el prototipo, ya lo hace por nosotros);
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

// Se crea un nuevo objeto tomando como referencia el prototipo, en este caso Persona
var juan = new Persona('Juan', 'Ledesma')
var luisa = new Persona('Luisa', 'Cárdenas')
juan.saludar()

// Ejercicio
function PersonaEjercicio(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

PersonaEjercicio.prototype.controlAltura = function () {
  var midoAltura = this.altura >= 1.8 ? 'más' : 'menos'
  console.log(
    `Hola, me llamo ${this.nombre} ${this.apellido} y mido ${midoAltura} de 1.8 metros`,
  )
}

var andres = new PersonaEjercicio('Andres', 'Carrasco', 1.77)
var leticia = new PersonaEjercicio('Leticia', 'Guerra', 1.86)
andres.controlAltura()
leticia.controlAltura()
