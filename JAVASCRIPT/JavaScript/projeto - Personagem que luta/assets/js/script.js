let char = new Guerreiro("Thomaz");
let monster = new monstropequeno();


console.log(char.name);
console.log("vida",char.life,"ataque",char.ataque);



console.log(monster.name);
console.log("vida",monster.life,"ataque",monster.ataque);



const stage = new Stage(
    char,
    monster,
    document.querySelector("#char"),
    document.querySelector("#monster")

);

stage.start();