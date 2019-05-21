var x = 5;

//This function can see x because x is globally scoped
function logVar() {
    var y = 2;
    console.log(x)
}

var z = 10

//this function CANNOT see y because y is declared within another function
//var is function scoped
function logVar2() {
    console.log(y)
}

// logVar()
// logVar2()

//------------LET AND CONST------------//
//let is similar to var in that it can be redeclared, 
//both const and let are also hoisted
//const and var are both hoisted upon declaration
//unlike var, however, they must be initialized before used.

function logA() {
    console.log(a)
}
let a;

logA()
a = 10


function logB() {
    console.log(b)
}
var b;

logA()
b = 10

//ALSO, const must be initlized at declaration
