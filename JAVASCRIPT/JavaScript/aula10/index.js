function clicada(){
    const button = document.querySelector("button")



    if( button.classList.contains("vermelho")){
        button.classList.remove("vermelho")
        button.classList.add("amarelo")
        
    }
    else if( button.classList.contains("amarelo")){
        button.classList.remove("amarelo")
        button.classList.add("vermelho")
    }
    console.log(button.classList)
    
}
function apertou(){
    console.log("voce apertou uma tecla")

}
function segurou(){
    console.log("voce está segurando a tecla")

}

const input=document.querySelector("input")
input.addEventListener("keyup", soltou);

function soltou(e){
    console.log("Voçê Apertou " + e.key)
    console.log("Shift? " + e.shiftKey);
    console.log("CTRL ? " + e.ctrlKey);
    console.log("ALT ? " + e.altKey);
    console.log("--")
}