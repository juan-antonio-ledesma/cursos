const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error'))
  })
}

// Async Await (ES8)
const helloAsync = async () => {
  const hello = await helloWorld()
  console.log(hello)
}
helloAsync()

/////////////////////////////////////

// Async Await con try / catch (ES8)
const anotherFuction = async () => {
  try {
    const hello = await helloWorld()
    console.log(hello)
  } catch (error) {
    console.log(error)
  }
}
anotherFuction()
