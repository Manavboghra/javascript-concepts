export default class fullname{
    constructor(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    fname(){
        console.log(`The firstname of person is ${this.firstName}`)
    }
    lname(){
        console.log(`the last name of person is ${this.lastName}`)
    }
}
