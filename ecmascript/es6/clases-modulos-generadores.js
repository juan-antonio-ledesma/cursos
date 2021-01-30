// Clases (ES6)
class Calculator {
  constructor() {
    this.valueA = 0
    this.ValueB = 0
  }

  sum(valueA, ValueB) {
    this.valueA = valueA
    this.valueB = ValueB
    return this.valueA + this.valueB
  }
}

const calc = new Calculator()
console.log(calc.sum(2, 2))

/////////////////////////////////////

// Importación / Exportación de módulos (ES6)
import { saludar } from './modulo'

saludar()

/////////////////////////////////////

// Generadores (ES6)
function* helloWorld() {
  if (true) {
    yield 'Hello, '
  }
  if (true) {
    yield 'World'
  }
}

const generetorHello = helloWorld()
console.log(generetorHello.next().value)
console.log(generetorHello.next().value)
console.log(generetorHello.next().value)
