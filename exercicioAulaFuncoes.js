let cst = prompt("CST: 00, 20, 51 \nQual o CST da mercadoria?")
let descricao
let valorICMS
let valorMercadoria = parseFloat(prompt("Valor da Mercadoria:"))
let valorFrete = parseFloat(prompt("Valor do frete (caso não tenha digite zero):"))
let valorDesconto = parseFloat(prompt("Valor de desconto (caso não tenha digite zero):"))
let aliquotaICMS = parseFloat(prompt("Valor aliquota ICMS:"))
let erro = false

if (cst === "00"){
    descricao = "ICMS Próprio:\n"
    montaDescricao()
    valorICMS = icmsProprio()
}else if (cst === "20"){
    descricao = "ICMS Redução da base de cálculo"
    let reducaoBase = parseFloat(prompt("Informe o quanto de redução no produto (%):"))
    montaDescricao()
    descricao += " Redução da Base: " + reducaoBase + "% \n"
    valorICMS = icmsReducaoBase()
}else if (cst === "51"){
    descricao = "ICMS Diferimento"
    let diferimento = parseFloat(prompt("Informe o quanto de redução no produto (%):"))
    montaDescricao()
    descricao += " Diferimento: " + diferimento + "% \n"
    valorICMS = icmsDiferimento()
}else{
    alert("CST não encontrado")
    erro = true
}
if (!erro){
    descricao += "\n\n VALOR DO ICMS: R$" + valorICMS
    alert(descricao)
}
function icmsProprio(){
    return (valorMercadoria + valorFrete - valorDesconto) * (aliquotaICMS/100)
}
function icmsReducaoBase(){
    let vlrAuxiliar = (valorMercadoria + valorFrete - valorDesconto) * (aliquotaICMS/100)
    return vlrAuxiliar - (vlrAuxiliar * (reducaoBase/100))
}
function icmsDiferimento(){
    let vlrAuxiliar = (valorMercadoria + valorFrete - valorDesconto) * (aliquotaICMS/100)
    return vlrAuxiliar - (vlrAuxiliar * (diferimento/100))
}
function montaDescricao(){
    descricao += " Valor Produto: R$" + valorMercadoria + "\n"
    descricao += " Valor frete: R$" + valorFrete + "\n"
    descricao += " Valor desconto: R$" + valorDesconto + "\n" 
    descricao += " Aliquota ICMS: " + aliquotaICMS + "% \n"
}
