//  Immediately Invoked Function Expression (IIFE)

/******This is the normal way to print the function ***********/

function dataBae(){
    console.log("DataBase Connected!!!");
}
dataBae();
/********************* This is how we can use iife, BUT NOTE THAT, if we use two functions than semicolon is required********************/

(function dB(){
    console.log(`DB Connected!!!`);
})();


((user) => {
    console.log(`DB Connected sucessfully!!! ${user} `);
    
})("Manav")