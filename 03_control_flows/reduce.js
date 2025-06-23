const myNum= [1,2,3,4,5,6]
const i=0

const newNums = myNum.reduce( function (acc,curval) {
    // console.log(`acc: ${acc}, Curval: ${curval}`)
    return acc+curval
    
},i )

// console.log(newNums);

const courses = [
  { course: "Web Development", length: "3 months", price: 299},
  { course: "Data Science", length: "6 months", price: 499},
  { course: "UI/UX Design", length: "2 months", price: 199},
  { course: "Machine Learning", length: "4 months", price: 399},
  { course: "Digital Marketing", length: "3 months", price: 249}
];


const finalPrice = courses.reduce( (acc,p) => (acc+p.price),0  )

console.log(finalPrice)
