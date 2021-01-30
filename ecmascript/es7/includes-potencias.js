// Includes (ES7)
// Se utiliza para saber si existe un elemento dentro de un Array o String.
// Antes se utilizaba indexOf();
let numbers = [1, 2, 3, 4, 5]

if (numbers.includes(3)) {
  console.log('Se incluye el valor 3 dentro del Array numbers.')
} else {
  console.log('no se encuentra')
}

/////////////////////////////////////

// Potencias (ES7)
// A partir de ES7 se utiliza el operador ** para ejecutar potencias;

let base = 2
let exponent = 3
let result = base ** exponent // 2³ --> 2 elevado a 3;

console.log(result)
