/**** Here child can access the properties and variable of parent function, while parent can not access the variables of children  ****/

function name(){
    const fName = "Mak"

    {
        function given(){
            const lName = "Patel"
            // console.log(fName);
        }
        // console.log(lName)
    }
    given()
}
name()


// same kind of things true for if()

if (true) {
    const userName = "romil"
    
    if (userName == "romil") {

        const lastName = " Patel"
        // console.log(userName+lastName);
        
    }
    // console.log(lastName);
    
}


//Hosting

// console.log(addOne(6));   //IF we declare function like this, then we can access their value or we can pass arguments before the function

function addOne (number){

    return number+1;

}
console.log(addOne(6));


// console.log(addTwo(6));  //The same kind of thing is not possible for this types of function declaration
const addTwo = function(num)
{
    return num +2
}
console.log(addTwo(6));