class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }

  saludar(fn) {
    //var nombre = this.nombre;
    //var apellido = this.apellido;

    // Desestructuramos
    var { nombre, apellido } = this

    console.log(`Hola, me llamo ${nombre} ${apellido}`)

    // Preguntamos si nos han pasado una función, en el caso de que si, entrará en el condicional. --> Ej.- juan.saludar();
    // Si en el parámetro no nos pasan nada sera igual a false --> Ej.- juan.saludar(responderSaludo);
    if (fn) {
      // Llamamos a responderSaludo(nombre,apellido,false) el último parámetro lo pasamos a false, o no lo pasamos para indicar que no es un desarrollador.
      //fn(nombre,apellido,false);
      fn(nombre, apellido)
    }
  }

  controlAltura() {
    return this.altura > 1.8
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura)
  }

  saludar(fn) {
    //var nombre = this.nombre;
    //var apellido = this.apellido;

    // Desestructuramos
    var { nombre, apellido } = this

    console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador/a`)

    // Preguntamos si nos han pasado una función, en el caso de que si, entrará en el condicional. --> Ej.- luisa.saludar();
    // Si en el parámetro no nos pasan nada sera igual a false --> Ej.- luisa.saludar(responderSaludo);
    if (fn) {
      // Llamamos a responderSaludo(nombre,apellido,true) el último parámetro lo pasamos a true para indicar que es un desarrollador.
      fn(nombre, apellido, true)
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen día ${nombre} ${apellido}`)

  if (esDev) {
    console.log(`Anda, pero si eres desarrollador/a`)
  }
}

var juan = new Persona('Juan', 'Ledesma', 1.86)
var luisa = new Desarrollador('Luisa', 'Cárdenas', 1.77)

juan.saludar(responderSaludo)
luisa.saludar(responderSaludo)
