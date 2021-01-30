var juan = {
  nombre: 'Juan',
  apellido: 'Ledesma',
  edad: 33,
  peso: 86,
}

console.log(`Al inicio del año ${juan.nombre} pesa ${juan.peso}Kg`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365

const aumentaDePeso = persona => (persona.peso += INCREMENTO_PESO)
const adelgazar = persona => (persona.peso -= INCREMENTO_PESO)
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

// Un nutricionista nos indica que tenemos que bajar 3 kg de peso
// const META = juan.peso - 3;
// var dias = 0;

while (juan.peso > META) {
  if (comeMucho()) {
    aumentaDePeso(juan)
  }

  if (realizaDeporte()) {
    adelgazar(juan)
  }

  dias++
}

console.log(`Pasaron ${dias} días hasta que ${juan.nombre} adelgazó 3kg`)
