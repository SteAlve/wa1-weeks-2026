"use strict";

const person_1 = {
    first_name : 'Fulvio',
    last_name : 'Corno',
    city : 'Turin',
    'work city' : 'Turin',
    address: {
        city: 'Turin',
        street: 'Corso Duca degli Abruzzi',
        number: 24,
        post_code: 10129
    }
}

const person_2 = {
    first_name : 'Francesca',
    last_name : 'Russo',
    city: ''
}

person_2.age = 'unknown'

console.log(person_1)
console.log(person_2)

const names = person_1.first_name + " " + person_2.first_name
const city1 = person_1.city ?? "Rome"
const city2 = person_2.city ?? "Rome"
// nullish coalescing operator (checks if the 1st argument is null
// or undefined -- not for 0 or '')

const wc = person_1['work city']

const my_city_1 = person_1.address.city
const my_city_2 = person_2?.address?.city

const person_1_copy = { ...person_1 }
const person_1_copy_a = { ...person_1, city:'Paris' }
const person_1_copy_b = { city:'Paris', ...person_1 }


// person_1_copy = {}
// person_1_copy.first_name = person_1.first_name
// person_1_copy.address = person_1.address


person_1_copy.city = 'Rome'
person_1_copy.address.city ='New York'

const phonebook = {}

phonebook['Fulvio'] = 1234
phonebook['Francesca'] = 9999

console.log(Object.keys(phonebook))


console.log()