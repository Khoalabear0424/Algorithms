//Valid examples
var x = 5;
function logVar1() {
    console.log(x)
}
logVar1()

//also valid
y = 5;
function logVar2() {
    console.log(y)
}
logVar2()
var y; //here the declaration of x is hoisted to the top at runtime

//not valid

var z;
function logVar3() {
    console.log(z)
}
logVar3()
z = 5;