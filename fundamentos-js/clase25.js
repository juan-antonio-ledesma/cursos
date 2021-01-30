// No debemos olvidar que por debajo siguen siendo todos prototipos, por más que utilizamos la palabra class que hace referencia a clase, por debajo todo es un prototipo.
class Persona {
  // De esta manera estamos diciendo que va a existir la clase persona y que va a tener un método llamado constructor que es el que se va a ejecutar cuando creemos objetos de esta clase.
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }

  // Además podemos añadirle las funciones que queremos que posea esta clase dentro de la misma
  saludar() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
  }

  controlAltura() {
    return this.altura > 1.8
  }
}

// Aquí decimos creamos un nueva clase Desarrollador que hereda de Persona
class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    // El constructor super es necesario en las clases hijas, y debe ser llamado antes de utilizar this
    super(nombre, apellido, altura)
  }

  saludar() {
    console.log(
      `Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`,
    )
  }
}

// var juan = new Persona('Juan', 'Ledesma', 1.86);
// var luisa = new Desarrollador('Luisa', 'Cárdenas', 1.77);

// Ejercicio
class Pluriempleado extends Persona {
  constructor(nombre, apellido, altura, empleo1, empleo2) {
    super(nombre, apellido, altura)
    this.empleo1 = empleo1
    this.empleo2 = empleo2
  }

  saludar() {
    console.log(
      `Hola, me llamo ${this.nombre} ${this.apellido} y soy pluriempleado/a. Trabajo como ${this.empleo1} y como ${this.empleo2}`,
    )
  }
}

var victor = new Pluriempleado(
  'Victor',
  'Gómez',
  1.77,
  'profesor',
  'nutricionista',
)
victor.saludar()
