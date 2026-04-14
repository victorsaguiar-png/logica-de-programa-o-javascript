let botaoMudaTexto = document.querySelector("#btnMudaTexto")
let titulo = document.querySelector("#titulo")

function mudaTexto() {
    titulo.innerHTML = "Bigas"
}

botaoMudaTexto.addEventListener("click", mudaTexto)