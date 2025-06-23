/*****************************falsy values*********************************/
// false, 0, -0, BigInt 0n, null, undefined, NaN,""

/*****************************truthy values*********************************/
// true, 1, [], "0", "false", " ", {}, function() {}


// const userMail = " "
// if(userMail){
//     console.log("Valid Mail");
    
// }else
// console.log("Invalid Mail");

// const userMail = [3]
// if(userMail.length!==0){
//     console.log("Valid Mail");
    
// }else
// console.log("Invalid Mail");
// 
 const userMail = {name: "Ram"}
if(Object.keys(userMail).length!==0){
    console.log("Valid Mail");
    
}else
console.log("Invalid Mail");

