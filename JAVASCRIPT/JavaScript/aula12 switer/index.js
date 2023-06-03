let dia = 5
let diaNome =""
 switch(dia){
    case 1:
        diaNome="segunda feira"
        break
    case 2:
        diaNome="terca feria"
        break
    case 3:
        diaNome="quarta feria"
        break
    case 4:
        diaNome="quinta feria"
        break
    case 5:
        diaNome="sexta feira"
        break
    case 6:
        diaNome="sabado"
        break
    case 7:
        diaNome="domingo"
        break
    default:
        diaNome="ta de sacanagem comigo user"
 }
 document.getElementById("dia").innerHTML=`Hoje é : ${diaNome}`
 