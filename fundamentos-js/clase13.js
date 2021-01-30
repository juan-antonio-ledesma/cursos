var juan = {
  nombre: 'Juan',
  apellido: 'Ledesma',
  edad: 33,
  peso: 86,
}

console.log(`Al inicio del año ${juan.nombre} pesa ${juan.peso}Kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365

const aumentaDePeso = persona => (persona.peso += INCREMENTO_PESO)
const adelgazar = persona => (persona.peso -= INCREMENTO_PESO)

// Simulación de como adelgaza o engorda una persona a lo largo del año
for (var i = 1; i <= DIAS_DEL_ANO; i++) {
  var random = Math.random() // Número aleatorio entre 0 y 1

  if (random < 0.25) {
    aumentaDePeso(juan)
  } else if (random < 0.5) {
    adelgazar(juan)
  }
}

console.log(`Al final del año ${juan.nombre} pesa ${juan.peso.toFixed(1)}Kg`)
