const primeiroNumero = document.querySelector("#primeiro-numero")
const segundoNumero = document.querySelector("#segundo-numero")
const form = document.querySelector("#form")
const mensagemResposta = document.querySelector("#mensagem-resposta")

form.addEventListener("submit", (event) => {
    
    event.preventDefault()

    maiorOuMenor()

})


function maiorOuMenor () {

    const primeiroNumeroValue = primeiroNumero.value
    const segundoNumeroValue = segundoNumero.value

    if(primeiroNumeroValue > segundoNumeroValue) {
        mensagemResposta.innerText = `Infelizmente o número A é maior que o número B`
    } else {
        mensagemResposta.innerText = `O número B: ${segundoNumero.value} é maior que o número A: ${primeiroNumero.value}`
    }

}
