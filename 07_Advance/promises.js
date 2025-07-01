// const firstPromise = new Promise(function (resolve, reject) {

//     setTimeout(function(){
//         console.log("Msg sucessfully received")
//         resolve()
//     }, 2000);
// }
// )

// firstPromise.then(function () 
// { 
//     console.log("Promise Completed")
//  })


//  new Promise(function(resolve, reject){

//     setTimeout(() =>{
//         console.log("Task Completed")
//         resolve()
//     },3000)

//  }).then(() =>{
//     console.log("Promise 2 completed")
//  })

// const myPromise = new Promise(function (resolve, reject) {

//     setTimeout(function () {
//         let err = false

//         if (!err) {
//             resolve({ username: "Manav", Age: 21 })
//         }
//         else {
//             reject(`Error: User not found`)
//         }

//     }, 2000)

// })

// myPromise.then(function (user) {
//     // console.log(user)
//     return user.username
// }).then((username) => {
//     console.log(username)
// }).catch(function (err) {
//     console.log(err)
// })


const promiseTwo = new Promise(function (resolve, reject) {

    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: "Js Tutorial", pass: "123234" })
        }
        else {
            reject('ERROR: JS not found')
        }
    }, 3000)

});

async function printPromiseTwo() {
    try {
        const print = await promiseTwo
        console.log(print);
    } catch (error) {
        console.log(error);

    }
}
printPromiseTwo()

// async function fetchData() {
//     try {
//         const getData = await fetch("https://jsonplaceholder.typicode.com/posts")
//         const data = await getData.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }
// fetchData()

fetch("https://jsonplaceholder.typicode.com/posts")
.then((response)=>{
 return response.json()
})
.then((response)=>{
    console.log(response)
}).catch((err)=>{
    console.log(err)
})


// const promise = new Promise(function(resolve,reject){
//    const i = 5
//    if(i==7){
//       console.log(`Number is ${i}`)
//       resolve()
//    }
//    else reject("ERRRORRR!!")
// }).then(() => console.log("first")).catch(e=>console.log(e))


new Promise((resolve,reject)=>{
   const name = "pada"
   const pass = "panda@123"

   if(name != "panda" || pass != "panda@123" )
   {
      setTimeout(()=>{reject("Uffff... Something wrong")},5000)
   }
   else{
      resolve(`Welcome ${name}`)
   }
}).then((res)=>{console.log(res)}).catch((e)=>{console.log(e)})


const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("You have been blocked")
    }
    ,5000)
})

p.then(null,function(e){console.log(`Caused Error:${e}`)})