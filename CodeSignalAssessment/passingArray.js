function logArray(param1, param2, param3, param4) {
    console.log(param1, param2, param3, param4);
}

var arr1 = [1, 2, 3, 4]

logArray(...arr1)
//this is called a destructering assignment