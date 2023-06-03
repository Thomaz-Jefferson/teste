let cont = 0
function add() {

    cont++
}
add()
add()
add()
console.log(cont)
function sqaureadd(a, b) {
    function sqaure(x) {
        return x * x
    }
    return sqaure(a) + sqaure(b)
}

console.log(sqaureadd(2, 3))
let colors= ["blue","red","black"]
console.log(colors)
let ingredientes=[
    "agua",
    "farinha",
    "ovo",
    "fermento",
    "manteiga",
    "sal",
    "oleo"
];
ingredientes.push("acucar")
ingredientes.pop()
ingredientes.sort()
console.log("total.de ingredientes --> ",ingredientes.length)
console.log(ingredientes)
let carros = ["bmw","ferrari","mercedes"]

console.log(carros[1])

carros[1]=("audi")
console.log(carros)
carros.push("volvo")
console.log(carros)

console.log("este é o numero do total das marcas de carros --> ",carros.length)
