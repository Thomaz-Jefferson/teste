
let personagem={
    nome: 'Helena',
    sobrenome: 'Ferreira Silva',
    nomecompleto: function(){
            return personagem.nome +" "+ personagem.sobrenome
        }
    }

    console.log(personagem.nomecompleto());


    let n=10;
    for(let i=0; i<=10; i++){
    
    console.log(n,"X",i,"=",n*i)
}
