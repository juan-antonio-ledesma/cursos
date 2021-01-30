// El contexto (o alcance) de una función es por lo general, window.
// Así que en ciertos casos, cuando intentamos referirnos a this en alguna parte del código,
// es posible que tengamos un comportamiento inesperado, porque el contexto quizás no sea el que esperamos.

// Existen al menos tres maneras de cambiar el contexto de una función.

// Usando el método .bind, enviamos la referencia a la función sin ejecutarla, pasando el contexto como parámetro.
// Usando el método .call, ejecutamos inmediatamente la función con el contexto indicado
// Usando el método .apply, es similar a .call pero los parámetros adicionales se pasan como un arreglo de valores

// Ejemplo:

const juan = {
  nombre: 'Juan',
  apellido: 'Ledesma',
}

function saludar(saludo = 'Hola') {
  console.log(`${saludo}, mi nombre es ${this.nombre}`)
}

// saludar() --> Hola, mi nombre es undefined

const saludarAJuan = saludar.bind(juan)
// Esto nos devuelve una nueva función, atando el objeto juan que le pasamos por parámetro al this
// (juan es this en la función saludar)

const jose = {
  nombre: 'Jose',
  apellido: 'Camargo',
}

setTimeout(saludar.bind(jose, 'Hola loco'), 1000)
// Estamos creando un retraso de un segundo en la llamada de la función saludar
// saludar.bind, nos devuelve una nueva función, atando el objeto jose que le pasamos por parámetro al this
// Como segundo parámetro del bind le estamos pasando un string con el saludo personalizado
// (jose es this en la función saludar)

const nacho = {
  nombre: 'Nacho',
  apellido: 'Pérez',
}

saludar.call(nacho, 'Hey')
// Esto nos devuelve una nueva función, atando el objeto nacho que le pasamos por parámetro al this
// (nacho es this en la función saludar)
// como segundo parámetro del call le estamos pasando un string con el saludo personalizado
// Con .call la fución saludar se ejecuta acontinuación de haberla creado

const felipe = {
  nombre: 'Felipe',
  apellido: 'Arosa',
}

saludar.apply(felipe, ['Amigo'])
// Esto nos devuelve una nueva función, atando el objeto felipe que le pasamos por parámetro al this
// (felipe es this en la función saludar)
// como segundo parámetro del apply le estamos pasando un array, que contendrá en cada una de las posiciones, los parámetros que deseemos enviar
// Con .apply la fución saludar se ejecuta acontinuación de haberla creado
