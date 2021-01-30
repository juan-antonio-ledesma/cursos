let name = 'Juan'
let age = 34

// Parámetros en objetos (antes ES5)
let obj = { name: name, age: age }

// Parámetros en objetos (ES6)
let obj2 = { hh, jj }

console.log(obj)
console.log(obj2)

/////////////////////////////////////

const names = [
  { name: 'Juan', age: 33 },
  { name: 'Luisa', age: 34 },
]

// Función anónima (Antes)
let listOfNames = names.map(function (item) {
  console.log(item.name)
})

// Arrow function (funcion anónima) (ES6)
let listOfNames2 = names.map(item => console.log(item.name))

// Arrow function (funcion con varios parametros) (ES6)
const sum = (num1, num2) => console.log(num1 + num2)
sum(999, 1)

// Arrow function (funcion con un solo parámetros) (ES6)
const sayMyName = name => console.log(`Hi, ${name}!!!!!!`)
sayMyName(name)

// Arrow function**** Podemos suprimir las llaves si la función solamente hace una cosa.
// Si no son necesarios pornerlos cuando va a realizar varias cosas en la función.

const multiTask = (num1, num2, name) => {
  console.log(num1 + num2)
  console.log(`Hi, my name is ${name}, and my name has ${name.length} letters`)
}

multiTask(3, 4, 'Alfredo')

/////////////////////////////////////

// Promesas
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey!')
    } else {
      reject('Upss!!')
    }
  })
}

helloPromise()
  .then(response => console.log(response))
  .catch(error => console.log(error))
