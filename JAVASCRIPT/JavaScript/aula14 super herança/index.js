class Person{
    age=0;
     constructor(name){
        this.name=name;
     }
     sayHi() {
         console.log(`${this.name} Diz oi`);
     }
}
class Student extends Person{
    
    constructor(name,id){
        super(name);
        this.id=id;

    }

}
let p1 = new Student("Thomaz Developer",1);
let p2 = new Student("Vitoria Developer",2);
p1.age=20;
p2.age=21;
console.log(`Prazer ${p1.name} vc tem ${p1.age} anos e seu id é: #${p1.id}`);
console.log(`Prazer ${p2.name} vc tem ${p2.age} anos e seu id é: #${p1.id}`);
p1.sayHi();