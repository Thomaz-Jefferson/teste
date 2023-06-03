let total= document.querySelectorAll(".slider-item").length;
let slider=0
document.querySelector(".slider-todos").style.width=
`calc(100vw *${total} )`;

document.querySelector(".slider-controles").style.height= 
` ${document.querySelector(".slider-item").clientHeight}px`;

function prev(){

    slider--;
    if(slider<0){
        slider=total-1;
    }
    updatemargin();
}
function next(){

    slider++;
    if (slider> (total-1)){
        slider=0
    }
    updatemargin();
}
function updatemargin(){
    let sliderWidth= document.querySelector(".slider-item").clientWidth;
    let novamargin= (slider *  sliderWidth);
    document.querySelector(".slider-todos").style.marginLeft=
    `-${novamargin}px`;    
}
setInterval(next,5000);