function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

// Persona.prototype.controlAltura = function () {
//     return this.altura > 1.8;
// }

Persona.prototype.controlAltura = () => this.altura > 1.8 // Al pasar la función a arrow function siempre devuelve false

var andres = new Persona('Andres', 'Carrasco', 1.77)
var leticia = new Persona('Leticia', 'Guerra', 1.86)

andres.controlAltura()
leticia.controlAltura()
