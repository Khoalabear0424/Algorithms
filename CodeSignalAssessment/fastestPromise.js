var promise1 = new Promise((resolve, error) => {
    setTimeout(resolve, 1000, '1')
})

var promise2 = new Promise((resolve, error) => {
    setTimeout(resolve, 500, '2')
})

Promise.race([promise1, promise2]).then((value) => {
    console.log(value)
})

