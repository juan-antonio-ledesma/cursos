var x = 4,
  y = '4'

// x==y --> true (compara el valor de las variables [x en este caso pasaría a ser un string y por eso el resultado de la comparación es true])
// x===y --> false (compara el valor y el tipo de variable)
// A la hora de comparar tratar siempre de utilizar el ===

var juan = {
  nombre: 'Juan',
}

var otraPersona = {
  nombre: 'Juan',
} // Es un objeto diferente al objeto juan aunque tengan la clave nombre con el mismo valor, ocupan un espacio diferente en la memoria RAM.

var otraPersona2 = juan // juan y otrapersona2 ocupan el mismo espacio en la memoria RAM, son iguales, cualquier cambio que se haga, se hará en ambos
// otraPersona.nombre = 'Pepe'; si hacemos esto se cambiara el nombre en ambos objetos

var otraPersona3 = {
  ...juan, // Cuando hacemos estos, es un objeto nuevo(una copia de juan)
}

// juan === otraPersona --> false
// juan === otraPersona2 --> true
// juan === otraPersona3 --> false
