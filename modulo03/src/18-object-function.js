const person = {
    nome: "Marcos",
    lastName: "Rosalino"
}

//object.keys():cria uma array com todas as chaves do objeto.
//console.log(Object.keys(person))
//object.values():cria uma array com todos os valores do objeto.
//console.log(Object.values(person))
//object.entries():cria um array com um array de objetos e valores
//[['name', 'José'], ['lastName', 'Fortes']]
//console.log(Object.entries(person))
const livros = {
    'Livro A': 19.90,
    'Livro B': 97.00,
    'Livro C': 20.00
}
const values = Object.values(livros)
const sum = values.reduce((val, acc) => val + acc, 0)
console.log(sum)