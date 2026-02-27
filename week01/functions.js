"use strict" ;

function square ( x ) {
    return x * x ;
}

const third = function third(a) {
    return a * square(a)
}

const fourth = (base)  => { return square(square(base)) }

const wwwww = square

const y = 7 
const y2 = square(y)
const y3 = third(y)
const y4 = fourth(y)
console.log(y, y2, y3, y4)

function table_of_powers( base, power_fn ) {
    for(let i=1; i<=10; i++) {
        const power = power_fn(base)
        console.log(i, power)
    }
}

table_of_powers(5, fourth)

table_of_powers(11, (x)=>{return Math.sqrt(x)})
table_of_powers(11, x => Math.sqrt(x))

// const person_1 = {
//     first_name : 'Fulvio',
//     last_name : 'Corno',
//     address: {
//         city: 'Turin',
//         street: 'Corso Duca degli Abruzzi',
//         number: 24,
//         post_code: 10129
//     },
//     print_address : () => {
//         console.log(this.address.street + " " + this.address.city)
//     }
// }

function Person(name, last, city, street, number, postcode) {
    this.first_name = name
    this.last_name = last
    this.address = {
        street: street,
        city : city,
        number : number,
        postcode, postcode
    }

    this.print_address = () => {
        console.log(this.address.street + " " + this.address.city)
    }

}

const person_1 = new Person("F", "C", "T", "D", 24, 10129)

console.log(person_1)
person_1.print_address()

console.log()