// entries (ES8)
// Convierte un Object a un Array
const data = {
  frontend: 'Juan',
  backend: 'David',
  design: 'Alex',
}

const entries = Object.entries(data)
console.log(entries)
console.log(entries.length)

/////////////////////////////////////

// values (ES8)
// Convierte un Object a un Array, colocando solamente los valores de las claves en el Array que genera.
const data2 = {
  frontend: 'Juan',
  backend: 'David',
  design: 'Alex',
}

const values = Object.values(data2)
console.log(values)
console.log(values.length)

/////////////////////////////////////

// padStart / padEnd (ES8)
// Nos permite añadir tanto al final como al principio un String a una cadena de texto.
// El primer parámetro que recibe es el número máximo de caracteres que va tener el nuevo String.

var str = 'Hola'
var strStart = str.padStart(8, '----')
var strEnd = str.padEnd(8, '----')
console.log(strStart)
console.log(strEnd)
