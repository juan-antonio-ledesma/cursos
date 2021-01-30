// En este ejemplo vemos como el prototipo Desarrollador hereda del prototipo Persona.
// Se hereda el método saludar y el método controlAltura de Persona.
// En el ejemplo estamos pisando el método saludar de Persona y creando uno nuevo para el prototipo Desarrollador.

function heredaDe(prototipoHijo, prototipoPadre) {
  var fn = function () {}
  fn.prototype = prototipoPadre.prototype
  prototipoHijo.prototype = new fn()
  prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.controlAltura = function () {
  return this.altura > 1.8
}

function Desarrollador(nombre, apellido) {
  this.nombre = nombre
  this.apellido = apellido
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function () {
  console.log(
    `Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`,
  )
}

// var juan = new Persona('Juan', 'Ledesma', 1.86);
// var luisa = new Desarrollador('Luisa', 'Cárdenas', 1.77);
