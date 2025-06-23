const parent = {
    value: 5,
    
    method() {
        return this.value+5
        
    },
};
console.log(parent.method())


const child ={
    __proto__: parent,
};
console.log(child.method())

child.value = 9
console.log(child.method())




const loop ={
    getValue(){
        return this.value
    },
};


const print = [
    {value:5, __proto__:loop},
    {value:3, __proto__:loop},
    {value:6, __proto__:loop},
];

console.log(print)