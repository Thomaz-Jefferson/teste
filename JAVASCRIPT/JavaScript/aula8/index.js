let cores =[
    {nome: "preto", qt: 10},
    {nome: "branco", qt: 5},
    {nome: "azul" , qt: 8},
    
]
console.log("antes --> ",cores)
cores.push({nome: "verde", qt: 5})
console.log("depois -->", cores)
for (let i in cores){
    console.log(cores[i])
}
 for (let dados of cores){
    console.log(`Nome: ${dados.nome} - ${dados.qt}`)
 }
let frutas=["abacaxi", "melao", "maca", "banana" ,"a","b","c","d","z"]
let carros=[
    {marca: "TOYOTA" ,ano: 2017},
    {marca: "BMW", ano: 2015},
    {marca: "FERRARI", ano: 2016},
    {marca: "HONDA", ano: 2014},
]



console.log("despois -->",frutas)

carros.sort((a,b) =>{
    return a.ano-b.ano
 
})
console.log(carros)
let carrosnew= carros.filter((item) =>{
  return item.ano >2015
})
console.log(carrosnew)
let ok = carros.every((valor)=>{
    return valor.ano > 2016
})
if (ok){
    console.log("Todos os carros tem até 5 anos de uso")
}else{
    console.log("Nem todos os carros tem até 5 anos de uso")
}