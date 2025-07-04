function createUser() {
  let user = {
    name: "Ajit",
    hobby: "Cricket"
  };
  return user;
}

let u = createUser(); 
console.log(u)
u = null; 
console.log(u)