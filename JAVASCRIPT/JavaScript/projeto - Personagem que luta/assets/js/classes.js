//guerreiro ou mago
//mostro grande ou monstro pequeno
class Avatar{
    
    _life=1;
    maxlife=1;
    ataque=0;
    defesa=0;

    constructor (name){
        this.name=name;


    }

    get life(){
        return this._life;
    }
    set life(newlife){
        this._life=newlife <0 ? 0: newlife;

    }
}

class Guerreiro extends Avatar{
    constructor(name){
        super(name);
        this.life=100;
        this.ataque=10;
        this.defesa=8;
        this.maxlife=this.life;
    }

}

class Mago extends Avatar{
    constructor(name){
        super(name);
        this.life=80;
        this.ataque=15;
        this.defesa=3;
        this.maxlife=this.life;
    }
}
class monstropequeno extends Avatar{
    constructor(){
        super("Litter Monster");
        this.life=40;
        this.maxlife=this.life;
        this.ataque=4;
        this.defesa=4;
        
    }
}

class monstrogrande extends Avatar{
    constructor(){
        super("Big Monster");
        this.life=120;
        this.maxlife=this.life;
        this.ataque=16;
        this.defesa=6;

    }
}
class Stage{
    constructor(fight1,fight2,lutador1,lutador2){
        this.fight1=fight1;
        this.fight2=fight2;
        this.lutador1=lutador1;
        this.lutador2=lutador2;

    }
    start(){
        this.update();
        
    }
    update(){
        this.lutador1.querySelector(".name").innerHTML = this.lutador1.name;

        this.lutador2.querySelector(".name").innerHTML = this.lutador2.name;
    }
}
