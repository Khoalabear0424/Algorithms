var person = {
    firstName: 'Khoa',
    lastName: 'Nguyen',
    getName: function () {
        console.log(this.firstName + " " + this.lastName)
    }
}

person.getName()

//-------------BIND EXAMPLE------------//
var hobbie = function () {
    this.getName()
}

var hobbieBind = hobbie.bind(person)
hobbieBind()

//-------------Call Example-------------//
//Call is similar to bind but will immediately call the function 
//Takes additional parameters that must be declared individually

var hobbie2 = function (hobby1, hobby2) {
    console.log(hobby1, hobby2)
    this.getName()
}

hobbie2.call(person, 'baskbetball', 'dancing')

//-------------Apply Example-------------//
//Apply works exactly the same as bind but will take additional paramters as an array
hobbie2.apply(person, ['baskbetball', 'dancing'])