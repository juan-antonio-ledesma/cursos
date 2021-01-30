# Asíncronismo en Javascript

## Callbacks

Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

Es recomendable de no realizar mas de 3 callback para no caer en un callback Hell, si tu proyecto tiene una función con más de 3 callback, se recomienda hacer una revisión y utilizar una mejor forma de ejecutar el código, para ello están las promesas o el Async Away.

### Instalación dependencia de desarrollo, xmlhttprequest

`npm install xmlhttprequest --save`

### comandos de npm para obtener los resultado de los ejercicios:

- `npm run callback`
- `npm run callback:challenge`

## Promesas

Una Promise (promesa en castellano) es un objeto que representa la terminación o el fracaso de una operación asíncrona.

Las promesas pueden suceder ahora, en el futuro o nunca.

### comandos de npm para obtener los resultado de los ejercicios:

- `npm run promise`
- `npm run promise:challenge`

## Función async

Cuando se llama a una función async, esta devuelve un elemento Promise. Cuando la función async devuelve un valor, Promise se resolverá con el valor devuelto. Si la función async genera una excepción o algún valor, Promise se rechazará con el valor generado.

Una función async puede contener una expresión `await`, la cual pausa la ejecución de la función asíncrona y espera la resolución de la Promise pasada y, a continuación, reanuda la ejecución de la función async y devuelve el valor resuelto.

### comandos de npm para obtener los resultado de los ejercicios:

- `npm run async`
- `npm run async:challenge`

---

## Ventajas y Desventajas - Callbacks

Ventajas:

- Es simple, una función que recibe otra función.
- Son universales.

Desventajas:

- Composición tosca.
- Callback Hell.
- Flujo poco intuitivo.
- Código de difícil lectura.
- Tedioso y no se manejan excepciones.

## Ventajas y Desventajas - Promise

Ventajas:

- De fácil lectura y entendible.
- Sencillo de implementar.

Desventajas:

- No maneja excepciones, solamente se trabaja con un catch para obtener el error.
- Requiere de un Polyfill para poder ser interpretados en todos los navegadores.

## Ventajas y Desventajas - Async

Ventajas:

- Se utiliza try - catch y las excepciones se manejan de forma más fluida.
- De fácil lectura y entendible.
- Sencillo de implementar.

Desventajas:

- Con await tenemos que esperar por cada una de las llamadas que hacemos, a la respuesta de la anterior.
- Requiere de un Polyfill para poder ser interpretados en todos los navegadores.
