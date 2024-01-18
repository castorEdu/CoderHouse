alert('Calculadora básica Coder \nRegras-> \n 1- Apenas operadores básicos(+, -, *, /) \n 2- Apenas um operador por vez \n 3- Sem expressões')
let hist = ""
function getValue(){
    let valor_input = document.getElementById('txt')
    let text_valor = valor_input.value

    let result = document.getElementById('valor')
    result.innerText = text_valor
}
function setMessage(){
    let valor_input = document.getElementById('txt')
    let result_txt = document.getElementById('valor')
    let num1 = ""
    let num2 = ""
    let operador
    let trocaNumero = false
    let result

    for(let i = 0; i < valor_input.value.length; i++){
        console.log(valor_input.value[i])
        switch(valor_input.value[i]){
            case "+":
                trocaNumero = true
                operador = "+"
                continue
            case "-":
                trocaNumero = true
                operador = "-"
                continue
            case "*":
                trocaNumero = true
                operador = "*"
                continue
            case "/":
                trocaNumero = true
                operador = "/"
                continue
            default:
                if(!trocaNumero){
                    num1 += valor_input.value[i]
                }else{
                    num2 += valor_input.value[i]
                }
        }
    }
    result = retornaValor(num1, num2, operador)
    if(result == "ERRO"){
        result_txt.innerText = "ERRO"
    }else{
        result_txt.innerText = result.toFixed(2)
    }
    hist = valor_input.value + " = " + result 
    addItem()
}
function retornaValor(n1,n2, operador){
    if (operador == "/"){
        if(parseFloat(n2) == 0){
            alert('ERRO: divisão por zero')
            return "ERRO"
        }
    }
    switch(operador){
        case "+":
            return parseFloat(n1) + parseFloat(n2)
        case "-":
            return parseFloat(n1) - parseFloat(n2)
        case "*":
            return parseFloat(n1) * parseFloat(n2)
        case "/":
            return parseFloat(n1) / parseFloat(n2)
        default:
            alert('Operador não encontrado')
            return "ERRO"
    }
}
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        setMessage()
    }
  });

function addItem(){
    const historico = document.getElementById('historico')
    let item = document.createElement('div')
    item.innerText = hist
    item.className = "item"

    historico.appendChild(item)

    hist = ""
}