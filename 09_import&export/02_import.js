const functions = require("./01_function.js")
console.log(functions.add(4,5)) 


const {add} = require("./01_function.js")
console.log(add(14,5)) 

const{add:myFunction} =  require("./01_function.js")
console.log(myFunction(19,5)) 