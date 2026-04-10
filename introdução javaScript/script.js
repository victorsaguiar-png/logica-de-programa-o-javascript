let idade = Number(prompt("Qual a sua idade?"))
let habilitado = prompt(`Voce tem habilitação:
    1 - sim
    2 - não
    `)

    if(habilitado == "1") {
        habilitado = true
    }else {
        habilitado = false
    }

if (idade >= 18 && habilitado == true) {
    alert("Pode dirigir!")
} else {
    alert("Não pode Dirigir!")
}