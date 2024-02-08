let ganhou = false
let palavraChave = geraPalavra()
console.log(palavraChave)
let palavraDigitada = ""
let gameSelected = 1
let tamanhoPalavra = 5
let indexTermo = 0
let tentativas = 0
let element = document.getElementsByClassName('container')
let elementDueto = document.getElementsByClassName('containerDueto')
document.addEventListener('keydown',(ev)=>{
    
    if (validaLetraTeclado(ev)){
        if(ev.key == 'Backspace'){
            if (indexTermo > 0){
                element[tentativas].children[indexTermo-1].innerText = ""
                if (gameSelected > 1){
                    elementDueto[tentativas].children[indexTermo-1].innerText = ""
                }
                palavraDigitada = palavraDigitada.slice(0,-1)
                indexTermo -= 1
            }else{
                indexTermo = 0
            }
        }else{
            if(indexTermo < tamanhoPalavra){               
                indexTermo += 1
                element[tentativas].children[indexTermo - 1].innerText = ev.key
                if (gameSelected > 1){
                    elementDueto[tentativas].children[indexTermo-1].innerText = ev.key
                }
                palavraDigitada += ev.key
            }
        }
    }
    if (ganhou == false){
        if(ev.key == 'Enter'){
            if (verificaQtdLetras() == true){
                    for(let i = 0; i < tamanhoPalavra; i++){
                        validaLetraCerta(palavraDigitada[i], i)
                    }
                palavraDigitada = ""
                tentativas += 1
                indexTermo = 0
            }
        }
    }
})
function validaLetraTeclado(ev){
    if(ev.key == "0" || ev.key == "1" || ev.key == "2" || ev.key == "3"|| ev.key == "4"|| ev.key == "5"|| ev.key == "6" || ev.key == "7" || ev.key == "8" || ev.key == "9" || ev.key == 'Enter' || ev.key == 'ArrowUp' || ev.key == 'ArrowDown' || ev.key == 'ArrowRight' || ev.key == 'ArrowLeft' || ev.key == '/' || ev.key == '*' || ev.key == '-' || ev.key == '+' || ev.key == '.' || ev.key == ',' || ev.key == ';' || ev.key == '/' || ev.key == 'Alt' || ev.key == 'Control' || ev.key == 'Dead' || ev.key == 'Meta' || ev.key == "'" || ev.key == 'Escape' || ev.key == ' ' || ev.key == 'AltGraph' || ev.key == 'ContextMenu' || ev.key == 'Insert' || ev.key == 'End' || ev.key == 'Delete' || ev.key == 'Home' || ev.key == 'PageUp' || ev.key == 'PageDown' || ev.key == 'NumLock' || ev.key == 'ScrollLock' || ev.key == 'Pause' || ev.key == 'F1' || ev.key == 'F2' || ev.key == 'F3' || ev.key == 'F4' || ev.key == 'F5' || ev.key == 'F6' || ev.key == 'F7' || ev.key == 'F8' || ev.key == 'F9' || ev.key == 'F10' || ev.key == 'F11' || ev.key == 'F12' || ev.key == 'Tab' || ev.key == 'CapsLock' || ev.key == 'Shift' || ev.key == 'Clear' || ev.key == '[' || ev.key == ']' || ev.key == '=' || ev.key == '!' || ev.key == '@' || ev.key == '#' || ev.key == '$' || ev.key == '$' || ev.key == '%' || ev.key == '¨' || ev.key == '&' || ev.key == '(' || ev.key == ')' || ev.key == 'ç' || ev.key == 'Ç' || ev.key == '|' || ev.key == '^' || ev.key == '`' || ev.key == '"' || ev.key == ":" || ev.key == '?' || ev.key == '<' || ev.key == '>' || ev.key == '°' || ev.key == 'º' || ev.key == 'ª' || ev.key == '§' || ev.key == '_'){
        return false
    }else{
        return true
    }
}
function validaLetraCerta(w,x){
    for(let i = 0; i<tamanhoPalavra;i++){
        if(x == i){
            if(w == palavraChave[i]){
                element[tentativas].children[i].classList.add('acertouLetra')
                continue
            }else{
                if(palavraChave.includes(w)){
                    if (corrigeLetraExistente(w,x)){
                        element[tentativas].children[i].classList.add('existeLetra')
                    }
                }
            }
        }
    }
}
function ToggleConfig(){
    const config = document.getElementById('game-config')

    config.classList.toggle('visible')
    config.classList.toggle('hidden')
}

function geraPalavra(){
    let numeroAleatorio = parseInt(Math.random()*38)
    let arrayPalavras = [
        'golpe',
        'calma',
        'sofia',
        'prumo',
        'missa',
        'tropo',
        'touca',
        'sopro',
        'entre',
        'zoada',
        'orlar',
        'expor',
        'segue',
        'selva',
        'fardo',
        'vital',
        'genro',
        'fixar',
        'usura',
        'certo',
        'solto',
        'pulga',
        'etica',
        'palmo',
        'ogiva',
        'amado',
        'frase',
        'ceder',
        'refem',
        'rango',
        'furor',
        'lupus',
        'pisar',
        'quase',
        'veria',
        'bulir'
    ]
    return arrayPalavras[numeroAleatorio]
}
if(palavraDigitada == palavraChave){
    alert("VOCÊ VENCEU MULA! PARABÉNS")
    ganhou = true
}
function verificaQtdLetras(){
    for(let i = 0; i<tamanhoPalavra-1;i++){
        if(element[tentativas].children[i].innerText == ""){
            return false
        }
        if(gameSelected  > 1){
            if(elementDueto[tentativas].children[i].innerText == ""){
                return false
            }
        }
    }
    return true
}
function corrigeLetraExistente(caracter, indice){
    let arrayRepetida = []
    let repetidaDigitada = 0
    let repetidaChave = 0
    for(let i = 0; i<tamanhoPalavra; i++){
        if(caracter == palavraDigitada[i]){
            arrayRepetida.push(i)
            repetidaDigitada += 1
        }
        if(caracter == palavraChave[i]){
            repetidaChave += 1
        }
    }
    if (arrayRepetida.length > 1){
        console.log(caracter)
        if(repetidaDigitada > repetidaChave){
            for(let i = 0; i<arrayRepetida.length;i++){
                if(palavraChave[arrayRepetida[i]] == caracter){
                    return false
                }
            }
        }
    }
    return true
}
function GameType(el){
    let gameSelected = el.innerText
    let qtdContent = document.getElementsByClassName('content')
    let k = 0
    let gameTries = 0
    let travaClicks = 0
    if(gameSelected == "termo"){

    }else{
        if(gameSelected == "dueto"){
            travaClicks = 1
            gameTries = 7
            k = 1
        }else{
            travaClicks = 3
            gameTries = 9
            if(qtdContent.length == 1){
                k = 3
            }
            if(qtdContent.length == 2){
                k = 2
            }
        }
    }
    if(qtdContent.length <= travaClicks){
        for(let i = 0; i<k;i++){
            let count = 0
            let primeiroContent = document.getElementsByClassName('content')
            for(let f = 0; f<k;f++){
                let ultimoContainer = document.createElement('div')
                ultimoContainer.className = 'container'
                let primeiraBox = document.createElement('div')
                primeiraBox.className = 'box'
                ultimoContainer.appendChild(primeiraBox)
                let segundaBox = document.createElement('div')
                segundaBox.className = 'box'
                ultimoContainer.appendChild(segundaBox)
                let terceiraBox = document.createElement('div')
                terceiraBox.className = 'box'
                ultimoContainer.appendChild(terceiraBox)
                let quartaBox = document.createElement('div')
                quartaBox.className = 'box'
                ultimoContainer.appendChild(quartaBox)
                let quintaBox = document.createElement('div')
                quintaBox.className = 'box'
                ultimoContainer.appendChild(quintaBox)
                primeiroContent[count].appendChild(ultimoContainer)
                count += 1
            }
        }
        let panel = document.getElementById('panel')
        for(let i = 0; i<k;i++){
            let newParent1 = document.createElement('div')
            newParent1.className = 'content'
            for(let i = 0; i<gameTries;i++){
                let container1 = document.createElement('div')
                container1.className = 'containerDueto'
                for(let j = 0; j<5;j++){
                    let Box1 = document.createElement('div')
                    Box1.className = 'box'
                    container1.appendChild(Box1)
                }
                newParent1.appendChild(container1)
            }
            
            panel.appendChild(newParent1)
        }
    }
}

window.addEventListener('scroll',()=>{
    window.scrollTo(0,0)
})