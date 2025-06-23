const mysmbl = Symbol("Unique id")

const user = {
    name: "unknown",
    email: "unknown@gmail.com",
    [mysmbl]: "my id"
}

// console.log(user[mysmbl])
// console.log(user["name"])

// user.name = "YOur own"
// console.log(user)

// Object.freeze(user); //**************/for freeze the object**************/
// user.name = "Mak "
// console.log(user)


user.greeting = function(){
    // console.log(`Helllo boieee, I think your name is ${this.name}`);
    // console.log(`Helllo boieee, I think your key is ${this[mysmbl]}`);
    
}

const last = user.greeting()
// console.log(last);


// const myApp = new Object() // this is also the syntax of define the new object

const myApp = {}
myApp.name = "Roman"
myApp.Id = "1201"
myApp.Mail = "you@gmail.com"

// console.log(myApp)

const yourApp = {
    name: {
        Username:{
            f_name: "romit",
            l_name:"comit",
        }
    },
    roll: 1200
}

// console.log(yourApp.name.Username.f_name)


const myObj1={1:"A", 2:"B"}
const myObj2={3:"A", 4:"B"}
const myObj3={5:"A", 6:"B", 7:"C"}

// const myObj4= Object.assign({},myObj1,myObj2,myObj3)

const myObj4 = {...myObj1,...myObj2,...myObj3}

// console.log(myObj4);



/****************************USER DATA ***************************************/

const user_data = [
    {
        id:1201,
        mail:"1201@gmail.com"
    }, {
        id:1202,
        mail:"1202@gmail.com"
    }, {
        id:1203,
        mail:"1203@gmail.com"
    }, {
        id:1204,
        mail:"1204@gmail.com"
    }, {
        id:1205,
        mail:"1205@gmail.com"
    }, {
        id:1206,
        mail:"1206@gmail.com"
    },
]

// console.log(user_data[1].mail)


// console.log(myApp)
// console.log(Object.keys(myApp))
// console.log(Object.values(myApp))

// console.log(myApp.hasOwnProperty("Mail"))
// console.log(myApp.hasOwnProperty("email"))


const myCourse = {
    name:"JavaScript",
    duration: "3hours",
    userName:"Romin Patel"
}


const {userName: un}=(myCourse) // if i write :un then it is the short method to extract data in place of use username, i can use un

// console.log(userName);
console.log(un);
