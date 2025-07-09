
class User {
    constructor(username, age, id) {
        this.username = username;
        this.age = age;
        this.id = User.generateID();
    }

    static generateID() {
        const letters = '0123456789abcdef-';
        let randomId= "";
        for (let i = 0; i < 10; i++) {
            randomId += letters[Math.floor(Math.random() * 17)];
        }
        return randomId;
        
    }
    user() {
        // const id = User.generateID()
        console.log(`ID:${this.id} Name:${this.username}, Age:${this.age}`)
    }
}
const us = User.generateID()
const user = new User("Attharva",21)
// const test =user.generateID()
console.log(us)


// let user = [
//     new User("Attharva", 21),
//     new User("Rohan", 26),
//     new User("Twinn", 22),
//     new User("Vatsal", 25),
//     new User("Nan", 23)
// ];

// user.forEach(u => u.user());


// let use = new User("ram", 22)


// //use of static keyword



// const fs = require("fs");
// const path = "./user_ids.json";

// class User {
//     static idRegistry = User.loadIDs();

//     constructor(username, age) {
//         this.username = username;
//         this.age = age;
//         const key = `${username}-${age}`;

//         if (User.idRegistry[key]) {
//             this.id = User.idRegistry[key];
//         } else {
//             this.id = User.generateID();
//             User.idRegistry[key] = this.id;
//             User.saveIDs();
//         }
//     }

//     static generateID() {
//         const letters = '0123456789abcdef';
//         let id = "";
//         for (let i = 0; i < 10; i++) {
//             id += letters[Math.floor(Math.random() * letters.length)];
//         }
//         return id;
//     }

//     static loadIDs() {
//         if (fs.existsSync(path)) {
//             const raw = fs.readFileSync(path);
//             return JSON.parse(raw);
//         } else {
//             return {};
//         }
//     }

//     static saveIDs() {
//         fs.writeFileSync(path, JSON.stringify(User.idRegistry, null, 2));
//     }

//     user() {
//         console.log(`ID: ${this.id} | Name: ${this.username}, Age: ${this.age}`);
//     }
// }

// // Test
// let users = [
//     new User("Attharva", 21),
//     new User("Attharva", 21),
//     new User("manav", 21)
// ];

// users.forEach(u => u.user());


