// Texto multilínea (antes);
let lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit \n' +
  'Otra frase épica que necesito.'
console.log(lorem)

// Texto multilínea (ES6);
let lorem2 = `Otra frase épica que necesitamos.
Esto es otra frase épica.
`
console.log(lorem2)

/////////////////////////////////////

let person = {
  name: 'Juan',
  age: 34,
  country: 'SP',
}
// Accedo a las propiedades del objeto de esta manera (antes)
console.log(person.name, person.age)

// Mediante desestructuración (ES6)
let { name, age, country } = person
console.log(name, age, country)

/////////////////////////////////////

let team1 = ['Juan', 'Luisa', 'Valeria']
let team2 = ['Victor', 'Graciela', 'Alejandra']

// Spread Operator (ES6)
let fullTeam = ['El jefe', ...team1, ...team2]

console.log(fullTeam)

/////////////////////////////////////

{
  var globalVar = 'Global var'
}

{
  // let solamente es accesible dentro del scope (ES6)
  let globalLet = 'Global let'
  console.log(globalLet)
}

console.log(globalVar)

/////////////////////////////////////

// El valor de las constantes es invariable (ES6)
const a = 'b'
