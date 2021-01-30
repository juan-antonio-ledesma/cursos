console.log('a')
setTimeout(() => console.log('b'), 0) // Lo que se ejecuta dentro de setTimeout pasaría al Call Stack
console.log('c')
// El output seria: a,c,b

// Primero se ejecuta el programa principal y despues el Call Stack (pila de ejecución)

// Se ejecutan de forma asíncrona (tareas que entran dentro del Call Stack):

// Realizar tareas en un tiempo futuro
// Interactuar con el DOM
// Mostar un alert
// Cuando realizamos algún pedido de datos hacia una ip externa ...
