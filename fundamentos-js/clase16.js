var signo = prompt('¿Cuál es tu signo?')

console.log(signo)

switch (signo) {
  case 'acuario':
    console.log(
      'Sepa que deberá desarrollar su fuerza de espíritu y recargar al máximo el aura para los tiempos buenos que se acercan. Prepárese para disfrutar.',
    )
    break

  case 'piscis':
    console.log(
      'Después de tantos inconvenientes, al fin encontrará el equilibrio. Podrá pisar el suelo firme y estará en condiciones de resolver todos los temas importantes.',
    )
    break

  case 'aries':
    console.log(
      'Aproveche el día al máximo, ya que contará con los suficientes impulsos para resolver todos los asuntos que hace tiempo posterga. Tome coraje y comience hoy.',
    )
    break

  case 'tauro':
    console.log(
      'Despreocúpese, ya que su capacidad para tomar decisiones se combinará con la sensibilidad e intuición. Gracias a estas, decidirá de manera correcta.',
    )
    break

  case 'geminis':
  case 'géminis':
    console.log(
      'Nunca se olvide que debe mantener siempre la serenidad frente a los inconvenientes que uno vive, ya que será su mejor antídoto para combatir la incertidumbre.',
    )
    break

  case 'cancer':
  case 'cáncer':
    console.log(
      'Atravesará algunos momentos donde la intranquilidad podría arrebatarle muchos de los éxitos que le ha costado demasiado trabajo conseguir. Evite que suceda.',
    )
    break

  case 'leo':
    console.log(
      'Ponga distancia de quienes solo le generan problemas en su vida. Prepárese, ya que podrían surgir muchos conflictos por pequeñeces y podrían afectar su ánimo.',
    )
    break

  case 'virgo':
    console.log(
      'Muchas veces las decisiones precipitadas pueden llegar a ser causa de un arrepentimiento futuro. En esos casos, trate de reflexionar antes de actuar.',
    )
    break

  case 'libra':
    console.log(
      'En caso de que deba avanzar, sepa que la revisión del pasado le echará luz sobre los interrogantes del presente que lo persiguen hace varios días.',
    )
    break

  case 'escorpio':
    console.log(
      'Intente comprender que la tolerancia y la persuasión serán los medios más eficaces para lograr muchos de los proyectos tan anhelados. Haga uso de ellas.',
    )
    break

  case 'sagitario':
    console.log(
      'Durante este día, recibirá más de una propuesta interesante que le dará esperanzas y fuerzas para continuar en sus objetivos. Escoja las más conveniente.',
    )
    break

  case 'capricornio':
    console.log(
      'En este día, deberá buscar refugio en el plano espiritual y tener presente que los contratiempos de hoy se diluirán mañana. Relájese que todo mejorará.',
    )
    break

  default:
    console.log('No es un signo zodiacal válido')
    break
}
