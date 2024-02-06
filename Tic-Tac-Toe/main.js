const A1 = document.getElementById('A1')
const A2 = document.getElementById('A2')
const A3 = document.getElementById('A3')
const B1 = document.getElementById('B1')
const B2 = document.getElementById('B2')
const B3 = document.getElementById('B3')
const C1 = document.getElementById('C1')
const C2 = document.getElementById('C2')
const C3 = document.getElementById('C3')
let player01 = true
let marcadoX = []
let marcadoO = []
A1.addEventListener('click', marcarA1)
A2.addEventListener('click', marcarA2)
A3.addEventListener('click', marcarA3)
B1.addEventListener('click', marcarB1)
B2.addEventListener('click', marcarB2)
B3.addEventListener('click', marcarB3)
C1.addEventListener('click', marcarC1)
C2.addEventListener('click', marcarC2)
C3.addEventListener('click', marcarC3)

function marcarA1(){
    if (A1.innerText == ""){
        A1.innerText = player01 === true ? "X" : "O"
        if(player01 == true){
            player01 = false
            A1.classList.add('color-blue')
            marcadoX.push(A1.id)
        }else{
            player01 = true
            A1.classList.add('color-red')
            marcadoO.push(A1.id)
        }
    }
    VerificaGanhador()
}
function marcarA2(){
    if (A2.innerText == ""){
        A2.innerText = player01 === true ? "X" : "O"
        if(player01 === true){
            player01 = false
            A2.classList.add('color-blue')
            marcadoX.push(A2.id)
        }else{
            player01 = true
            A2.classList.add('color-red')
            marcadoO.push(A2.id)
        }
    }
}
function marcarA3(){
    if (A3.innerText == ""){
        A3.innerText = player01 === true ? "X" : "O"
        if(player01 === true){
            player01 = false
            A3.classList.add('color-blue')
            marcadoX.push(A3.id)
        }else{
            player01 = true
            A3.classList.add('color-red')
            marcadoO.push(A3.id)
        }
    }
}
function marcarB1(){
    if (B1.innerText == ""){
        B1.innerText = player01 === true ? "X" : "O"
        if(player01 === true){
            player01 = false
            B1.classList.add('color-blue')
            marcadoX.push(B1.id)
        }else{
            player01 = true
            B1.classList.add('color-red')
            marcadoO.push(B1.id)
        }
    }
}
function marcarB2(){
    if (B2.innerText == ""){
        B2.innerText = player01 === true ? "X" : "O"
        if(player01 === true){
            player01 = false
            B2.classList.add('color-blue')
            marcadoX.push(B2.id)
        }else{
            player01 = true
            B2.classList.add('color-red')
            marcadoO.push(B2.id)
        }
    }
}
function marcarB3(){
    if (B3.innerText == ""){
        B3.innerText = player01 === true ? "X" : "O"
        if(player01 === true){
            player01 = false
            B3.classList.add('color-blue')
            marcadoX.push(B3.id)
        }else{
            player01 = true
            B3.classList.add('color-red')
            marcadoO.push(B3.id)
        }
    }
}
function marcarC1(){
    if (C1.innerText == ""){
        C1.innerText = player01 === true ? "X" : "O"
        if(player01 === true){
            player01 = false
            C1.classList.add('color-blue')
            marcadoX.push(C1.id)
        }else{
            player01 = true
            C1.classList.add('color-red')
            marcadoO.push(C1.id)
        }
    }
}
function marcarC2(){
    if (C2.innerText == ""){
        C2.innerText = player01 === true ? "X" : "O"
        if(player01 === true){
            player01 = false
            C2.classList.add('color-blue')
            marcadoX.push(C2.id)
        }else{
            player01 = true
            C2.classList.add('color-red')
            marcadoO.push(C2.id)
        }
    }
}
function marcarC3(){
    if (C3.innerText == ""){
        C3.innerText = player01 === true ? "X" : "O"
        if(player01 === true){
            player01 = false
            C3.classList.add('color-blue')
            marcadoX.push(C3.id)
        }else{
            player01 = true
            C3.classList.add('color-red')
            marcadoO.push(C3.id)
        }
    }
}

function VerificaGanhador(){
    let index = 0
    let array1 = ['A1', 'A2', 'A3']
    if (marcadoX.length >= 3){
        
    }
    if (marcadoO.length >= 3){

    }
}