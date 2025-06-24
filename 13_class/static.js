
class User {
    constructor(username, age) {
        this.username = username;
        this.age = age;
    }

    static generateID(){
      return  Math.floor(Math.random()*100)
    }
    user(){
        const id = User.generateID()
        console.log(`ID:${id} Name:${this.username}, Age:${this.age}`)
    }
}
// const user = new User("Attharva",21)


let user = [
new User("Attharva",21),
new User("Rohan",26),
new User("Twinn",22),
new User("Vatsal",25),
new User("Nan",23)
];

user.forEach(u => u.user());


let use = new User ("ram",22)
