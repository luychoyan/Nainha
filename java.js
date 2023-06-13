


function calcular() {

    let Antes = document.querySelector('#antes').value
    let Depois = document.querySelector('#depois').value
    let resultado = document.querySelector('#resultado').value


    if (Antes.length <= 0) {

        alert ('Error')

    } else {

        let A = Number(Antes)
        let D = Number(Depois)
        let resultado2 = ((A - D) / A) * 100

        resultado.innerHTML = resultado2

    }

}



/*let A = 100
let D = 59

let resultado = ((A - D) / A) * 100

console.log(resultado + '%')*/
