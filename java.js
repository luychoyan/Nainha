

function calcular() {

    let antes = document.getElementById('antes1')
    let depois = document.getElementById('depois2')
    let resultado = document.getElementById('resposta1')

    


    if (antes.value.length <= 0 || depois.value.length == 0) {

        alert ('Valor Inválido, Preencha os campos corretamente!')

    } else {

        let A = Number(antes.value)
        let D = Number(depois.value)

        let resultado2 = ((A - D) / A) * 100

        resultado.innerHTML = resultado2 + '%'

    }

}

function calcular2() {  //Consumo diario por UA

    let peso = document.getElementById('peso2')
    let resposta = document.getElementById('resposta2')

    if (peso.value.length <= 0) {

        alert ('Valor Inválido, Preencha os campos corretamente!')

    } else {

        let peso_real = Number(peso.value)

        let resultado2 = peso_real * 0.03

        resposta.innerHTML = resultado2 + ' Kg'
    }



}


function calcular3() { //Consumo no periodo por UA

    let consumodiario = document.getElementById('consumo')
    let periodo = document.getElementById('periodo')
    let resposta3 = document.getElementById('resposta3')

    if (consumodiario.value.length <= 0 || periodo.value.length <= 0) {

        alert ('Valor Inválido, Preencha os campos corretamente!')

    } else {

        let consumo = Number(consumodiario.value)
        let periodo_valor = Number(periodo.value)

        let resultado3 = consumo * periodo_valor

        resposta3.innerHTML = resultado3 + ' Kg/ha'

    }
}


function calcular4() { //Quantidade de forragem disponivel

    let forragem = document.getElementById('forragem')
    let resposta4 = document.getElementById('resposta4')

    if (forragem.value.length <= 0) {

        alert ('Valor Inválido, Preencha os campos corretamente!')

    } else {

        let resultado4 = Number(forragem.value)

        let final = resultado4 * 0.6

        resposta4.innerHTML = final + ' Kg/ha'

    }

}


function calcular5() {

    let consumo_periodo = document.getElementById('consumo_periodo')
    let forragem_disponivel = document.getElementById('forragem_disponivel')
    let resposta5 = document.getElementById('resposta5')

    if (consumo_periodo.value.length <= 0 || forragem_disponivel.value.length <= 0) {

        alert ('Valor Inválido, Preencha os campos corretamente!')

    } else {

        let consumo5 = Number(consumo_periodo.value)
        let forragem5 = Number(forragem_disponivel.value)

        let resultado5 = consumo5 / forragem5

        resposta5.innerHTML = resultado5 + ' ha/UA'
    }
}


function calcular6() {

    let tamanhopastagem = document.getElementById('tamanho_pastagem')
    let capacidadedesuporte = document.getElementById('capacidade_de_suporte')
    let resultado6 = document.getElementById('resposta6')

    if (tamanhopastagem.value.length <= 0 || capacidadedesuporte.value.length <= 0) {

        alert ('Valor Inválido, Preencha os campos corretamente!')

    } else {

        let pastagem6 = Number(tamanhopastagem.value)
        let capacidade6 = Number(capacidadedesuporte.value)

        let resposta6 = pastagem6 / capacidade6

        resultado6.innerHTML = resposta6 + ' Animais'
    }
}