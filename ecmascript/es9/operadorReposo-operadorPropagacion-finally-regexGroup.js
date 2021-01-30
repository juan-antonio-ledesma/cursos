// Operador de reposo (ES9)
const obj = {
  name: 'Juan',
  age: 34,
  country: 'SP',
}

let { name, ...all } = obj // Extraemos el valor name del objeto obj
console.log(name, all) // Output: Juan { age: 34, country: 'SP' }

// Operador de reposo (ES9)
const obj2 = {
  name: 'Luisa',
  age: 35,
  country: 'PE',
}

let { country, ...all } = obj2 // Extraemos el valor country del objeto obj2
console.log(all) // Output: { name: 'Luisa', age: 35 }

/////////////////////////////////////

const obj3 = {
  name: 'Francisco',
  age: 30,
}

const obj4 = {
  // Operador de propagación (ES9)
  ...obj3,
  country: 'SP',
}

console.log(obj4)

/////////////////////////////////////

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error'))
  })
}

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log('Finalizó'))

// finally (ES9)
// Independientemente de que la promesa se resuelva o no con finaly,
// podemos ejecutar código dentro de ella.

/////////////////////////////////////

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/ // año-mes-dia
const match = regexData.exec('2020-01-10')

// Podemos obtener el valor de cada grupo que coincide con la expresión regular (ES9)
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)
