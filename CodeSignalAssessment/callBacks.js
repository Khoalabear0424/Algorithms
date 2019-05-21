function function1(x) {
    console.log(x + 'is a good number')
}

function whatNumber(y, callback) {
    var z = y + 1;
    callback(z)
}

whatNumber(2, function1)

// function returnNum(y) {
//     console.log(y)
//     return y
// }

// function asyncFunction(x) {
//     setTimeout((x) => { return x }, 1000)
// }

// asyncFunction(3)