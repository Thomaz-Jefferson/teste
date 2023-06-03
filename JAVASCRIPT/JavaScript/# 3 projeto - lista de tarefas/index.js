// criando a variavel input que vai recber uma função enter
const input = document.querySelector("input")
input.addEventListener("keyup",enter)

//funcao do enter
function enter(e){

    if(e.key==="Enter"){

        
    let valor =document.querySelector("input")
    let lista= document.querySelector("ul")
    let novoli=  document.createElement("li")
    novoli.innerHTML = valor.value;
    lista.appendChild(novoli);

    //zerando o campo texto
    valor.value=null
    }
 
        
      
        
    
    
    
}
//botao do click
function clickMouse(){
    

    
    let valor =document.querySelector("input")
    let lista= document.querySelector("ul")
    let novoli=  document.createElement("li")
    novoli.innerHTML = valor.value;
    lista.appendChild(novoli);
    
    //ZERANDO O CAMPO
    valor.value=null



}

