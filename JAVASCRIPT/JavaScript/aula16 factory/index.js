class Person{
    age=0;
     constructor(name){
        this.name=name;


     }

}
function createPerson(name,age){
    let p1=new Person(name);
    p1.age=age;
    return p1;

}
let p1 = createPerson("Thomaz", 23);
console.log(`${p1.name} tem ${p1.age} anos.`);