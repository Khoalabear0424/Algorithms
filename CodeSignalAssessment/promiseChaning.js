var promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
})

//Values returned by .then() is a promise

promise1
    .then((result) => {
        console.log(result);
        return result * 2
    })
    .then((result) => {
        console.log(result)
        return result * 2
    })
    .then((result) => {
        console.log(result);
        return result * 3
    })


var promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 2500);
})

var promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(3), 2000);
})

Promise.all([promise2, promise3])
    .then((result) => {
        console.log(result)
        return result[0] * result[1]
    })
    .then((result) => {
        console.log(result)
    })

