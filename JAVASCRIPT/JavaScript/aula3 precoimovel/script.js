function porcentagem(n1,n2){
return (n2/n1)*100
}
let x=40
let y=10
let resposta=porcentagem(x,y)
console.log(resposta,"% de ",x, "é",y)

function precoImovel(metros,quartos){
    m2=3000.00
    if (quartos<=1){
        m2=3000.00*1
    }
    else if(quartos>1 && quartos<=2){
        m2=3000.00*1.2
    }
    else if(quartos>2){
        m2=3000.00*1.5
    }
    return m2*metros
}
let metros=123
let quartos =2
let preco=precoImovel(metros,quartos)
console.log(" a casa custa R$"+ preco)
