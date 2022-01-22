/*
Crie um algoritimo para calcular o fatoria de um número n!.
Obs: o fatorial de um número é calculado pela multiplicação desse número por todos os seus antecessores até chegar ao número 1.

Exemplos:
2! = 2 * 1
3! = 3 * 2 * 1
4! = 4 * 3 * 2 * 1
5! = 5 * 4 * 3 * 2 * 1

n = 5:
resposta = 5
n = 4:
resposta = 5 * 4
n = 3
resposta = 5 * 4 * 3
n = 2
resposta = 5 * 4 * 3 * 2
n = 1
retorna resposta
*/
function fatorial (n) {
    let resposta = 1
    while (n >= 2) {
        resposta = resposta * n
        n--
    }
    return resposta
}
const number = 10
const resposta = fatorial(number)
console.log(resposta) 