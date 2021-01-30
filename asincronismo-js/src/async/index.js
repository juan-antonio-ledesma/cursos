const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve('Do somethig Async'), 3000)
      : reject(new Error('Test Error'))
  })
}

const doSomething = async () => {
  const somethig = await doSomethingAsync()
  console.log(somethig)
}

console.log('Before 1')
doSomething()
console.log('After 1')

//////////////

const anotherFunction = async () => {
  try {
    const somethig = await doSomethingAsync()
    console.log(somethig)
  } catch (error) {
    console.log(error)
  }
}

console.log('Before 2')
anotherFunction()
console.log('After 2')
