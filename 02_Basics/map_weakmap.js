
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


// let userIDs = new Map();

// let users = [{name: 'John'}, {name: 'Murray'}, {name: 'Jane'}];

// // userIDs.set(user1, 1) .set(user2, 2) .set(user3, 3);


// // userIDs.forEach((key,value)=>{
// // console.log(key,value)
// // })

// // for (const [key,value] of userIDs) {
// //   console.log(key,value)
  
// // }

// // (()=>{console.log("first")})()


// const map = new Map(Object.entries(users))
// console.log(map)
// console.log(map.get("1"))


// let obj= {name:"ram"}
// // console.log(obj)
// // console.log(obj.name)
// // obj = null
// // console.log(obj)
// let arr = [obj]
// console.log(arr)
// obj = null
// console.log(obj)  // if obj is null, although the element in array is not garbajed
// // console.log(arr[0])
// console.log(arr)

// let obj = {name:"ram"}

// let map = new Map()
// map.set(obj,"jasi")
// console.log(map)
// console.log(obj)

// obj = null

// console.log(map)
// console.log(obj)


// let obj = {name:"ram"}

// let map = new WeakMap()
// map.set(obj,"jasi")
// console.log(map)
// console.log(obj)

// obj = null

// console.log(map)
// console.log(obj)


// let john = { name: "John" };

// let weakMap = new WeakMap();
// weakMap.set(john, "...");

// john = null;
// console.log(weakMap)
// console.log(john)
// console.log(weakMap)

// let joh = { name: "Joh" };

// let map = new Map();
// map.set(joh, "...");

// joh = null; 
// console.log(map)
// console.log(joh)