
function validacao(user, senha) {
    if (user == "pedro" && senha == "123") {
        return true
    }else {
        return false
    }
}

let user = "pedro"
let senha = 123
let resposta = validacao(user,senha)
if (resposta){
    console.log("ACESSO CONCEDIDO")
}else{
    console.log("ACESSO NEGADO")
}