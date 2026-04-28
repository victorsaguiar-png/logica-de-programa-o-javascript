/* Introdução a objetos */

let aluno = {
    nome: "Rafael",
    idade: 26,
    curso: "ADS",
    materias: ["ui/ux design", "lógica de programação", "Modelagem de banco de dados"],
    endereco: {
        cidade: "São Paulo",
        bairro: "Lapa",
        rua: "Dronsfield"
    }
    
}

aluno.idade = 27 /* vareando valor de uma propriedade */
aluno.status = true /* adicionando uma nova propriedade */
delete aluno.idade /* deletando propriedade */

console.log(aluno)
console.log(aluno["nome"])
console.log(aluno.idade)
console.log(aluno.curso)
console.log(aluno.materias[1])
console.log(aluno.endereco.materias)
console.log(aluno.endereco.cidade)