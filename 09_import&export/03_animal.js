export default class animal{
     constructor(name,age) {
        this.name = name
        this.age = age        
    }
}

export function animalName(anml){
    console.log(`This is the ${anml.name}`)
}

export function animalAge(anml){
    console.log(`This is the ${anml.age} years old`)
}