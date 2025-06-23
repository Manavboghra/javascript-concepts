const fruits = ["Mango", "Strawberry", "Pineapple", "Kiwi", "Blueberry", "Apple", "Banana", "Watermelon", "Cherry", "Papaya"];

// fruits.forEach( function (i){
//     console.log(i)
// } )

// fruits.forEach( i => {
// console.log(i)
// } )

// function rolex(i) {
//     console.log(i)
// }

// fruits.forEach(rolex) 

// fruits.forEach( (i, index, arr) =>{
//     console.log(i, index, arr)
// } )

const randomStringObjects = [
  {name1:"Olivia",name2:"Liam"},
  {name1:"Emma",name2:"Noah"},
  {name1:"Ava",name2:"Elijah"}
];

randomStringObjects.forEach((i) => {
    // console.log(i.name1);
    
});

const randomNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums =  randomNumbers.filter( (n) => {
//     return n>6
// } )

// const newNums =  randomNumbers.filter( (n) => { n>6 // When you use {} braces then it is required to return items otherwise they give an empty array
// } )

// const newNums =  randomNumbers.filter( (n) =>  n>6)


// console.log(newNums)

const movies = [
  { title: "Inception", genre: "Sci-Fi", rating: 8.8, year: 2010 },
  { title: "The Dark Knight", genre: "Action", rating: 9.0, year: 2008 },
  { title: "Interstellar", genre: "Adventure", rating: 8.6, year: 2014 },
  { title: "Parasite", genre: "Thriller", rating: 8.6, year: 2019 },
  { title: "The Godfather", genre: "Crime", rating: 9.2, year: 1972 },
  { title: "Forrest Gump", genre: "Drama", rating: 8.8, year: 1994 },
  { title: "The Matrix", genre: "Sci-Fi", rating: 8.7, year: 1999 },
  { title: "Gladiator", genre: "Action", rating: 8.5, year: 2000 },
  { title: "La La Land", genre: "Romance", rating: 8.0, year: 2016 },
  { title: "Spirited Away", genre: "Animation", rating: 8.6, year: 2001 }
];

// const filteredMovies = movies.filter( (mv) => mv.genre == "Sci-Fi"  )
// const filteredMovies = movies.filter( (mv) => mv.rating === 8.6   )
// const filteredMovies = movies.filter( (mv) => mv.rating >= 8.6   )
// const filteredMovies = movies.filter( (mv) => mv.rating >= 8.8 && mv.genre == "Sci-Fi"  )

// console.log(filteredMovies)

randomNumbers.forEach( (n) => {
      const num= n+10
    console.log(num)
} )