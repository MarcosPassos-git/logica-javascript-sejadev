const constant = 10
let variavel = 'Está é minha frase'
console.log(variavel)
variavel = 'Nova frase'
console.log(variavel)
let number = 1000
const sum = number * number
console.log(sum)

const ovosDisponiveis = 10
if (ovosDisponiveis > 0) {
    console.log('Leve 6 leites')
} else {
    console.log('Leve 1 leite')
}
const resto = 11%3
console.log(resto)

const numero = 9
if(numero % 2 == 0) {
    console.log('é par')
} else if (numero % 3 == 0) {
    console.log('É divisivel por 3')
} else {
    console.log('Nenhum dos dois.')
}

const desafio = 38
if (desafio % 13 == 0) {
    console.log ('É divisivel por 13')
} else {
    console.log ('Não é divisivel por 13')
}

const dias = 723
const qtMeses = Math.floor (dias/30)
console.log (qtMeses)
const qtDiasTotal = qtMeses * 30
const diasPassados = dias - qtDiasTotal
const anos = Math.floor(qtMeses/12)
console.log (diasPassados)
console.log (anos)
console.log ('Total de ' + anos + ' anos, ' + qtMeses + ' meses, e '  + diasPassados + ' dias.')


