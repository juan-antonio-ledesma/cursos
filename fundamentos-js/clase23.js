function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

// Persona.prototype.controlAltura = () => this.altura > 1.8;
// this en el contexto global se corresponde con window (fuera de esta función)
// this en las arrow functions es window porque se refiere al contexto global

Persona.prototype.controlAltura = function () {
  return this.altura > 1.8
}

var andres = new Persona('Andres', 'Carrasco', 1.77)
var leticia = new Persona('Leticia', 'Guerra', 1.86)

andres.controlAltura()
leticia.controlAltura()
