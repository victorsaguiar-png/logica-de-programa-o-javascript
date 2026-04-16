/* Quando clicar no botao ativar o fundo da tela fica escuro e as letras brancas.
Quando clicar no botao ativar o texto muda para desativar
Quando clicar no botao desativar o fundo da tela fica claro e as letras pretas. */

let botaoTrocaTema = document.querySelector("#botaoTroaTema")
let body = document.querySelector("body")

function trocaTema() {
    body.classList.toggle("dark-mode")
    
    if(botaoTrocaTema.textContent == "Ativar"){
        botaoTrocaTema.textContent == "Desativar"
    }else {
        botaoTrocaTema.textContent = "Ativar"
    }
}

   