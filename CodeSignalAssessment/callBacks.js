function asyncFunction(x) {
    console.log(x + 'is a good number')
}

function whatNumber(y, callback) {
    var z = y + 1;
    callback(z)
}

whatNumber(2, asyncFunction)