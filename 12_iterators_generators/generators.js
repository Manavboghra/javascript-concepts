function* numGen(){
    let i = 0;

    while(true){
        yield i++
    }
}

const print = numGen();
console.log(print.next());
console.log(print.next());
console.log(print.next());
console.log(print.next());
console.log(print.next());
console.log(print.next());

// function* gen(){
//   console.log("First!");
//    yield 1;

//    console.log("Second!");
//    yield 3;

//    console.log("Third!");
//    yield 5;

//    console.log("Done!")

// }
// const num = gen()
// // for (const w of num) {
// //   console.log(w)
// // }
// console.log(num.next())
// console.log(num.next())
// console.log(num.next())
// console.log(num.next())

// function* intNumber() {
//   for (let i = 0; i < 5; i++)
//     yield i;
// }
// const num = intNumber()

// for (const e of num) {
//   console.log(e)
// }
// console.log(num.next())
// console.log(num.next())
// console.log(num.next())
// console.log(num.next())
// console.log(num.next())
// console.log(num.next())

function* gen() {
   yield yield  10;
}

var seq = gen();

console.log(seq.next())
console.log(seq.next(30))
console.log(seq.next(40))