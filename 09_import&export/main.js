console.log("MOdule importing....")
import animal, {animalAge, animalName} from "./03_animal.js";
import fullname from "./04_class.js";

const print = new animal("Lion",20)
console.log(print)

animalAge(print)
animalName(print)

const playerName = new fullname("AJIT","AGARKAR")
playerName.fname()
playerName.lname()
console.log(playerName)

