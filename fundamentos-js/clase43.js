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
  }

  // Función inicializar
  inicializar() {
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
}

// Pulsamo sobre el botón empezar juego
function empezarJuego() {
  window.juego = new Juego()
}
