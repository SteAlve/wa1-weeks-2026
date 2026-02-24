"use strict" ;

/*
# Exercise Basic-2: My Users' List
_Goal: basic handling of JavaScript strings_

Develop a small JS program to manage the list of users in a website.

- Define the names of users as a comma-separated list.
  - For instance: `"Luigi De Russis, Francesca Russo, Fulvio Corno, Luca Scibetta, Alberto Monge Roffarello"`.
- Parse the string and create an array containing one name per array position.
  - Beware: no extra spaces should be present.
- Create a second array by computing the acronyms of the people as the initial letters of the name. Acronyms should be in all-capital letters.
  - For example, `Luigi De Russis` -> `LDR`.
- Print the resulting list of acronyms and the full names.
  - Extra: in alphabetical order of acronym.
*/

const names = "Luigi De Russis, Francesca Russo, Fulvio Corno, Luca Scibetta, Alberto Monge Roffarello" ;

const list_names = names.split(",")
for (let i = 0; i<list_names.length; i++) {
  //name = name.trim() //modifies the reference
  list_names[i] = list_names[i].trim()
}
console.log(list_names)
console.log(names)
const acronyms = []
for(let i = 0; i<list_names.length; i++){
  const tmp_list = list_names[i].split(" ")
  for(let j=0; j<tmp_list.length; j++){
    tmp_list[j] = tmp_list[j][0]
  }
  acronyms.push(tmp_list.join(""))
}
console.log(acronyms.sort())