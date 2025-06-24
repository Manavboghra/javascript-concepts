//inheritance

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
}

const goat =new goats("goat")
goat.run(20)
goat.food()




// const parent = {
//     value: 5,
    
//     method() {
//         return this.value+5
        
//     },
// };
// console.log(parent.method())


// const child ={
//     __proto__: parent,
// };
// console.log(child.method())

// child.value = 9
// console.log(child.method())




// const loop ={
//     getValue(){
//         return this.value
//     },
// };


// const print = [
//     {value:5, __proto__:loop},
//     {value:3, __proto__:loop},
//     {value:6, __proto__:loop},
// ];

// console.log(print)