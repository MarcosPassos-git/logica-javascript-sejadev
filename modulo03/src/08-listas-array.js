const variavel = 10
let array = [true, false, 0, 1, 2, 3, 'string aqui', 'sejadev', variavel]

array[9] = 1000
array.push(1844, 'Juizo Invesiativo') //array.push adiciona elementos no array

//console.log(array)
array.pop() //remove o ultim elemento do array
//console.log(array)

let newArray = [10, 20, 30]
let i = 0
while (i < newArray.length) {
    //console.log(i)
    //console.log(newArray[i])
    i++
} 

for (let pos = 0; pos < newArray.length; pos++) {
    //console.log(newArray[pos])
} 
// for...in
for (let pos in newArray) {
    //console.log(pos)
    //console.log(newArray[pos])
}
//for...of
for (let arr of newArray) {
    //console.log(arr)
}
/*
dado um array com x numeros, encontrar a media desses números
média = (soma dos elementos)/tamanho
*/
const numbers = [10, 20, 30, 100, 500]
let sum = 0
for (let numb of numbers) {
    sum = sum + numb
}
const media = sum / numbers.length
console.log(media)









