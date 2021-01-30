// flat (ES10)
let array1 = [1, 2, 3, [1, 2, 3, [1, 2, 3]]]

// el parámetro que le pasamos indica el número de niveles que queremos aplanar
console.log(array1.flat()) // Output: [1, 2, 3, 1, 2, 3, [1, 2, 3]]
console.log(array1.flat(2)) // Output: [1, 2, 3, 1, 2, 3, 1, 2, 3]

// Si queremos aplanar todos los niveles, y no sabes cuantos niveles tiene el array, podemos usar flat de la siguiente manera:
let array2 = [[1], [0], [66], [0, [0, [2, [4]]]]]
console.log(array2.flat(Infinity)) // Output: [1, 0, 66, 0, 0, 2, 4]

/////////////////////////////////////

// flatMap (ES10)

let array3 = [1, 2, 3, 4, 5]
// con flatMap podemos operar cada uno de los valores del Array, pero previamente aplana el array.
console.log(array3.flatMap(value => [value, value * 2])) // Output: [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]

/////////////////////////////////////

// trimStart / trimEnd (ES10)

let helloWorld = '     Hello World     '
console.log(helloWorld)
// Elimina los espacios al principio del String
console.log(helloWorld.trimStart()) // Output: 'Hello World     '
// Elimina los espacios al final del String
console.log(helloWorld.trimEnd()) // Output: '     Hello World'

/////////////////////////////////////

// fromEntries (ES10)

let entries = [
  ['name', 'Juan'],
  ['age', 34],
]
// Convierte un Array a un objeto cuando tiene la estructra definida anteriormente
console.log(Object.fromEntries(entries)) // Output: {name: 'Juan', age: 34}

/////////////////////////////////////

// description Symbol (ES10)
// podemos acceder a la descripción del símbolo

let mySymbol = 'My Symbol'
let symbol = Symbol(mySymbol)
console.log(symbol.description)
