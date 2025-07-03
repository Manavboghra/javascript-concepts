// function fruits(value) {
//     let nextIndex = 0

//     return {
//         next: function () {
//             if (nextIndex < value.length)
//                 return {
//                     value: value[nextIndex++],
//                     done: false,
//                 }
//             else
//                 return {
//                     done: true
//                 }
//         }
//     }
// }


// const fruit = ["Apple", "Litchi", "Kiwi", "Orange"]
// console.log(fruit)

// const fruitIndex = fruits(fruit)
// console.log(fruitIndex.next())
// console.log(fruitIndex.next())
// console.log(fruitIndex.next())
// console.log(fruitIndex.next())
// console.log(fruitIndex.next())



// function arr(value){

//     let nextIndexNumber = 0

//     return {
//         next: function(){
//             if(nextIndexNumber<value.length){
//                 return {
//                     value: value[nextIndexNumber++],
//                     done: false
//                 }
//             }
//             else{
//                 return{
//                     done:true
//                 }
//             }
//         }
//     }
// }

// const player = ["MSD","ROHIT","VIRAT","SANJU"]
// const players = arr(player)
// console.log(players.next())
// console.log(players.next())
// console.log(players.next())
// console.log(players.next())
// console.log(players.next())
// console.log(players.next())


// const values = [1,2,3,4]
// const var1 = values[Symbol.iterator]()
// console.log(var1)
// console.log(var1.next())
// console.log(var1.next())
// console.log(var1.next())
// console.log(var1.next())
// console.log(var1.next())

/********************************Behind the process of FOR...OF loop ********************************/

// var nums = [1, 5, 16];

// for (
//    // initialisation
//    var iter = nums[Symbol.iterator](),
//    next = iter.next(),
//    num = next.value;

//    // iterative check
//    !next.done;

//    // iterative expressions
//    next = iter.next(),
//    num = next.value
// )

// {
//    console.log(num);
// }




Number.prototype[Symbol.iterator]=function(){
    return this.toString()[Symbol.iterator]()
}
let num = 12223
for (const element of num) {
    console.log(element)
}


// var arr = [3, 4, 5];
// var arr2 = [1, 2,...arr, 6];

// console.log(arr2);