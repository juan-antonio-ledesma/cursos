// Las estructuras de datos inmutables forman parte de los principios de la Programación Funcional
// y nos permiten evitar tener efectos colaterales en los datos. En otras palabras,
// que hayan modificaciones en las variables sin nuestro consentimiento, produciendo comportamientos inesperados en el programa.

const juan = {
  nombre: 'Juan',
  apellido: 'Ledesma',
  edad: 33,
}

// const cumpleAnios = persona => persona.edad++
// cumpleAnios(juan)

// Si hacemos esto estamos modificando el objeto juan y le estamos diciendo que incremente en uno su edad.
// Nosotros no queremos hacer esto ya que juan es una constante y queremos que el objeto se quede intacto.
// Cuando ocurre esto, es lo que se denomina efecto de lado.
// Para evitar esto hacemos lo siguiente:

const cumpleAniosInmutable = persona => ({
  // Esta arrow function nos devuelve un objeto
  ...persona, // Desglosamos a la persona (hacemos una copia del objeto persona)
  edad: persona.edad + 1, // Y modificamos en este caso su edad (le añadimos un año)

  // No podemos hacer lo siguiente:
  // edad: persona.edad++
  // De esta forma alteramos el objeto original, en este caso juan
})

// Otro ejemplo:
const felipe = {
  nombre: 'Felipe',
  altura: {
    valor: 186,
    medida: 'cm',
  },
  edad: 25,
}

// Cremos clon de felipe
const felipeClon = {
  ...felipe,
}

// Si después queremos modificar por ejemplo el valor de la altura del clon
// felipeClon.altura.valor = 180
// También estamos modificando la altura del objeto felipe

//console.log(felipeClon.altura.valor) //180
//console.log(felipe.altura.valor) //180

// Una truco que puedes usar para copiar objetos y sean inmutables sin importa que hayan objetos nested es
// primero hacerle un JSON.parse(JSON.stringify(objeto)) a el objeto que quieras copiar.
const cumpleAniosInmutableEjmplo2 = persona => {
  persona = JSON.parse(JSON.stringify(persona))
  return {
    ...persona,
    edad: persona.edad + 1,
  }
}
