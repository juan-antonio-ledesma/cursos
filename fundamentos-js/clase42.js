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
  }

  // Función inicializar
  inicializar() {
    btnEmpezar.classList.add('hide')
  }
}

// Pulsamo sobre el botón empezar juego
function empezarJuego() {
  var juego = new Juego()
}
