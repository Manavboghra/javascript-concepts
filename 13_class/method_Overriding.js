//method overriding

class animals{
   constructor(name){
    this.name = name
    this.speed = 0
   }
   run(speed){
    console.log(`${this.name} can run with ${speed}`)
   }
}

const animal = new animals("Tigar")

animal.run(30)

class goats extends animals{

    food(){
        console.log("it eat the grass")
    }
    run(){
        super.run();
        this.food();
    }
}

const goat =new goats("goat")
// goat.run(5)
goat.run();




