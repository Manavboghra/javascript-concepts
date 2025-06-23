function fruit(){
    console.log("Apple");
    console.log("Litchi");
    console.log("Kiwi");
    console.log("Orange");
    console.log("Mango");
}

// fruit()

// function addTwoNumbers(num1, num2){
//     console.log(num1+num2)
// }
// addTwoNumbers(2,4)

function addTwoNumbers(num1,num2){
    // let result = num1+num2
    // return result

    return num1+num2

}
const result= addTwoNumbers(3,5)
// console.log("Result:",result) 

function welcomeUser(Username){
    return `${Username} Welcome to Our Page`
}
// console.log(welcomeUser("Romil"))


/****************************Rest Operator ****************************************/


function addToCart(...item1){
    return item1
}
// console.log(addToCart(20,220,320,400,657))

const userDetails={
    name:"Orion",
    email:"Orion@gmail.com"
}

function details(anyobject){
    console.log(`The name of the user is ${anyobject.name}, with mail id ${anyobject.email}`)
}
// details(userDetails) // Or i can directly define whole object as arguments


const userInfo=[12,13,16,35]

function details(anylist){
    console.log(`The first element is ${anylist[0]}, with second element ${anylist[1]}`)
}
details(userInfo)


function Person (fname,lastname){
    this.name = fname,
    this.lname = lastname
}

// Person()

Person.prototype.gender = "Male"

Person.prototype.fullname = function(){
    return this.name+" "+this.lname;
};

const person1 = new Person("Aasu","Malik")
const person2 = new Person("Rahul","Chaudhari")

console.log(person1);
console.log(person2);
console.log(person2.gender);
console.log(person2.fullname());
