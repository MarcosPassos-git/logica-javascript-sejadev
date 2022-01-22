function Pessoa (nome, sobrenome) {
    let pessoa = {
        nome,
        sobrenome
    }
    pessoa.nomeCompleto = `${nome} ${sobrenome}`
    return pessoa
}

const pessoaA = Pessoa("Marcos", "Rosalino")
const pessoaB = Pessoa("Bruno", "Muniz")

console.log({
    pessoaA,
    pessoaB
})
