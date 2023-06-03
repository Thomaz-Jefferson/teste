function amarelo(){

    limpar()
    document.getElementById("titulo").classList.add("amarelo")
    
}
function vermelho(){
    
    limpar()
    document.getElementById("titulo").classList.add("vermelho")
    
}
function branco(){

    limpar()
    document.getElementById("titulo").classList.add("branco")
    
}
function dark(){

    limparfundo()
    document.getElementById("body").classList.add("dark")
    
}
function white(){

    limparfundo()
    document.getElementById("body").classList.add("white")
    
}
function neutro(){

    limparfundo()
    document.getElementById("body").classList.add("neutro")
    
}
function limpar(){
    document.getElementById("titulo").classList.remove("amarelo")
    document.getElementById("titulo").classList.remove("vermelho")
    document.getElementById("titulo").classList.remove("branco")
}
function limparfundo(){
document.getElementById("body").classList.remove("dark")
document.getElementById("body").classList.remove("white")
document.getElementById("body").classList.remove("neutro")
}