
function clickmenu(){
    
    
    let menu=document.getElementById("menu-area")
    
        if(menu.classList.contains("clicado")==true)
        {
            menu.classList.remove("clicado")
            console.log("tirado")
        }
        else{
            menu.classList.add("clicado")
        }
        
        
        
    
    
    
    
}