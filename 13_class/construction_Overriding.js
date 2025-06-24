//construction overriding

class vehicle{
    constructor(name,speed){
        this.name = name
        this.speed = speed
    }
    vName(){
        console.log(`the name of vehicle is ${this.name}`)
    }
    vSpeed(){
        console.log(`speed is ${this.speed}`)
    }
}

class bike extends vehicle{
    constructor(name, type){
        super(name);
        this.type = type;
    }
    vType(){
        console.log(`the types is ${this.type}`)
    }
}

let bikes = new bike("yamaha","petrol")
bikes.vType()
bikes.vName()