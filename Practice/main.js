// // const data = "https://api.github.com/users/Manavboghra"

const { use } = require("react")

// // async function getData(){
// //     const response = await fetch(data)

// //     console.log(response)

// //     const jsonFile = await response.json()
// //     console.log(jsonFile)
// // }
// // getData()

// // let user = {     // an object
// //   name: "John",  // by key "name" store value "John"
// //   age: 30        // by key "age" store value 30
// // };

// // user.task = "multitask"

// // console.log(user)
// // console.log(typeof user)

// // for (const key in user) {
// //     console.log(key)
// //     console.log(user[key])

// // }


// // const obj = {
// //   property1: value1, // property name may be an identifier
// //   2: value2, // or a number
// //   "property n": value3, // or a string
// // };

// // console.log(obj)


// // const Animal = {
// //   type: "Invertebrates", // Default value of properties
// //   displayType() {
// //     // Method which will display type of Animal
// //     console.log(this.type);
// //   },
// // };

// // // Create new animal type called animal1
// // const animal1 = Object.create(Animal);
// // animal1.displayType(); // Logs: Invertebrates

// // // Create new animal type called fish
// // const fish = Object.create(Animal);
// // fish.type = "Fishes";
// // fish.displayType();
// // console.log(Animal)


// // const myObj = {};
// // const str = "myString";
// // const rand = Math.random();
// // const anotherObj = {};

// // // Create additional properties on myObj
// // myObj.type = "Dot syntax for a key named type";
// // myObj["date created"] = "This key has a space";
// // myObj[str] = "This key is in variable str";
// // myObj[rand] = "A random number is the key here";
// // myObj[anotherObj] = "This key is object anotherObj";
// // myObj[""] = "This key is an empty string";

// // console.log(myObj);
// // // {
// // //   type: 'Dot syntax for a key named type',
// // //   'date created': 'This key has a space',
// // //   myString: 'This key is in variable str',
// // //   '0.6398914448618778': 'A random number is the key here',
// // //   '[object Object]': 'This key is object anotherObj',
// // //   '': 'This key is an empty string'
// // // }
// // console.log(myObj.myString);

// // (()=>{console.log("first")}) ()

// // const map = new Map()

// // map.set("name","Twinn")
// // map.set("age",21)
// // map.set("job","NA")

// // console.log(map)

// // console.log(map.get("name"))

// // // map.delete("job")
// // console.log(map.size)
// // // map.clear()
// // // console.log(map)

// // for (const key of map.values()) {
// //     console.log(key)
// // }


// // const myarr = [1,2,3,4,5,6,7,5,6,5,4,7,8,9,10]
// // // const map = new Map(myarr)
// // const set = new Set(myarr)

// // console.log(myarr)
// // // console.log(map)
// // console.log(set)

// // let cities = new Set();

// // let city1 = { name: "London" };
// // let city2 = { name: "Barcelona"};
// // let city3 = { name: "Milan"};
// // let city4 = { name: "Milan"};
// // let city5 = { name: "Milan"};

// // cities.add(city1);
// // cities.add(city2);
// // cities.add(city4);
// // cities.add(city3);
// // cities.add(city5);


// // cities.forEach((city) => {
// //   console.log(city);
// // });

// // let city = new Set([1,2,3,"mak",{"age":"qe"}])
// // console.log(city)


// // let users = [{
// //     id: 1,
// //     name: 'John'
// //   },
// //   {
// //     id: 2,
// //     name: 'Murray'
// //   },
// //   {
// //     id: 3,
// //     name: 'Jane'
// //   },
// //   {
// //     id: 4,
// //     name: 'Jane'
// //   },
// //   {
// //     id: 5,
// //     name: 'Anne'
// //   }
// // ]

// // users.forEach(function(user){
// //   console.log(user.name)
// // })


// // let userIDs = new Map();

// // let users = [{name: 'John'}, {name: 'Murray'}, {name: 'Jane'}];

// // // userIDs.set(user1, 1) .set(user2, 2) .set(user3, 3);


// // // userIDs.forEach((key,value)=>{
// // // console.log(key,value)
// // // })

// // // for (const [key,value] of userIDs) {
// // //   console.log(key,value)

// // // }

// // // (()=>{console.log("first")})()


// // const map = new Map(Object.entries(users))
// // console.log(map)
// // console.log(map.get("1"))


// // let obj= {name:"ram"}
// // // console.log(obj)
// // // console.log(obj.name)
// // // obj = null
// // // console.log(obj)
// // let arr = [obj]
// // console.log(arr)
// // obj = null
// // console.log(obj)  // if obj is null, although the element in array is not garbajed
// // // console.log(arr[0])
// // console.log(arr)

// // let obj = {name:"ram"}

// // let map = new Map()
// // map.set(obj,"jasi")
// // console.log(map)
// // console.log(obj)

// // obj = null

// // console.log(map)
// // console.log(obj)


// // let obj = {name:"ram"}

// // let map = new WeakMap()
// // map.set(obj,"jasi")
// // console.log(map)
// // console.log(obj)

// // obj = null

// // console.log(map)
// // console.log(obj)


// // let john = { name: "John" };

// // let weakMap = new WeakMap();
// // weakMap.set(john, "...");

// // john = null;
// // console.log(weakMap)
// // console.log(john)
// // console.log(weakMap)

// // let joh = { name: "Joh" };

// // let map = new Map();
// // map.set(joh, "...");

// // joh = null; 
// // console.log(map)
// // console.log(joh)

// // let arr = [1,2,3,4,5,3,2,3,4,10,9]
// // let set = new Set(arr)
// // console.log(set)
// // console.log(arr)


// // let arr1 = [1,2,3,4,5,3,2,3,4,10,9]
// // let set1 = new WeakSet(arr1)
// // console.log(set1)
// // console.log(arr1)

// // let set = new WeakSet()
// // set.add({userName:"Rohan", pass:"R@123"})
// // console.log(set)
// // // console.log()

// // let set1 = new Set()
// // set1.add({userName:"Rohan", pass:"R@123"})
// // console.log(set1)

// // let set2 = new Set()
// // set2.add([1,21,231,13,23,21])
// // console.log(set2)


// // let set3 = new WeakSet()
// // let arr = [1,21,231,13,23,21]
// // set3.add(arr)
// // console.log(set3)
// // console.log(set3.has([1,21,231,13,23,21])); //false
// // console.log(set3.has(arr)); //true


// // const weakset = new WeakSet()
// // weakset.add(1)
// // weakset.add(2)
// // weakset.add("Hello")
// // weakset.add(undefined)
// // console.log(weakset)

// // const set = new Set()
// // const set = new Set()
// // set.add(1)
// // set.add(2)
// // set.add("Hello")
// // set.add(undefined)
// // console.log(set)

// // console.log(5==="5")
// // console.log(5=="5")

// // console.log(5!=="5")
// // console.log(5!="5")


// // let buffer = new ArrayBuffer(10);
// // let view = new Uint8Array(buffer);            

// // view[0] = 255;
// // view[1] = 128;
// // view[2] = 1;


// // console.log(view);

// // let arr=[1,2,3,64,60,55]
// // // for(a of arr){
// // //   console.log(a)
// // // }

// // arr.forEach((a)=>{console.log(a)})
// // const print=  arr.map((i)=>i+5)
// // const a =print.filter((n) => n > 50)
// // console.log(a)

// // const ar = arr.filter((val)=>{val>50})
// // console.log(ar) 


// // let person = { name: "Alice", age: 25 };

// // for (let k in person) {
// //   console.log(`${person[k]}`)
// // }
// //   let arr = [10, 20, 30];

// // for (let value of arr) {
// //   console.log(value);
// // }

// // function f() {
// //   try {
// //     console.log(0);
// //     throw "bogus";
// //   } catch (e) {
// //     console.log(1);
// //     // This return statement is suspended
// //     // until finally block has completed
// //     return true;
// //   } finally {
// //     console.log(3);
// //     return false; // overwrites the previous "return"
// //     console.log(4); // not reachable
// //   }
// //   // "return false" is executed now
// //   console.log(5); // not reachable
// // }
// // console.log(f());
// // function numbe(i) {
// //   try {
// //     if (i == 1)
// //       console.log("first")
// //     else {
// //       throw new Error("Input is not 1");
// //     }
// //   }
// //   catch (e) {
// //     console.log("Caught error:", e.message)
// //   }
// // }
// // numbe(1)


// // Promise.any([Promise.reject(new Error("some error"))]).catch((e) => {
// //   console.log(e instanceof AggregateError); // true
// //   console.log(e.message); // "All Promises rejected"
// //   console.log(e.name); // "AggregateError"
// //   console.log(e.errors); // [ Error: "some error" ]
// // });


// // function useName(obj){
// //   obj.name = "T"
// // }

// // const details ={
// // name:"Mak",
// // }
// // console.log(details.name)
// // useName(details)
// // console.log(details.name)

// // function map(f, a) {
// //   const result = new Array(a.length);
// //   for (let i = 0; i < a.length; i++) {
// //     result[i] = f(a[i]);
// //   }
// //   return result;
// // }

// // const numbers = [0, 1, 2, 5, 10];
// // const cubedNumbers = map(function (x) {
// //   return x * x * x;
// // }, numbers);
// // console.log(cubedNumbers); 


// // function arrVal(fun,a){

// // const result = new Array(a.length)

// // for(let i=0;i<a.length;i++){
// //   result[i] = fun(a[i]);
// // }
// //   return result;
// // }
// // const num = [0,1,2,3,4,5,6]
// // const print = arrVal(function(x){
// //   return x*x*x
// // },num)

// // console.log(print)

// // function fect(n){
// //   if (n == 1){
// //     return n;
// //   }
// //   else{
// //   return n*fect(n-1);
// //   }
// // }
// // console.log(fect(5))
// // console.log(fect(4))
// // console.log(fect(1))
// // console.log(fect(10))


// // const pet = function (name) {
// //   const getName = function () {
// //     // The inner function has access to the "name" variable of the outer function
// //     return name;
// //   };
// //   return getName; // Return the inner function, thereby exposing it to outer scopes
// // };
// // const myPet = pet("Vivie");

// // console.log(myPet());


// // function myConcat(separator) {
// //   let result = ""; // initialize list
// //   // iterate through arguments
// //   for (let i = 1; i < arguments.length; i++) {
// //     result += arguments[i] + separator;
// //   }
// //   return result;
// // }
// // console.log(myConcat(", ", "red", "orange", "blue"));
// // // "red, orange, blue, "

// // console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));
// // // "elephant; giraffe; lion; cheetah; "

// // console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));


// // const rec = function multi(x,...arguments){

// //   return arguments.map((num)=> num*x)
// // }

// // const arr = rec(2, 5, 2, 3);
// // console.log(arr); 

// // function Person() {
// //   this.age = 0;

// //   setInterval(() => {
// //     this.age++; // `this` properly refers to the person object
// //   }, 1000);
// // }

// // const p = new Person();


// // ((n1,n2)=>{ console.log(n1+n2)})(2,3)

// // function add(a,b){
// //     console.log(a+b)
// // }add(2) //NAN

// // function add(a,b=5){
// //     console.log(a+b)
// // }add(2)  //7

// // function add(a=5,b){
// //     console.log(a+b)
// // }add(2)  //NAN

// // function add(a=5,b){
// //     console.log(a+b)
// // }add("",2)   //2


// // class user{
// //     constructor(age,name){
// //         this.age = age
// //         this.name= name
// //     }
// //     greet(){
// //         console.log(`Hello!! ${this.name}`)
// //     }
// //     showAge(){
// //         console.log(`your age is ${this.age} `)
// //     }
// // }

// // const show = new user(32,"Rohan")
// // show.greet()
// // show.showAge()


// // const x = "declared outside function";

// // exampleFunction();

// // function exampleFunction() {
// //   console.log("Inside function");
// //   console.log(x);
// // }

// // console.log("Outside function");
// // console.log(x);


// // var a = 'static';

// // function f1() {
// //    console.log(a);
// // }

// // function f2() {
// //    var a = 'dynamic';
// //    f1();
// // }

// // f2();

// // let x = 10;
// // let expression = "x + 5";
// // let result = eval(expression); // result will be 15

// // let statements = "let y = 20; console.log(y);";
// // eval(statements); 


// // "use strict";
// // let mistypeVariable;

// // Assuming no global variable mistypeVarible exists
// // this line throws a ReferenceError due to the
// // misspelling of "mistypeVariable" (lack of an "a")
// // const mistypeVarible = 17;
// // console.log(mistypeVarible)

// // function getThis() {
// //   return this;
// // }

// // const obj1 = { name: "obj1" };
// // const obj2 = { name: "obj2" };

// // obj1.getThis = getThis;
// // obj2.getThis = getThis;

// // console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
// // console.log(obj2.getThis()); 

// // const obj12 = { name: "obj1" };
// // const obj22 = { name: "obj2" };

// // obj12.get = "getThis";
// // obj22.get = "getThis";

// // console.log(obj12) // { name: 'obj1', getThis: [Function: getThis] }
// // console.log(obj22) 

// // function thisItem(){
// //    return this
// // }

// // const item ={name:"Rohan"}
// // item.thisIt = thisItem
// // console.log(item.thisIt())


// // function logThis() {
// //   "use strict";
// //   console.log(this);
// // }

// // [1, 2, 3].forEach(logThis); 


// // class C {
// //   instanceField = this;
// //   static staticField = this;
// // }

// // const c = new C();
// // console.log(c.instanceField === c); 
// // console.log(c.staticField === c); 

// // console.log(C.instanceField === C); 
// // console.log(C.staticField === C); 

// // function f() {
// //   return this.a;
// // }

// // const g = f.bind({ a: "azerty" });
// // console.log(g()); // azerty

// // const h = g.bind({ a: "yoo" }); // bind only works once!
// // console.log(h()); // azerty

// // const o = { a: 37, f, g, h };
// // console.log(o.a, o.f(), o.g(), o.h());

// // function sum() {
// //   return this.a + this.b + this.c;
// // }

// // const o = {
// //   a: 1,
// //   b: 2,
// //   c: 3,
// //   get average() {
// //     return (this.a + this.b + this.c) / 3;
// //   },
// // };

// // Object.defineProperty(o, "sum", {
// //   get: sum,
// //   enumerable: true,
// //   configurable: true,
// // });

// // console.log(o.average, o.sum);



// // class Dog {
// //   constructor(name, age, breed) {
// //     this.name = name
// //     this.age = age
// //     this.breed = breed
// //   }
// //   tellUsAboutYourSelf() {
// //     return `My name is ${this.name}. I am a ${this.breed} and I am ${this.age} years old.`
// //   }

// //   woof() {
// //     return "WOOF!!!"
// //   }
// // }

// // let fido = new Dog("Fido", 3, "dachshund")
// // console.log(fido.tellUsAboutYourSelf())


// // class Cat{
// //   constructor(name, age, breed) {
// //     this.name = name
// //     this.age = age
// //     this.breed = breed

// //   }

// //   meow() {
// //     return "MEOW!!!"
// //   }
// // }




// // let sparkles = new Cat("Sparkles", 5, "Siamese")

// // // console.log(sparkles.tellUsAboutYourSelf())
// // const extMethod = fido.tellUsAboutYourSelf.bind(sparkles)
// // console.log(extMethod())

// // console.log(fido.woof.call(sparkles))


// // function fetchData(callback) {
// //   setTimeout(() => {
// //     callback("Data loaded");
// //   }, 1000);
// // }

// // fetchData(data => console.log(data));

// // function reverseString(str) {
// //   return str.split('').reverse().join('');
// // }

// // const originalString = "hello";
// // const reversedString = reverseString(originalString);
// // console.log(reversedString);

// // var reverse = function(x) {
// //    const isNegative = x<0
// //     const n = String(Math.abs(x)).split("").reverse().join("")
// //     const result = isNegative? -Number(n):Number(n)

// //      if(result< -Math.pow(2,31)|| result> Math.pow(2,31)-1){
// //       return 0;
// //      }

// //     console.log(result)
// // };
// // reverse(-100)



// // var isPalindrome = function(x) {

// //    const num = String(x).split("").reverse().join("")
// //    // console.log(typeof num)


// //    if(num==x || num==0){
// //       // console.log(num)
// //       return true;
// //    }
// //    else{
// //       return false;
// //    }

// // };
// // console.log(isPalindrome(12))
// // console.log(isPalindrome(121))
// // console.log(isPalindrome(-121))
// // console.log(isPalindrome(0))


// /*********************DSA******************/

// // var isPalindrome = function (x) {
// //    if (x < 0) return false;

// //    const reversed = String(x).split("").reverse().join("");
// //    return String(x) === reversed;
// // };
// // console.log(isPalindrome(12))
// // console.log(isPalindrome(121))
// // console.log(isPalindrome(-121))
// // console.log(isPalindrome(0))

// //    function delay(time) {
// //    var d = new Date();
// //    while (new Date() - d < time);
// // }

// // var promise = new Promise(function(resolve, reject) {
// //    delay(5000); // Delay the page render for 5 seconds
// //    console.log("OK!")
// // });

// // new Promise((resolve,reject)=>{
// //    const name = "pada"
// //    const pass = "panda@123"

// //    if(name != "panda" || pass != "panda@123" )
// //    {
// //       setTimeout(()=>{reject("Uffff... Something wrong")},5000)
// //    }
// //    else{
// //       resolve(`Welcome ${name}`)
// //    }
// // }).then((res)=>{console.log(res)}).catch((e)=>{console.log(e)})


// /*********************DSA******************/

// // var stringPossible = function (word) {
// //     let total = 1;
// //     let i = 0;

// //     while (i < word.length) {
// //         let j = i;
// //         while (j < word.length && word[j] === word[i]) {
// //             j++;
// //         }
// //         let len = j - i;
// //         if (len >= 2) {
// //             total += (len - 1)
// //         }

// //         i = j;
// //     }
// //     return total;
// // }
// // console.log(stringPossible("aabbccdd"))
// // console.log(stringPossible("aabccc"))
// // console.log(stringPossible("abbcccc"))
// // console.log(stringPossible("cccc"))
// // console.log(stringPossible("abcd"))

// // var createHelloWorld = function() {

// //     return function(...args) {
// //         console.log("first")
// //     }
// // };

// // function name(){
// //     console.log("first")
// // }
// // function printName(callback){
// //     callback()
// // }
// // printName(name)

// // var p = new Promise(function(resolve, reject) {
// //     resolve("OK");
// // });

// // var p2 = p.then(function(data) {
// //     // callback returns a promise
// //     return new Promise(function(resolve, reject) {
// //         resolve(console.log(`${data}!! Bye`));
// //     });
// // });

// // var p = new Promise(function(resolve, reject) {
// //     resolve("OK");
// // });

// // var p2 = p.then(function(data) {
// //     throw "Sorry";
// // });

// // console.log(p2);




// // console.log(p2);

// // const arr = [1, 2, 3, 4, 5, 6, 6]
// // arr.push(7)
// // arr.push(7)
// // console.log(arr)
// // const set = new Set(arr)
// // console.log(set)


// // set.add(8)
// // console.log(set)
// // console.log(arr)

// // const wmap = new WeakMap()
// // const obj = {}
// // const obj1 = {}
// // wmap.set(obj,1)
// // wmap.set(obj1,2)
// // console.log(wmap)

// // let car1 = {
// //   speed: 80,
// //   getSpeed: function () {
// //     return this.speed;
// //   },
// // };
// // let car2 = {
// //   speed: 60,
// // };
// // console.log(car1.getSpeed());
// // console.log(car1.getSpeed.call(car2));


// // var p = new Promise(function(resolve, reject) {
// //     reject(console.log("Oops!"));
// // });

// // p.then(null);

// // var p = new Promise(function(resolve, reject) {
// //     reject(console.log("Oops!"));
// // });

// // p.then(null, function(error) {
// //     throw console.log(`Error:${error}`);
// // });

// // var p = new Promise(function(resolve, reject) {
// //     someAsyncOperation();
// // }).
// // then(function(data) {
// //     someOtherAsyncOperation();
// // }).
// // then(function(data) {
// //     someOtherAsyncOperation2();
// // }).
// // then(null, function(error) {
// //     console.log("An error occurred: " + error);
// // });

// // async function f() {

// //     let promise = new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             resolve("this is the first message")
// //         }, 5000)
// //     });

// //     let result = await promise;
// //     console.log(result);

// //     setTimeout(() => {
// //         console.log("this is the second message");
// //     }, 3000);
// //     setTimeout(() => {
// //         console.log("this is the third message");
// //     }, 1000);
// // } f()

// // function name(){
// //     console.log("firstfirstfirst")
// //     console.log("second")
// //     console.log("third")
// // }
// // name()
// // const nums=[1,2,3]

// /*********************DSA******************/


// // var removeDuplicates = function (nums) {

// //     if (nums.length === 0) return 0

// //     let k = 1;
// //     for (let i = 1; i < nums.length; i++) {
// //         if (nums[i] !== nums[k - 1]) {
// //             nums[k] = nums[i]
// //             k++;
// //         }

// //     }
// //     return k;
// // };
// // let nums = [0,0,1,1,1,2,2,3,3,4];
// // let k = removeDuplicates(nums);
// // console.log(k);



// // async function getData() {
// //     const url = "https://fakestoreapi.com/products/category/jewelery";
// //     try {
// //         const response = await fetch(url);
// //         if (!response.ok) {
// //             throw new Error(`Response status: ${response.status}`);
// //         }

// //         const json = await response.json();
// //         console.log(json);
// //     } catch (error) {
// //         console.error(error.message);
// //     }
// // }


// // const response = await fetch("https://example.org/post", {
// //     method: "POST",
// //     headers: {
// //         "Content-Type": "application/json",
// //     },
// //     body: JSON.stringify({ username: "example" }),
// // });


// // const request2 = request1.clone();
// // const response1 = await fetch(request1);
// // console.log(response1.status);

// // const response2 = await fetch(request2);
// // console.log(response2.status);


// // var countPossibleOriginals = function(word, k) {
// //     const MOD = 1e9 + 7;
// //     const n = word.length;

// //     const groups = [];
// //     let i = 0;
// //     while (i < n) {
// //         let j = i;
// //         while (j < n && word[j] === word[i]) {
// //             j++;
// //         }
// //         groups.push(j - i); 
// //         i = j;
// //     }

// //     const numGroups = groups.length;


// //     let dp = new Map();
// //     dp.set(0, 1); 

// //     for (let groupIdx = 0; groupIdx < numGroups; groupIdx++) {
// //         const groupSize = groups[groupIdx];
// //         const newDp = new Map();

// //         for (let [totalRemoved, ways] of dp) {
// //             for (let remove = 0; remove < groupSize; remove++) {
// //                 const newTotalRemoved = totalRemoved + remove;
// //                 const newLength = n - newTotalRemoved;

// //                 if (newLength >= k) {
// //                     newDp.set(newTotalRemoved, (newDp.get(newTotalRemoved) || 0) + ways);
// //                     newDp.set(newTotalRemoved, newDp.get(newTotalRemoved) % MOD);
// //                 }
// //             }
// //         }

// //         dp = newDp;
// //     }

// //     // Sum all valid ways
// //     let total = 0;
// //     for (let ways of dp.values()) {
// //         total = (total + ways) % MOD;
// //     }

// //     return total;
// // };

// // // Test cases
// // console.log("Test 1 - Expected 8 → Got:", countPossibleOriginals("aaabbb", 3));
// // console.log("Test 2 - Expected 5 → Got:", countPossibleOriginals("aabbccdd", 7));
// // console.log("Test 3 - Expected 1 → Got:", countPossibleOriginals("aabbccdd", 8));



// // var possibleStringCount = function(word, k) {
// //     const MOD = 1e9 + 7;
// //     const n = word.length;

// //     if (k > n) return 0;

// //     const groups = [];
// //     for (let i = 0; i < n; ) {
// //         let j = i;
// //         while (j < n && word[j] === word[i]) j++;
// //         groups.push(j - i);
// //         i = j;
// //     }

// //     const maxRemove = n - k;

// //     let coeffs = [1]; 

// //     for (const groupSize of groups) {
// //         const newCoeffs = Array(Math.min(coeffs.length + groupSize - 1, maxRemove + 1)).fill(0);

// //         for (let i = 0; i < coeffs.length; i++) {
// //             if (coeffs[i] === 0) continue;

// //             for (let j = 0; j < groupSize && i + j < newCoeffs.length; j++) {
// //                 newCoeffs[i + j] = (newCoeffs[i + j] + coeffs[i]) % MOD;
// //             }
// //         }

// //         coeffs = newCoeffs;
// //     }

// //     let result = 0;
// //     for (let i = 0; i < coeffs.length; i++) {
// //         result = (result + coeffs[i]) % MOD;
// //     }

// //     return result;
// // };

// // function mul(a, b) {
// //   return a * b;
// // }

// // let double = mul.bind(null, 2);
// // console.log(double)
// // console.log(double(3))
// // console.log(double(4))
// // console.log(double(5))

// // class Animal {
// //   constructor(name) {
// //     this.speed = 0;
// //     this.name = name;
// //   }
// //   run(speed) {
// //     this.speed = speed;
// //     console.log(`${this.name} runs with speed ${this.speed}.`);
// //   }
// //   stop() {
// //     this.speed = 0;
// //     console.log(`${this.name} stands still.`);
// //   }
// // }
// // class Dog extends Animal{
// //   constructor(name,food){
// //     super(name)
// //     this.food = food
// //   }
// //   naFood(){
// //     console.log(`${this.name}, ${this.food}`)
// //   }
// //   eat(){
// //     console.log(`${this.name} is Cute.`);
// //   }
// //   stop(){
// //     super.stop()
// //     this.eat()
// //   }
// // }
// // let animals = new Dog("CAT","Pizza")
// // animals.eat()
// // animals.stop()
// // animals.naFood()


// /**************************************public*******************************/

// // class CoffeeMachine {
// //   waterAmount = 0; 

// //   constructor(power) {
// //     this.power = power;
// //     console.log( `Created a coffee-machine, power: ${power}` );
// //   }

// // }

// // let coffeeMachine = new CoffeeMachine(100);

// // coffeeMachine.waterAmount = 200;
// // console.log(coffeeMachine.waterAmount)

// // class CoffeeMachine {
// //   _waterLevel = 0;

// //   set watervel(value) {
// //     if (value < 0) {
// //       value = 0
// //     }
// //       this._waterLevel = value
// //   }
// //   get watervel() {
// //     return this._waterLevel
// //   }
// //   constructor(power) {
// //     this._power = power
// //   }

// //   get defaultPower(){
// //     return this._power
// //   }
// // }
// // let coffeeMachine = new CoffeeMachine(100);
// // // console.log(coffeeMachine)

// // // coffeeMachine.watervel = -10
// // // console.log(coffeeMachine.watervel)
// // // console.log(coffeeMachine)

// // coffeeMachine.defaultPower = 200
// // console.log(coffeeMachine.defaultPower)
// // console.log(coffeeMachine)


// // class CoffeeMachine {
// //   #waterLimit = 200;

// //   #fixWaterAmount(value) {
// //     if (value < 0) return 0;
// //     if (value > this.#waterLimit) return this.#waterLimit;
// //   }

// //   setWaterAmount(value) {
// //     this.#waterLimit = this.#fixWaterAmount(value);
// //   }

// // }

// // let coffeeMachine = new CoffeeMachine();
// // console.log(coffeeMachine)
// // // can't access privates from outside of the class
// // coffeeMachine.#fixWaterAmount(123); // Error
// // coffeeMachine.#waterLimit = 1000; 


// // class CoffeeMachine {

// //   #waterAmount = 0;

// //   get waterAmount() {
// //     return this.#waterAmount;
// //   }

// //   set waterAmount(value) {
// //     if (value < 0) value = 0;
// //     this.#waterAmount = value;
// //   }
// // }

// // let machine = new CoffeeMachine();
// // console.log(machine)
// // machine.waterAmount = 100;
// // alert(machine.#waterAmount); //

// // class PowerArray extends Array {
// //   isEmpty() {
// //     return this.length === 0;
// //   }
// // }
// // let arr = new PowerArray(10,20,30,40,50,60)
// // console.log(arr.isEmpty())

// // let fil = arr.filter((a)=>{return a > 30 })
// //   console.log(fil)

// // class PowerArray extends Array {
// //   isEmpty() {
// //     return this.length === 0;
// //   }
// // }

// // let arr = new PowerArray(1, 2, 5, 10, 50);
// // console.log(arr.isEmpty()); // false

// // let filteredArr = arr.filter(item => item >= 10);
// // console.log(filteredArr); // 10, 50
// // console.log(filteredArr.isEmpty()); 

// // class lengt extends Array{
// //   isEmpty(){
// //     return this.length === 0;
// //   }
// // }
// // let arr = new lengt()
// // console.log(arr.isEmpty())
// // console.log(arr.constructor === lengt)// true

// // let username = {
// //   firstName(){
// //     console.log(`Firstname is ${this.firstNameuser}`)
// //   },
// //   lastName(){
// //     console.log(`lastname is ${this.lastNameuser}`)
// //   }
// // }

// // class fullName{
// //   constructor(firstNameuser,lastNameuser){
// //     this.firstNameuser = firstNameuser
// //     this.lastNameuser = lastNameuser
// //   }
// // }
// // Object.assign(fullName.prototype,username)
// // let name = new fullName("Arun","Jetly").firstName()


// // var nums = [1, 5, 16];

// // for (var num of nums) {
// //    console.log(num);
// // }

// // for (const key in nums) {

// //   console.log(nums[key])
// // }

// // nums.forEach((k)=>console.log(k))

// // nums.map((k)=> console.log(k))

// // var uint8 = new Uint8Array([15, 192, 16]);

// // for (var byte of uint8) {
// //    console.log(byte.toString(16));
// // }

// /**********************************DSA*************************/

// // var kthCharacter = function (k) {

// //   let word = "a"
// //   while (word.length < k) {

// //     let next = "";
// //     for (let ch of word) {
// //       if (ch === "z") {
// //         next += "a"
// //       }
// //       else {
// //         next += String.fromCharCode(ch.charCodeAt(0) + 1);
// //       }
// //     }
// //     word += next
// //   }
// //   return word[k - 1]
// // };
// // console.log(kthCharacter(5))
// // console.log(kthCharacter(10))
// // console.log(kthCharacter(15))
// // console.log(kthCharacter(12))

// // Number.prototype[Symbol.iterator] = function() {
// //    return this.toString()[Symbol.iterator]();
// // }

// // Number.prototype[Symbol.iterator]= function(){
// //   return this.toString()[Symbol.iterator]()
// // }

// // Number.prototype[Symbol.iterator] = function(){
// //   return this.toString()[Symbol.iterator]()
// // }
// // var num = 1566;

// // for (var n of num) {
// //    console.log(n);
// // }

// // var o = {x: 10, y: 20, z: 30}
// // o.forEach(element => {
// //   console.log(element)
// // });  //failed

// // for (const e of o) {
// //   console.log(e)
// // }  //failed

// ///////////////passs///////////////////

// // for (const k in o) {
// // console.log(k,o[k])
// // }

// // for (const k of Object.values(o)) {
// //   console.log(k)

// // }


// /////

// // for (let i = 0; i < 5; i++) {
// //   console.log(i)
// // }

// // var x;

// // function* gen() {
// //    x = yield 30;
// // }

// // var seq = gen();
// // // console.log(seq.next())
// // // console.log(seq.next())
// // // console.log(x)
// // console.log(seq.next(10))


// // function marry(man, woman) {
// //   woman.husband = man;
// //   man.wife = woman;

// //   return {
// //     father: man,
// //     mother: woman
// //   }
// // }

// // let family = marry({
// //   name: "John"
// // }, {
// //   name: "Ann"
// // });

// // const families = new marry("As",
// //    'ds'
// // )
// // console.log(families)
// // delete family.father;
// // delete family.mother.husband;

// // function greet(name,callback){
// //    console.log(`hello:${name}`)
// //    callback()
// // }
// // function name(){
// //    console.log("first")
// // }
// // greet("ROCKY",name)


// // function anotherFunction(vals){
// // console. log(vals) ;
// // }
// // function main() {
// // const values = { x: [10,20,30], y:[10,40]}
// // anotherFunction (values) ;
// // }
// // main();


// // function arr(){
// //    const arr1 = [10,20,30]
// //    const arr2 = [10,20,30]
// //    console.log(arr1.keys===arr2.keys)
// //    // console.log(arr1===arr2)  this is not correct for compare the values
// //    // console.log(Object.is(arr1,arr2)) this false
// //    // console.log(arr1===arr1)
// // }
// // arr()
// // const arr=[1,2,3,4,5,6,7,8,9,10]
// // const re =arr.reduce((a,b)=>{
// //    return a+b;
// // },0)
// // console.log(re)

// // const add = (a, b) => {console.log(a + b);}
// // add(3,4)

// // const p = new Promise((resolve, reject) => {
// //   setTimeout(() => resolve("Done"), 1000);
// // });

// // p.then(result => console.log(result));

// // const arr= [23,23,23,4,4]
// // const num = arr[Symbol.iterator]()
// // console.log(num)
// // console.log(num.next())
// // console.log(num.next())
// // console.log(num.next())

// // const numb = 123423
// // Number.prototype[Symbol.iterator]=function(){
// //     return this.toString()[Symbol.iterator]()
// // }
// // for (const element of numb) {
// // console.log(element)
// // }

// // function fac(num){
// //     if (num == 1) {return 1}
// //     else{
// //         return num * fac(num-1)
// //     }

// // }console.log(fac(4))

// // const person1 = { name: "Alice" };
// // const person2 = { name: "Bob" };

// // function greet() {
// //   console.log(`Hello, ${this.name}`);
// // }

// // greet.call(person1); // Hello, Alice

// // const bindPerson = greet.bind(person1)
// // greet.call(person2);
// // bindPerson()

// // const name ={userName:"MAK"}
// // const lastName ={
// //     __proto__:name
// // }
// // console.log(lastName.__proto__)

// // const userDetails = function(name,...args){
// //     console.log(`${name},${args}`)
// // }
// // userDetails("mak","rom","ram",12)

// // rewriting class User in pure functions

// // 1. Create constructor function
// // function User(name) {
// //   this.name = name;
// // }
// // // a function prototype has "constructor" property by default,
// // // so we don't need to create it

// // // 2. Add the method to prototype
// // User.prototype.sayHi = function() {
// //  console.log(this.name);
// // };

// // // Usage:
// // let user = new User("John");
// // user.sayHi();


// // class username{
// //     constructor(name){
// //         this.name = name
// //     }

// //     get name(){
// //         return this._name;
// //     }
// //     set name(val){
// //         if(val.length<4){
// //             console.log("Short enought to understend")
// //             return;
// //         }
// //         this._name = val
// //     }
// // }
// // let user = new username("makkk")
// // user

// class arr extends Array {
//     isEmpty() {
//         return this.length === 0
//     }
// }
// const print = new arr()
// console.log(print.isEmpty())

// const arr=[1,2,3,4,5,6,]
// const print = arr[Symbol.iterator]()
// console.log(print.next())
// console.log(print.next())
// console.log(print.next())
// console.log(print.next())
// console.log(print.next())
// console.log(print.next())
// console.log(print.next())

// const num = 12334
// // const num = "<dcs>"

// Number.prototype[Symbol.iterator] = function(){
//     return this.toString()[Symbol.iterator]()
// }

// for (const e of num) {
//     console.log(e)
// }

// function name(username,callback){
//     this.username = username
//     console.log(`${this.username}`)
//     callback()
// }
// function user(){
//     console.log("Second")
// }
// const newo = new name("mak",user)

// new Promise((resolve,reject)=>{
//     resolve(console.log("It is recovered!!!"))
// }).then((f)=>{return new Promise(function(resolve,reject){
//     resolve(f+"bye")
// })}) 

// new Promise((resolve,reject)=>{
//     reject(console.log("first"))
// }).then(null,data =>{console.log(data)})

// var p = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         reject("Sorry");
//     }, 3000);
// });
// p.then(null, function(error) {
//     console.log("An error occurred: " + error);
// });

// async function foo() {
//   const result1 = await new Promise((resolve) =>
//     setTimeout(() => resolve(console.log("1"))),
//   );
//   const result2 = await new Promise((resolve) =>
//     setTimeout(() => resolve(console.log("2"))),
//   );
// }
// foo();

// var isEmpty = function (obj) {
//     for (const key in obj) {
//         if (key.length != 0) {
//             console.log("1")
//         }
//         else{
//         console.log("0")
//         }
//     }
// };
// isEmpty({ })

// var isEmpty = function (obj) {
//     if (Array.isArray(obj)) {
//         return obj.length === 0;
//     }
//     return Object.keys(obj).length === 0;
// };

