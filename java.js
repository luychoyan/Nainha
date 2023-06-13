

function calcular() {

    let antes = document.getElementById('antes1')
    let depois = document.getElementById('depois2')
    let resultado = document.getElementById('resposta1')

    


    if (antes.value.length <= 0 || depois.value.length == 0) {

        alert ('Valor Inválido, Preencha todos os Campos!')

    } else {

        let A = Number(antes.value)
        let D = Number(depois.value)

        let resultado2 = ((A - D) / A) * 100

        resultado.innerHTML = resultado2 + '%'

    }

}

function calcular2() {  //Segunda formula

    let peso = document.getElementById('peso2')
    let resposta = document.getElementById('resposta2')

    if (peso.value.length <= 0) {

        alert ('Valor Inválido, Preencha todos os Campos!')

    } else {

        let peso_real = Number(peso.value)

        let resultado2 = peso_real * 0.03

        resposta.innerHTML = resultado2 + 'Kg'
    }



}


function calcular3() {

    let consumodiario = document.getElementById('consumo')
    let periodo = document.getElementById('periodo')
    let resposta3 = document.getElementById('resposta3')

    if (consumodiario.value.length <= 0 || periodo.value.length <= 0) {

        alert ('Valor Inválido, Preencha todos os Campos!')

    } else {

        let consumo = Number(consumodiario.value)
        let periodo = Number(periodo.value)

        let resultado3 = consumo * periodo

        resposta3.innerHTML = resultado3 + 'Kg/ha'

    }
}



/*let A = 100
let D = 59

let resultado = ((A - D) / A) * 100

console.log(resultado + '%')*/
