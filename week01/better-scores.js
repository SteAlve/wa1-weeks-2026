"use strict" ;

/*
# Exercise Basic-1: Better Scores
_Goal: basic handling of JavaScript arrays_

Develop a small JavaScript program to manage the scores given to your user on website . Scores are integer numbers, and they may be negative. You should:
 
- Define an array with all the scores you received in chronological order. For simplicity:
  - Embed the scores directly in the source code.
- Duplicate the array, but:
  - Eliminate all negative scores (call \`NN\` the number of negative scores that are deleted).
  - Eliminate the two lowest-ranking scores.
  - Add `NN+2` new scores, at the end of the array, with a value equal to the (rounded) average of the existing scores.
- Print both arrays, comparing the scores before and after the "improvement," and showing the averages in both cases.
*/


const scores = [3, -2, 10, 0, -5, 7, 4, -1, 9, 6] ;

const new_scores = [...scores] //copy of scores
console.log(new_scores)
//Negative numbers deletion
for(let i = 0; i < new_scores.length; i++){
  const value = new_scores[i]
  if(value < 0){
    new_scores.splice(i,1) //delete element in position i
    i--
    console.log(new_scores)
  }
}


//Smallests delition
for(let i = 0; i<2; i++){
  const smallest = Math.min(...new_scores)
  const indexSmallest = new_scores.indexOf(smallest)
  new_scores.splice(indexSmallest,1)
  console.log(new_scores)
}

//Adding elements

let avg = 0.0

for(const value of new_scores){
  avg += value
}
avg = avg / new_scores.length
avg = Math.round(avg)

/* NO (per inserire NN+2 avg)
for(let i = 0; i< scores.length - new_scores.length; i++){ //condition evaluated at every iteration!!
  new_scores.push(avg)
  console.log(scores)
  console.log(new_scores)
}
*/

while(scores.length > new_scores.length){
  new_scores.push(avg)
  console.log(scores)
  console.log(new_scores)
}


let avgScore=0
let avgNew=0

for(let i = 0; i<scores.length; i++){
  avgScore+=scores[i]
  avgNew+=new_scores[i]
}

avgScore = avgScore / scores.length
avgNew = avgNew / new_scores.length

avgScore = Math.round(avgScore)
console.log(`AVG SCORES:${avgScore}`)

avgNew = Math.round(avgNew)
console.log(`AVG SCORES:${avgNew}`)