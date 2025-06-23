const randomNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = randomNumbers.map( (n) => n+10  )

const newNums = randomNumbers.map((n) => n * 10).filter((n) => n > 50)

console.log(newNums);


// const newNums11 = randomNumbers.forEach( (n) => n+10  )

// console.log(newNums11);
