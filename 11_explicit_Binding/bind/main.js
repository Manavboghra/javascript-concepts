
function bindCheck(...argu){
    console.log(this,...argu);
}

const bindCheckOne = bindCheck.bind("Hello",1,2,3)
const bindCheckTwo = bindCheckOne.bind("User",5,6,7)

console.log(bindCheckTwo(7,98))
