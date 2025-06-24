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