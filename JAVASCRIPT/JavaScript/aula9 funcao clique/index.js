
/*function clicou(){
    const teste = document.querySelector("#teste")
    const ul = teste.querySelector("ul")
    let newli = document.createElement("li")
    newli.innerHTML="criado novo"
    ul.appendChild(newli)
    const newbotao= document.createElement("button")
    newbotao.innerHTML = "botao"

    ul.after(newbotao)
}

let botao = document.querySelector(".botao")
botao.addEventListener("click",clicou)
function clicou(){
    const input =document.querySelector("input");


    if(input.hasAttribute("placeholder")){
        console.log("tem plachehoulder sim")
    }else{
        console.log("nao tem placeholder")
    }
}*/
function clicou(){
    const input= document.querySelector(".input");
    const botao=document.querySelector(".botao");

    if (input.getAttribute("type")==="text"){
        input.setAttribute("type","password");
        botao.innerText="Mostrar Senha";
    }else{
        input.setAttribute("type","text");
        botao.innerText="Esconder Senha";
    }
}

function clicada(){
    const li =document.querySelector("li")

    
    li.style.backgroundColor = "#0f0";



}