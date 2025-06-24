class User {
    _userAge = 0;
    set userAge(value) {
        if (value < 0) {
            value = 0
        }
        this._userAge = value;
    }
    get userAge(){
        return this._userAge;
    }

    constructor(username){
        this.username = username;
    }
}

let user = new User("Rohan")
user.userAge=-12
console.log(user.userAge)