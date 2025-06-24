let animal={
    name:"Animal",
    eat(){
        console.log(`This ${this.name} eats`)
    }
};

let tigar = {
    __proto__:animal,
    name:"tigar",
    eat(){
        this.__proto__.eat.call(this);
    }
};

tigar.eat()
