let valor = parseFloat(prompt("Calculo de Juros Simples! \n Informe o valor:"))

let txJuros = parseFloat(prompt("Informe percentual de juros:"))

let numParcelas = parseInt(prompt("Agora informe o número de meses:"))

let valorAcrescimo = valor*(txJuros/100)

let mensagem = ""
let valorSomado = 0

for(let i = 0; i < numParcelas; i++){
    valorSomado = valor + valorAcrescimo * i
    mensagem += `${i + 1}° Mês = R$${valorSomado}\n`
}
alert(mensagem)