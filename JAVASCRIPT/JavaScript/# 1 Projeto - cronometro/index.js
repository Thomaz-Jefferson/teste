var sec=0
var min=0
var hor=0
var intervalo
function twodigits(digito){
    if (digito<10){
        return ("0"+ digito)
    }else{
        return(digito)
    }

}
function start(){
    console.log("iniciou")
    intervalo=setInterval(cont,1000)
}
function pause(){
    console.log("pausou")
    clearInterval(intervalo)
}
function stop(){
    console.log("parou")
    clearInterval(intervalo)
    sec=0;
    min=0;
    hor=0;
    document.getElementById("time").innerText="00:00:00"
    
}
function cont(){

    sec++;
    if(sec==60){
        min++
        sec=0
    }
    else if(min==60){
        hor++
        min=0
    }
    else if(hor==60){
        sec=0;
        min=0;
        hor=0;
    }
    document.getElementById("time").innerText=twodigits(hor)+":"+twodigits(min)+":"+twodigits(sec)
    
}