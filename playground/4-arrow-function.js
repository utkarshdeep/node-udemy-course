const { eventNames } = require("process")

const square = function (x) {
    return x * x
}

const squareArrow = (x) => {
    return x * x
}

const squareArrowShortHandSyntax = (x) => x * x

console.log(square(5))
console.log(squareArrow(4))
console.log(squareArrowShortHandSyntax(3))

const event = {
    name: 'Birthday Party',
    guestList: ['G1', 'G2', 'G3'],
    printGuestList: function () {
        console.log('Guest list for ' + this.name)
    },
    printGuestListArrow: () => {
        console.log('Guest list for ' + this.name)
    },
    printGuestListAlternative() {
        console.log('Guest list for ' + this.name)
        this.guestList.forEach(function (guest) {
            console.log(guest + ' is attending ' + this.name)
        })
    },
    printGuestListAlternativeWorking() {
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()

// will print undefined. As arrow function are not well suited for method when using this
event.printGuestListArrow()

// Not an arrow function but an alternative syntax used to setup methods in objects. 
// But when using foreach & verbose function call, this is binded to the current call rather than parent call.
// It is solved below
event.printGuestListAlternative()

// Arrow function here will bind to context in which it is created.
event.printGuestListAlternativeWorking()

// Arrow function dont bind their own this value. Making them poor candidates for methods.