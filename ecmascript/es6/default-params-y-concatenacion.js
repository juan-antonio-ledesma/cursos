// Default Params (antes)
function newFunction(name, age, country) {
  var name = name || 'Juan'
  var age = age || 34
  var country = country || 'España'

  console.log(name, age, country)
}
newFunction()

// Default Params (ES6)
function newFunction2(name = 'Juan', age = 34, country = 'España') {
  console.log(name, age, country)
}
newFunction2()

/////////////////////////////////////

// Concatenación (antes)
let hello = 'Hello'
let world = 'World'
let epicPhrase = hello + ' ' + world
console.log(epicPhrase)

// Concatenación (Template literals)
let firstName = 'Juan'
let secondName = 'Ledesma'
let fullName = `${firstName} ${secondName}`
console.log(fullName)
