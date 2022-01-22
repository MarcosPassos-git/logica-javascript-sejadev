/*
const limite = 50 //limite em kilo definido
const valorDaMulta = 4 //valor da multa em reais definido
const pesoDePeixes = 600 //pso de peixes do João
let excesso = 0
let multa = 0

if (pesoDePeixes > limite) {
    excesso = pesoDePeixes - limite
} else {
    excesso = 0
}

multa = excesso * valorDaMulta
console.log('Excesso: ',excesso)
console.log('Multa: R$',multa)
*/

const limite = 50 //limite em kilo definido
const valorDaMulta = 4 //valor da multa em reais definido
const pesoDePeixes = 67 //pso de peixes do João
let excesso = pesoDePeixes > limite ? pesoDePeixes - limite : 0
let multa = excesso * valorDaMulta

console.log('Excesso: ',excesso)
console.log('Multa: R$',multa)
