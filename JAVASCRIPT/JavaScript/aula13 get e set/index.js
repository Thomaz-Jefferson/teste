class Person{
    atk=0;
    step=0;
    _idade=0;
    constructor(firstName, lastName){
        this.firstName=firstName;
        this.lastName=lastName;
        
    }
    passo(){
        this.step++;
    }
    get idade(){
    return this._idade;
    }
    get fullname(){
        return `${this.firstName} ${this.lastName}`;
    }
    set idade(x){
        if (typeof x =="number"){

            this._idade = x;
        }
    }
   
}

let p1 = new Person("Thomaz","Jefferson");
p1.idade="abc";

console.log(`${p1.fullname} tem ${p1.idade} anos e ataque ${p1.atk}`);

