/**
 * Calculo de quantos litros cabem no aquario
 * @author Marcos Ryan
 * @link https://www.youtube.com/channel/UCiVuxdmrUV0yysFFzuHoOYg
 */

// Variáveis
let peso, altura, imc, idade, fcm, litros, get

function calcular() {
    // Captura das variáveis idade, peso e altura
    idade = frmHealth.txtIdade.value
    peso = frmHealth.txtPeso.value
    altura = (frmHealth.txtAltura.value) / 100 // Converter cm em metros

    // Validação de campos obrigatórios(todos)
    if (frmHealth.txtIdade.value === "") {
        alert("Informe a sua idade")
        frmHealth.txtIdade.focus()
    } else if (frmHealth.txtPeso.value === "") {
        alert("Informe o seu peso")
        frmHealth.txtPeso.focus()
    } else if (frmHealth.txtAltura.value === "") {
        alert("Informe a sua altura em centímetros")
        frmHealth.txtAltura.focus()
    } else if (document.getElementById("m").checked === false && document.getElementById("f").checked === false) {
        alert("Selecione o seu sexo de nascimento")
    } else if (frmHealth.nivel.value === "") {
        alert("Selecione o seu nível de atividade física")
    } else {
        // Lógica principal
        // Cálculo do IMC
        imc = peso / (altura * altura)
        document.getElementById("imc").innerHTML = `IMC: ${imc.toFixed(2)}`
        if (imc < 18.5) {
            document.getElementById("status").innerHTML = "Abaixo do peso"
            document.getElementById("grafico").src = "img/baixo.png"
        } else if (imc < 25) {
            document.getElementById("status").innerHTML = "Peso normal"
            document.getElementById("grafico").src = "img/normal.png"
        } else if (imc < 30) {
            document.getElementById("status").innerHTML = "Sobrepeso"
            document.getElementById("grafico").src = "img/sobrepeso.png"
        } else if (imc < 35) {
            document.getElementById("status").innerHTML = "Obesidade Grau I"
            document.getElementById("grafico").src = "img/obesidade1.png"
        } else if (imc < 40) {
            document.getElementById("status").innerHTML = "Obesidade Grau II"
            document.getElementById("grafico").src = "img/obesidade2.png"
        } else {
            document.getElementById("status").innerHTML = "Obesidade Grau III"
            document.getElementById("grafico").src = "img/obesidadeExtrema.png"
        }

        // FCM
        fcm = 208 - (0.7 * idade)
        document.getElementById("freq").innerHTML = fcm

        // Consumo de água
        litros = (peso * 35) / 1000
        document.getElementById("agua").innerHTML = `${litros.toFixed(1)} Litros/dia`
        // get >>>>>>>
        // Passo 1: capturar o valor da lista (combobox)
        let lista = document.getElementById('atividade')
        let valor = Number(lista.options[lista.selectedIndex].value)
        console.log(valor) // Teste Importante

        // Passo 2: executar uma fórmula diferente para o sexo selecionado
        if (document.getElementById("m").checked === true) {
            //console.log("Formula para homens")
            get = (66 + (13.7 * peso) + (5 * (altura * 100) - (6.8 * idade))) * valor
        }
        if (document.getElementById("f").checked === true) {
            //console.log("Formula para mulheres")
            get = (655 + (9.6 * peso) + (1.8 * (altura * 100) - (4.7 * idade))) * valor
        }
        console.log(get)

        // Passo 3: exibir o resultado
        document.getElementById('calorias').innerHTML = `${Math.floor(get)} Calorias/dias`
    }
}
function limpar() {
    document.getElementById('imc').innerHTML = "IMC"
    document.getElementById('status').innerHTML = "status"
    document.getElementById('freq').innerHTML = "FCM"
    document.getElementById('calorias').innerHTML = "Calorias/dia"
    document.getElementById('agua').innerHTML = "Litros/dia"
    document.getElementById('grafico').src = "img/reset.png"
}
