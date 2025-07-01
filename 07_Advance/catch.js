// var p = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         reject("Sorry");
//     }, 3000);
// });

// // p.then(null,function(error) {
// //     console.log("An error occurred: " + error);
// // })

// p.catch(function(error) {
//     console.log("An error occurred: " + error);
// });

var p = new Promise(function(resolve, reject) {
    someAsyncOperation();
}).
then(function(data) {
    someOtherAsyncOperation();
}).
then(function(data) {
    someOtherAsyncOperation2();
}).
catch(function(error) {
    console.log("An error occurred: " + error);
});