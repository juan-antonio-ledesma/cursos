// Con variables de tipo Date, se pueden realizar operaciones de suma y resta similares a las que se realizan con números.
// El resultado que se obtiene está en milisegundos, por lo que luego hay que hacer algunas operaciones adicionales para llevarlos a días, meses o años según queramos.
// También aplica para Horas, Minutos, Segundos y Milisegundos.

function diasEntreFechas(fecha1, fecha2) {
  // Podemos operar con fecha1 y fecha2 ya que cuando queremos hacer algún cálculo con ellas se expresan en milisegundos

  // Un día expresado en milisegundos
  const unDia = 1000 * 60 * 60 * 24

  // Con Math.abs calculamos el número absoluto, siempre nos va a devolver un número positivo.
  // Si es negativo lo pasa a positivo, y si es positivo lo deja como está
  const diferenciaFechas = Math.abs(fecha1 - fecha2)

  // Días desde que naciste
  const diasDeDiferencia = Math.floor(diferenciaFechas / unDia)
  console.log(diasDeDiferencia)
}

const hoy = new Date() // Nos devuelve la fecha actual
const fechaDeMiNacimiento = new Date(1986, 0, 10) // Año, mes (enero es el 0), día

console.log(hoy)
console.log(fechaDeMiNacimiento)

diasEntreFechas(hoy, fechaDeMiNacimiento)
