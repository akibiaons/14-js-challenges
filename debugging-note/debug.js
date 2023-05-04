// How to debug correctly and efficiently..

const users = [
    { name: 'Kyle', age: 22 },
    { name: 'Joey', age: 20 },
    { name: 'Carmen', age: 32 },
    { name: 'Elijah', age: 27 },
    { name: 'Camila', age: 23 },
    { name: 'Jessica', age: 22 },
    { name: 'Adounis', age: 34 },
]

users.forEach(user => {
    printUser(user)
})

function printUser(user) {
    console.log(`User ${user.name} will be ${user.age + 5} years old in five years`)
}

/*
The code above utilizes an array of users names as srings, and ages as numbers.

There is also a call to printUser

Lastly there is a function which has the goal of printing the users age in five years.
*/