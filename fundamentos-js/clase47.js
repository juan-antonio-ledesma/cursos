// Definimos constantes
const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')
const ULTIMO_NIVEL = 3 // Indicamos el último nivel que va a tener nuestro juego. El número de niveles que va a tener nuestro juego

// Creamos la clase Juego donde va a estar toda la lógica del videojuego
class Juego {
  // Definimos el constructor
  constructor() {
    // Bindeamos inicializar al this del juego (al objeto)
    this.inicializar = this.inicializar.bind(this)

    this.inicializar()
    this.generarSecuencia()
    setTimeout(this.siguienteNivel, 500)
  }

  // Función inicializar
  inicializar() {
    // Bindeamos elegirColor al this del juego (al objeto)
    this.elegirColor = this.elegirColor.bind(this)

    // Bindeamos siguienteNivel al this del juego (al objeto)
    this.siguienteNivel = this.siguienteNivel.bind(this)

    // Escondemos el botón empezar a jugar
    btnEmpezar.classList.toggle('hide')

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
    this.secuencia = new Array(ULTIMO_NIVEL)
      .fill(0)
      .map(n => Math.floor(Math.random() * 4))
  }

  // Función siguiente nivel
  siguienteNivel() {
    this.subnivel = 0 // Creamos este atributo subnivel y lo igualamos a 0, cada vez que el usuario comienza un nivel. Indicamos el número de aciertos que va teniendo en cada nivel, haciendo un incremento cada vez que pulsemos en el botón correcto
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

  // Función transformar color a número
  transformarColorANumero(color) {
    switch (color) {
      case 'celeste':
        return 0
      case 'violeta':
        return 1
      case 'naranja':
        return 2
      case 'verde':
        return 3
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

  // Función eliminar eventos click. Desactivamos los eventos click ya que nos tienen que dar la siguiente secuencia, una vez dada los eventos se vuelven a agregar
  eliminarEventosClick() {
    this.colores.celeste.removeEventListener('click', this.elegirColor)
    this.colores.violeta.removeEventListener('click', this.elegirColor)
    this.colores.naranja.removeEventListener('click', this.elegirColor)
    this.colores.verde.removeEventListener('click', this.elegirColor)
  }

  // Función elegir color
  elegirColor(event) {
    const nombreColor = event.target.dataset.color // Estamos guardando en una constante el valor del atributo data-color="" (atributo del html), del botón donde hemos pulsado (event.target)
    const numeroColor = this.transformarColorANumero(nombreColor) // Guardamos en una constante lo que nos retorna al llamar al método transformarColorANumero pasándole el nombre del color
    this.iluminarColor(nombreColor)

    if (numeroColor === this.secuencia[this.subnivel]) {
      // Comparamos el número de color elegido con la secuencia(Array) en la posición subnivel que corresponda (comienza siempre en 0, vamos incrementado subnivel si acierta)
      this.subnivel++

      if (this.subnivel === this.nivel) {
        // Si esto ocurre el usuario pasa de nivel
        this.nivel++
        this.eliminarEventosClick() // Desactivamos los eventos click ya que nos tienen que dar la siguiente secuencia

        if (this.nivel === ULTIMO_NIVEL + 1) {
          // ¡Has ganado, te has pasado el juego!
          this.ganoElJuego()
        } else {
          // setTimeout(() => this.siguienteNivel(), 1500)
          // setTimeout(this.siguienteNivel, 1500) Si hacemos esto, this en la función siguienteNivel hace referencia a window, ya que setTimeout pertenece a window. (esto genera un error)
          // Para solucionarlo hacemos lo siguiente, lo bindeamos al this del juego (al objeto), de esta forma: setTimeout(this.siguienteNivel.bind(this), 1500)
          setTimeout(this.siguienteNivel, 1500)
        }
      }
    } else {
      // Has perdido :(
      this.perdioElJuego()
    }
  }

  // Función que indica al usuario que se ha pasado el juego
  ganoElJuego() {
    swal('Simon dice:', '¡Has ganado, te has pasado el juego!', 'success') // La librería swall devuelve una promesa
      //.then(() => this.inicializar())
      .then(this.inicializar) // Lo bindeamos en inicializar
  }

  // Función que indica al usuario que se ha equivocado
  perdioElJuego() {
    swal('Simon dice:', 'Has perdido :(', 'error').then(() => {
      this.eliminarEventosClick()
      this.inicializar()
    })
  }
}

// Pulsamo sobre el botón empezar juego
function empezarJuego() {
  window.juego = new Juego()
}
