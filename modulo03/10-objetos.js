const num = 10
const array = [10, 20]

const pessoa = {
    nome:"José",
    idade: 20,
    casado: true,
    notas: [5, 8, 100],
    endereco: {
        rua: "Rua XYZ",
        numero: 100
    }

}
console.log(pessoa.nome)
console.log(pessoa["idade"])
console.log(pessoa["casado"])
console.log(pessoa["notas"][2])
console.log(pessoa["endereco"]["rua"])