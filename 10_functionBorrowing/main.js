class animal{
    constructor(name,age,type){
       this.name = name 
       this.age = age 
       this.type = type 
    }
    printResult(){
    return `The name of animal is ${this.name}, which is ${this.age} years old, with ${this.type} type`
}

}


// let textTake = new animal("lion",40,"carniverb")
let textTake = new animal("lion",40,"carniverb")

let textTakeTwo = new animal("tigar")
console.log(textTakeTwo.printResult.apply(textTakeTwo)) 
const save= textTake.printResult.bind(textTakeTwo)
console.log(textTake.printResult.call(textTakeTwo)) 

console.log(textTake.printResult()) 
console.log(save())





