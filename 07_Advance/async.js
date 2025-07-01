// async function showAge() {
//     return Promise.resolve(19)
// }
// showAge().then(age=>{console.log(age)})

// async function f() {

//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 6000)
//   });

//   let result = await promise; // wait until the promise resolves (*)
//   console.log("first")

//   console.log(result); // "done!"
// }

// f();


// const set = setTimeout(()=>{console.log("firstfirst")},5000)

// const clear = clearTimeout((set),2000)

const set = setInterval(() => {
    const date = new Date()
    console.log(date.toLocaleTimeString())
    

}, 1000);



// const clear = clearInterval(set)

// setTimeout(() => {
//   console.log("Delayed for 1 second.");
// }, "1000");
