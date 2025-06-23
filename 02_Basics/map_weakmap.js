
/********************** Map ********************************/
// const map = new Map()
// map.set("1","Ram")
// map.set("2","Sita")
// map.set("3","Rohan")
// map.set("4","Tommy")

// console.log(map.has("1"))
// console.log(map.has("Sita"))
// console.log(map.delete("4"))
// console.log(map.has("4"))


// console.log(map.keys())
// console.log(map.values())

// map.forEach( (val,key) => console.log( val, key)  )

// console.log(map)


/**********************Weak Map ********************************/
let mywm = new WeakMap();

// mywm.set("1","Ram") // we can not add this types of key and values in the weak map, we can only add objects
// mywm.set("2","Sita")
// mywm.set("3","Rohan")
// mywm.set("4","Tommy") 

var ob1 = {};
var ob2 = {};

mywm.set(ob1,"Hello");
mywm.set(ob2,"world");



console.log(mywm)