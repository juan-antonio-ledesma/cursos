const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}` // todos los string tiene el método replace. En el primer parámetro le pasamos la cadena de texto que queremos sustituir y en el segundo por que lo queremos sustituir
const options = { crossDomain: true }
const onPeopleResponse = function (person) {
  //console.log(arguments); // arguments es una variable que tiene todas las funciones y que nos devuelve un array con los parámetros que recibe la función.
  console.log(`Hola me llamo ${person.name}`)
}

// Hacemos el request a través de jQuery
// En el primer parámetro le pasamos la URL donde queremos hacer la petición
// El segundo parámetro indicamos que la petición se va a hacer a una página ajena, a la página actual
// En el tercer parámetro hacemos el callback, mediante una función

$.get(lukeUrl, options, onPeopleResponse)
