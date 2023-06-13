

function calcular() {

    let antes = document.getElementById('antes1')
    let depois = document.getElementById('depois2')
    let resultado = document.getElementById('resposta')

    


    if (antes.value.length <= 0 || depois.value.length == 0) {

        alert ('Valor Inválido, Preencha todos os Campos!')

    } else {

        let A = Number(antes.value)
        let D = Number(depois.value)

        let resultado2 = ((A - D) / A) * 100

        resultado.innerHTML = resultado2 + '%'

    }

}



/*let A = 100
let D = 59

let resultado = ((A - D) / A) * 100

console.log(resultado + '%')*/
