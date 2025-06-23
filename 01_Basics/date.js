let date = new Date()
// console.log(date);

// console.log(date.toString())
// console.log(date.getDate())
// console.log(date.getTimezoneOffset())
// console.log(date.setDate(12))
// console.log(date.toISOString())
// console.log(date.toUTCString())

let dateCreated = new Date("12-06-2025")    
// console.log(dateCreated);
// console.log(dateCreated.)
newDate = dateCreated.getTime()
console.log(newDate);


// const event = new Date()
// console.log(event)
console.log(newDate.toLocaleString("en-IN", { timeZone: "IST" }));