const array = [1, 5, 4, 3, 10, 7, 8, 20, 12]
//forEach passa por todos os elementos do array
array.forEach((elemento, posicao) => {
    //console.log(elemento)
    //console.log(posicao)
    //console.log(`${elemento} - posicao ${posicao}`)
})

//find retorna o elemento
const valor = array.find((elemento) => {
    if (elemento === 20) return true

    return false
})
//console.log(valor)

const index = array.findIndex(elemento => elemento === 20) //{
    //if (elemento === 20) return true
    //return elemento === 20
    //return false
//})
//console.log(index)
//some retorna true se pelo menos um número satisfazer a condição.
const some = array.some((elemento) => {
    if (elemento >= 21) return true
    return false
})
//console.log(some)

//every retorna true se todos os números respeitarem a condição
const every = array.every((elemento) => {
    if (elemento >= 1) return true
    return false
})
//console.log(every)

//splice corta o array , o primeiro parametro é o inicio e o segundo é a quantidade.
const newArray = [1, 2, 3, 4, 5]
//console.log(newArray.splice(2, 3))

//map: alterar os valores dentro do array seguindo uma regra.
//console.log(newArray.map((elemento) => {
    //return elemento * 2
//}))

//filter: filtrar os elementos dentro do array.
console.log(newArray.filter((elemento) => {
    return elemento % 2 === 1
}))

//reduce: reduz o array pra algum outro elemento.

console.log(newArray.reduce((acumulado, elemento) => {
    return acumulado + elemento
}, 0))