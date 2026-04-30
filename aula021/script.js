const divListaAluno = document.querySelector("#lista_aluno")
let alunos = [
{ nome: "Rafael", idade: 26 },
  { nome: "Gustavo", idade: 24 },
  { nome: "Ana", idade: 22 },
  { nome: "Bruno", idade: 31 },
  { nome: "Carla", idade: 27 },
{ nome: "Daniel", idade: 45 },
  { nome: "Eduardo", idade: 19 },
  { nome: "Fernanda", idade: 34 },
  { nome: "Gustavo2", idade: 28 },
  { nome: "Helena", idade: 41 },
  { nome: "Igor", idade: 23 },
  { nome: "Juliana", idade: 36 },
  { nome: "Kevin", idade: 29 },
  { nome: "Larissa", idade: 25 },
  { nome: "Marcelo", idade: 38 },
  { nome: "Natália", idade: 21 },
  { nome: "Otávio", idade: 50 },
  { nome: "Patrícia", idade: 33 },
  { nome: "Rafael2", idade: 26 },
  { nome: "Sabrina", idade: 40 },
  { nome: "Thiago", idade: 24 },
  { nome: "Vanessa", idade: 37 },
  { nome: "William", idade: 32 },
  { nome: "Ximena", idade: 28 },
  { nome: "Yuri", idade: 35 },
  { nome: "Zuleica", idade: 44 },
  { nome: "André", idade: 30 },
  { nome: "Bianca", idade: 27 },
  { nome: "Caio", idade: 20 },
  { nome: "Débora", idade: 39 },
  { nome: "Enzo", idade: 18 },
  { nome: "Fabiana", idade: 42 }
]

for(let i = 0; i < alunos.length; i++) {
    divListaAluno.innerHTML += `<li>${alunos[i].nome}, ${alunos[i].idade} anos</li>`
}