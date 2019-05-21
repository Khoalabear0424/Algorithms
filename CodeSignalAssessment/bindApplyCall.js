var person = {
    firstName: 'Khoa',
    lastName: 'Nguyen',
    getName: function () {
        console.log(this.firstName + " " + this.lastName)
    }
}

person.getName()

var hobbie = function () {
    this.getName()
}

var hobbieBind = hobbie.bind(person)
hobbieBind()