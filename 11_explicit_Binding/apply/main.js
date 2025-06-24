let showName = {
    firstname: "Rohit",
    lastname: "Sharma",
}


let showNameOne = {
    firstname: "MS",
    lastname: "Dhoni",
}

let printName = function (hometown,state) {
    console.log(`${this.firstname} ${this.lastname} from ${hometown}, ${state}`)
}

// in the call method we can pass the arguments individuall, while in apply we can only pass one argument with [arg1,arg2]

printName.apply(showName,["Mumbai","Maharastra"])
printName.apply(showNameOne,["Ranchi","Bihar"])