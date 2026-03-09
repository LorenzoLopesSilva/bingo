function criarNumeros() {
    let listaNumeros = []
    let bingo = ["B", "I", "N", "G", "O"]
    let numero = 0
    for (var i = 0; i < bingo.length; i++) {
        for (let n = 1; n <= 18; n++) {
            numero++;
            listaNumeros.push(`${bingo[i]}${numero}`)
        }
    }

    const listaHTML = listaNumeros.map(numero => `<p class="numero">${numero}</p>`)
    document.querySelector('.numerosContainer').innerHTML = listaHTML.join('');

    console.log(listaNumeros)
    return listaNumeros;

}

numeros = criarNumeros()

function sortearNumero(numeros) {

    let sorteador = Math.floor(Math.random() * numeros.length)

    let nSorteado = numeros[sorteador]

    let resultado = document.querySelector(".resultado")

    document.querySelector('.portalContainer').style.display = 'grid'

    numerosTabela = document.querySelectorAll('.numero')

    resultado.innerText = nSorteado
    if (nSorteado == undefined) {
        resultado.innerText = "Sem numeros"

    }

    for (let i = 0; i < numerosTabela.length; i++) {
        if (nSorteado === numerosTabela[i].innerText) {
            numerosTabela[i].style.backgroundColor = '#6f00a3a4'
            numerosTabela[i].style.border = '2px solid black'
            numerosTabela[i].style.color = '#ffffff'

        }
    }
    numeros.splice(sorteador, 1)



}

const button = document.querySelector('.btn')

button.addEventListener("click", () => sortearNumero(numeros))



