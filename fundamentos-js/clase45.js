// Definimos constantes
const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')

// Creamos la clase Juego donde va a estar toda la lógica del videojuego
class Juego {
  // Definimos el constructor
  constructor() {
    this.inicializar()
    this.generarSecuencia()
    this.siguienteNivel()
  }

  // Función inicializar
  inicializar() {
    this.elegirColor = this.elegirColor.bind(this)

    // Escondemos el botón empezar a jugar
    btnEmpezar.classList.add('hide')

    // Inicializamos el nivel a 1
    this.nivel = 1

    // Guardamos los colores (los botones) en un objeto, los obtenemos de las constantes que hemos definido al principio
    this.colores = { celeste, violeta, naranja, verde }

    // No es necesario hacelo de esta forma
    // this.colores = {
    //     celeste: celeste,
    //     violeta: violeta,
    //     naranja: naranja,
    //     verde: verde
    // }
    // Cuando el nombre de la clave es igual al nombre de la variable a la que se quiere igualar, no es necesario darle un valor
    // Sería suficiente con: this.colores = {celeste, violeta, naranja, verde}
  }

  // Funcion generar secuencia de números aleatorios del 0 al 3
  generarSecuencia() {
    // Creamos un atributo nuevo que ese llama secuencia, algo así:this.secuencia
    // Lo igualamos a un nuevo array que va a tenerer 10 posiciones: new Array(10)
    // Inicialiazamos todos su valores a 0 mediante el método .fill(0). https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
    // Incializamos todos los valores de las posiciones a cero para después poder utilizar .map(n => Math.random() * 4)
    // Rellenamos cada posición con un número aleatorio generado por Math.random(), esto nos devuelve un número entre 0 y 1, después lo multiplicamos 4 y lo redondeamos hacia abajo, Math.floor, para que finalmente nos de un número entre 0 y 3.
    this.secuencia = new Array(10)
      .fill(0)
      .map(n => Math.floor(Math.random() * 4))
  }

  // Función siguiente nivel
  siguienteNivel() {
    // Llamamos al método iluminarSecuencia()
    this.iluminarSecuencia()
    this.agregarEventosClick()
  }

  // Función transformar número a color
  transformarNumeroAColor(numero) {
    switch (numero) {
      case 0:
        return 'celeste'
      // No hace falta poner el break ya que previamente hay un retun
      case 1:
        return 'violeta'
      case 2:
        return 'naranja'
      case 3:
        return 'verde'
    }
  }

  // Función iluminar color
  iluminarColor(color) {
    // Buscamos en el objeto colores, el color que se debe iluminar
    this.colores[color].classList.add('light')
    setTimeout(() => this.apagarColor(color), 350)
  }

  // Función apagar color
  apagarColor(color) {
    this.colores[color].classList.remove('light')
  }

  // Función iluminar secuencia
  // Vamos a recorre el array de la secuencia hasta el nivel en el que esté el usuario
  iluminarSecuencia() {
    // En esta clase se observa la diferencia entre el uso de let y var para la declaración de variables y cómo esta diferencia afecta
    // el alcance de la variable dentro de un ciclo for. Se recomienda siempre el uso de let cuando se trata de estructuras for, ya que
    // al usar var, el valor de dicha variable se va a remplazar cada vez con la última asignación que se haga, mientras que con let, conservará
    // su valor dentro de cada iteración.

    // Siempre que sea posible debemos usar const sobre let, y let sobre var.

    for (let i = 0; i < this.nivel; i++) {
      // Transformamos el número de la secuencia en un color (string)
      const color = this.transformarNumeroAColor(this.secuencia[i])
      // Llamamos al método iluminar color. Añadimos un retraso de 1 segundo multiplicado por el nivel en el que nos encontremos
      setTimeout(() => this.iluminarColor(color), 1000 * i)
    }
  }

  // Función agregar eventos click a los botones después de que el usuario haya podido ver la secuencia de colores
  agregarEventosClick() {
    this.colores.celeste.addEventListener('click', this.elegirColor)
    this.colores.violeta.addEventListener('click', this.elegirColor)
    this.colores.naranja.addEventListener('click', this.elegirColor)
    this.colores.verde.addEventListener('click', this.elegirColor)

    // Observar en la función inicializar, que se hace lo siguiente: this.elegirColor = this.elegirColor.bind(this)
    // Llamamos una nueva función (elegirColor) asociado (bindeado) a la clase Juego, en este caso this.
    // this.elegirColor.bind(this)
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Function/bind

    // Si lo hiciesemos de esta manera: this.elegirColor
    // Aquí ocurre lo siguiente, cuando preguntemos por this en la función elegirColor, nos devolverá el botón donde hemos pulsado en vez de devolvernos la clase Juego.
  }

  // Función elegir color
  elegirColor() {
    console.log(this)
  }
}

// Pulsamo sobre el botón empezar juego
function empezarJuego() {
  window.juego = new Juego()
}
