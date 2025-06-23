const userDetails = {
    userName: "Rahul",

    welcomeMSG: function () {
        // console.log(`${this.userName}, Welcome to Our site`);
        // console.log(this);  

    }
    // welcomeMSG()
}
// userDetails()
// userDetails.welcomeMSG()

// userDetails.userName = "Mak" 
// userDetails.welcomeMSG()
// console.log(this);


function Perfect() {
    let userPerfect = "Leela"
    // console.log(this); // WE can use this function only in object, we cannot use it in function

}
Perfect()

const firstArr = () => {
    let userPerfect = "Leela"
    // console.log(this);
    // console.log(this.userPerfect);

} 
firstArr ()


const addOne = (num1,   num2) =>   {
    return num1+num2

}
// console.log(addOne(5,7));


/*********Implicit return ********/

const addTwo = (num1,num2) => num1+num2 // if we write whole function in one line, then we don't need to return the value, and {} 

// const addTwo = (num1,num2) => (num1+num2) this is also a valid syntax

// console.log(addTwo(2,3));


const addName= (num1,num2) => {userName:"Manav"} //this is the invalid  syntax to return an object
console.log(addName(1,2))

const adduName= (num1,num2) => ({userName:"Manav"}) // This one is valid

console.log(adduName(2,3))