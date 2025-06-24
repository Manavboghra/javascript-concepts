/*****it bind and keep a copy for later*******///


// function bindCheck(...argu){
//     console.log(this,...argu);
// }

// const bindCheckOne = bindCheck.bind("Hello",1,2,3)
// const bindCheckTwo = bindCheckOne.bind("User",5,6,7)

// console.log(bindCheckTwo(7,98))

let showName = {
    firstname: "Rohit",
    lastname: "Sharma",
}


let showNameOne = {
    firstname: "MS",
    lastname: "Dhoni",
}

let printName = function (hometown,state) {
    console.log(`${this.firstname} ${this.lastname} from ${hometown} state ${state}`)
}

// const printOutput = printName.bind(showName,["Mumbai","MH"])  
const printOutput = printName.bind(showName,"Mumbai","MH")

printOutput()
