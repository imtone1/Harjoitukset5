//Harjoitukset 5 tehtävä 5

const fs   = require('fs')
const path = require('path')

if (process.argv.length <= 4 || isNaN(process.argv[2]) || isNaN(process.argv[3])|| isNaN(process.argv[4])) {
  console.log(`Usage: ${path.basename(__filename)} RANDOMIZED_NUMBERS_COUNT MIN_VALUE MAX_VALUE`)
  process.exit(-1)
}
var sum=[]
const arrlength  = process.argv[2]
const MIN_VALUE  = parseInt(process.argv[3]) //muutetaan arvot heti inteiksi
const MAX_VALUE = parseInt(process.argv[4])

for (let index = 0; index < parseInt(arrlength); index++) {
   sum.push(Math.floor(Math.random() * MAX_VALUE) + MIN_VALUE) //joka kerta arvotaan uusi random numero
    
}

console.log(`Ilman [] sulkeita ${sum}`)
console.log('Sulkeiden kanssa')
console.log(sum)