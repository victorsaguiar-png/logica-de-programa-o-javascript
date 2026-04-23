/*        1        */
let aprendizado = Nunber(prompt("Digite um numero para descobrir o que voce aprendeu?"))

function seSenao(){
    let perguntaUsuario = prompt(`Voce estudou no feriado?
        Sim ou Não
`)
    if (perguntaUsuario.toLocaleLowerCase() == "sim"){
        alert("parabens, voce é o cara!")
        return
    }
    alert("Miguelou")
}

function daPraCriarUmaFuncaoDentroDEoutraFuncao(){

    function teste(){
        alert("teste")
    }
    teste()
}

function soma(primeiroNumero. segundoNumero) {
    return primeiroNumero + segundoNumero
}

function perguntaNumeros() {
    let primeiroNumero = Number(prompt("Digite o primeiro numero"))
    let segundoNumero = Number(prompt("Digite o segundo numero"))

    alert(soma(primeiroNumero, segundoNumero))
}

/*           1         */
switch (aprendizado){
    case 1:
        seSenao()
        break;
    case 2:
        daPraCriarUmaFuncaoDentroDEoutraFuncao()
        break;
    case 3:
       perguntaNumeros()
        break;
    defalt:
        alert("nao existe esse caso")
        break;
}