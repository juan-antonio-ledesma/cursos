var edad = 33

// Cumpleaños
// edad = edad + 1
edad += 1

var peso = 86

// Adelgazo 2 kg
// peso = peso - 2
peso -= 2

// Me como un asado (engordo 1kg)
var asado = 1

//peso = peso + asado;
peso += asado

// Hago ejercicio (bajo 1kg)
var ejercicio = 1

// peso = peso - ejercicio;
peso -= ejercicio

var precioDeVino = 16.6

// Compro 3 botellas de vino
// var total = precioDeVino * 3; --> devuelve: 49.800000000000004 (No gestiona bien los decimales)
var total = Math.round(precioDeVino * 100 * 3) / 100 //solución

var totalStr = total.toFixed(2) // Dejamos que solamente tenga dos decimales (devuelve un string)
var total2 = parseFloat(totalStr) // Pasamos de string a número

var pizza = 8
var personas = 2

// Vemos a cuantas porciones toca cada uno
var porcionesPorPersona = pizza / personas
